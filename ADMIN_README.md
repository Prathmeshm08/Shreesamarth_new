# Admin Panel Documentation

## Overview
The admin panel provides secure access to manage Excel data from contact form submissions.

## Access
- **URL**: `/admin`
- **Username**: `admin`
- **Password**: `admin123`

## Features

### 1. Authentication
- Secure login system with username and password
- Session persistence using localStorage
- Automatic logout functionality

### 2. Excel Data Management
- **View Data**: Display Excel file contents in a table format
- **Download Excel**: Download the complete Excel file
- **Data Preview**: Shows first 10 rows of the Excel data
- **Contact Count**: Displays total number of contacts

### 3. API Endpoints
- `GET /api/excel-data` - Retrieve Excel data as JSON
- `GET /api/download-excel` - Download Excel file

## Security Notes
⚠️ **Important**: The current implementation uses client-side authentication for demonstration purposes. In a production environment, you should:

1. Implement server-side authentication
2. Use secure session management
3. Hash passwords properly
4. Add rate limiting
5. Use HTTPS
6. Implement proper authorization middleware

## File Structure
- `contacts.xlsx` - Excel file containing contact form submissions
- Admin component: `src/pages/Admin.jsx`
- API endpoints: `server.js`

## Usage
1. Navigate to `/admin`
2. Enter credentials (admin/admin123)
3. Use the dashboard to view or download Excel data
4. Click logout when finished

## Technical Details
- Built with React and Express.js
- Uses XLSX library for Excel file handling
- Styled with Tailwind CSS
- Responsive design for mobile and desktop
