const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('build')); // Serve React build files

// Excel writer function
const writeToExcel = (data, filePath = 'contacts.xlsx') => {
  try {
    let workbook;
    let existingData = [];

    // Check if file exists and read existing data
    if (fs.existsSync(filePath)) {
      try {
        workbook = XLSX.readFile(filePath);
        if (workbook.SheetNames.length > 0) {
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          existingData = XLSX.utils.sheet_to_json(worksheet);
        }
      } catch (readError) {
        console.error("❌ Error reading existing file:", readError);
        existingData = [];
      }
    }

    // Create new workbook if it doesn't exist or was corrupted
    if (!workbook) {
      workbook = XLSX.utils.book_new();
    }

    // Add new data to existing data
    const allData = [...existingData, data];

    // Create new worksheet with all data
    const newSheet = XLSX.utils.json_to_sheet(allData);

    // Clear existing sheets and add the new one
    workbook.SheetNames = [];
    XLSX.utils.book_append_sheet(workbook, newSheet, 'Contacts');

    // Write the file
    XLSX.writeFile(workbook, filePath);
    console.log("✅ Excel file written successfully:", filePath);
  } catch (err) {
    console.error("❌ Failed to write Excel file:", err);
    // Create a fresh file if there's an error
    try {
      const workbook = XLSX.utils.book_new();
      const sheet = XLSX.utils.json_to_sheet([data]);
      XLSX.utils.book_append_sheet(workbook, sheet, 'Contacts');
      XLSX.writeFile(workbook, filePath);
      console.log("✅ Created fresh Excel file:", filePath);
    } catch (freshError) {
      console.error("❌ Failed to create fresh Excel file:", freshError);
    }
  }
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const formData = {
      Name: name,
      Email: email,
      Phone: phone,
      Message: message,
      Date: new Date().toLocaleString(),
    };

    // Save to Excel
    writeToExcel(formData);

    // Send email only if environment variables are set
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.TO_EMAIL) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: `"SSE Contact Form" <${process.env.EMAIL_USER}>`,
          to: process.env.TO_EMAIL,
          subject: 'New Contact Form Submission',
          text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
          `,
        });
        console.log("✅ Email sent successfully");
      } catch (emailError) {
        console.error("❌ Email sending failed:", emailError.message);
        // Don't fail the request if email fails
      }
    } else {
      console.log("⚠️ Email not sent - environment variables not configured");
    }

    res.json({ success: true, message: 'Form submitted successfully!' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Admin API endpoints
app.get('/api/excel-data', (req, res) => {
  try {
    const filePath = 'contacts.xlsx';
    
    console.log('📁 Checking for Excel file:', filePath);
    console.log('📁 File exists:', fs.existsSync(filePath));
    
    if (!fs.existsSync(filePath)) {
      console.log('📁 File does not exist, returning empty array');
      return res.json([]);
    }

    console.log('📁 Reading Excel file...');
    const workbook = XLSX.readFile(filePath);
    console.log('📁 Workbook sheets:', workbook.SheetNames);
    
    if (workbook.SheetNames.length === 0) {
      console.log('📁 No sheets found in workbook');
      return res.json([]);
    }

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    console.log('📁 Reading sheet:', sheetName);
    
    const data = XLSX.utils.sheet_to_json(worksheet);
    console.log('📁 Data rows found:', data.length);
    console.log('📁 First row sample:', data[0]);

    res.json(data);
  } catch (error) {
    console.error('❌ Error reading Excel file:', error);
    res.status(500).json({ error: 'Failed to read Excel file', details: error.message });
  }
});

app.get('/api/download-excel', (req, res) => {
  try {
    const filePath = 'contacts.xlsx';
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Excel file not found' });
    }

    // Set proper headers for Excel file download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="contacts.xlsx"');
    res.setHeader('Content-Length', fs.statSync(filePath).size);

    // Read and send the file
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);

    fileStream.on('error', (err) => {
      console.error('Error streaming file:', err);
      if (!res.headersSent) {
        res.status(500).json({ error: 'Failed to download file' });
      }
    });

  } catch (error) {
    console.error('Error downloading Excel file:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Failed to download Excel file' });
    }
  }
});

// Test endpoint to recreate Excel file
app.post('/api/recreate-excel', (req, res) => {
  try {
    const filePath = 'contacts.xlsx';
    
    // Delete existing file if it exists
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log("🗑️ Deleted existing Excel file");
    }
    
    // Create fresh sample file
    const sampleData = [
      {
        Name: 'Test Contact',
        Email: 'test@example.com',
        Phone: '+1234567890',
        Message: 'This is a test contact entry',
        Date: new Date().toLocaleString()
      }
    ];
    
    const workbook = XLSX.utils.book_new();
    const sheet = XLSX.utils.json_to_sheet(sampleData);
    XLSX.utils.book_append_sheet(workbook, sheet, 'Contacts');
    XLSX.writeFile(workbook, filePath);
    
    console.log("✅ Recreated Excel file successfully");
    res.json({ success: true, message: 'Excel file recreated successfully' });
  } catch (error) {
    console.error("❌ Error recreating Excel file:", error);
    res.status(500).json({ error: 'Failed to recreate Excel file' });
  }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Create sample Excel file if it doesn't exist
const createSampleExcel = () => {
  const filePath = 'contacts.xlsx';
  if (!fs.existsSync(filePath)) {
    console.log("📁 Creating sample Excel file...");
    const sampleData = [
      {
        Name: 'Sample Contact',
        Email: 'sample@example.com',
        Phone: '+1234567890',
        Message: 'This is a sample contact entry',
        Date: new Date().toLocaleString()
      }
    ];
    
    const workbook = XLSX.utils.book_new();
    const sheet = XLSX.utils.json_to_sheet(sampleData);
    XLSX.utils.book_append_sheet(workbook, sheet, 'Contacts');
    
    try {
      XLSX.writeFile(workbook, filePath);
      console.log("✅ Created sample Excel file:", filePath);
    } catch (err) {
      console.error("❌ Failed to create sample Excel file:", err);
    }
  } else {
    console.log("📁 Excel file already exists:", filePath);
    // Test if the existing file is valid
    try {
      const workbook = XLSX.readFile(filePath);
      console.log("✅ Existing Excel file is valid");
      console.log("📁 Sheets:", workbook.SheetNames);
      if (workbook.SheetNames.length > 0) {
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json(worksheet);
        console.log("📁 Data rows:", data.length);
      }
    } catch (err) {
      console.error("❌ Existing Excel file is corrupted, recreating...");
      // Delete corrupted file and recreate
      fs.unlinkSync(filePath);
      createSampleExcel();
    }
  }
};

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Email config: ${process.env.EMAIL_USER ? 'Configured' : 'Not configured'}`);
  createSampleExcel();
});
