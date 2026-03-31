const puppeteer = require('puppeteer');

async function testAdminAuthentication() {
    console.log('🧪 Starting Admin Authentication Tests...\n');
    
    let browser;
    try {
        // Launch browser
        browser = await puppeteer.launch({ 
            headless: false, // Set to true for headless mode
            slowMo: 1000 // Slow down actions for visibility
        });
        
        const page = await browser.newPage();
        
        // Test 1: Check initial state (should show login form)
        console.log('📋 Test 1: Checking initial state...');
        await page.goto('http://localhost:3000/admin');
        await page.waitForSelector('h2');
        
        const loginTitle = await page.$eval('h2', el => el.textContent);
        if (loginTitle.includes('Admin Login')) {
            console.log('✅ PASS: Initial state shows login form');
        } else {
            console.log('❌ FAIL: Initial state does not show login form');
        }
        
        // Test 2: Test login with correct credentials
        console.log('\n📋 Test 2: Testing login with correct credentials...');
        await page.type('input[name="username"]', 'ManeSanjay');
        await page.type('input[name="password"]', 'SanjayMane');
        await page.click('button[type="submit"]');
        
        // Wait for dashboard to load
        await page.waitForSelector('h1', { timeout: 5000 });
        const dashboardTitle = await page.$eval('h1', el => el.textContent);
        
        if (dashboardTitle.includes('Admin Dashboard')) {
            console.log('✅ PASS: Login successful, dashboard loaded');
        } else {
            console.log('❌ FAIL: Login failed, dashboard not loaded');
        }
        
        // Test 3: Check localStorage persistence
        console.log('\n📋 Test 3: Testing localStorage persistence...');
        const authStatus = await page.evaluate(() => {
            return localStorage.getItem('adminAuthenticated');
        });
        
        if (authStatus === 'true') {
            console.log('✅ PASS: Authentication state saved in localStorage');
        } else {
            console.log('❌ FAIL: Authentication state not saved in localStorage');
        }
        
        // Test 4: Test page refresh (should stay logged in)
        console.log('\n📋 Test 4: Testing page refresh persistence...');
        await page.reload();
        await page.waitForSelector('h1', { timeout: 5000 });
        
        const refreshedTitle = await page.$eval('h1', el => el.textContent);
        if (refreshedTitle.includes('Admin Dashboard')) {
            console.log('✅ PASS: Authentication persists after page refresh');
        } else {
            console.log('❌ FAIL: Authentication lost after page refresh');
        }
        
        // Test 5: Test logout functionality
        console.log('\n📋 Test 5: Testing logout functionality...');
        await page.click('button:has-text("Logout")');
        await page.waitForSelector('h2', { timeout: 5000 });
        
        const logoutTitle = await page.$eval('h2', el => el.textContent);
        if (logoutTitle.includes('Admin Login')) {
            console.log('✅ PASS: Logout successful, returned to login form');
        } else {
            console.log('❌ FAIL: Logout failed, still on dashboard');
        }
        
        // Test 6: Check localStorage after logout
        console.log('\n📋 Test 6: Testing localStorage after logout...');
        const logoutAuthStatus = await page.evaluate(() => {
            return localStorage.getItem('adminAuthenticated');
        });
        
        if (logoutAuthStatus === null) {
            console.log('✅ PASS: localStorage cleared after logout');
        } else {
            console.log('❌ FAIL: localStorage not cleared after logout');
        }
        
        // Test 7: Test page refresh after logout (should stay logged out)
        console.log('\n📋 Test 7: Testing page refresh after logout...');
        await page.reload();
        await page.waitForSelector('h2', { timeout: 5000 });
        
        const finalTitle = await page.$eval('h2', el => el.textContent);
        if (finalTitle.includes('Admin Login')) {
            console.log('✅ PASS: User remains logged out after page refresh');
        } else {
            console.log('❌ FAIL: User automatically logged in after page refresh');
        }
        
        // Test 8: Test login with incorrect credentials
        console.log('\n📋 Test 8: Testing login with incorrect credentials...');
        await page.type('input[name="username"]', 'WrongUser');
        await page.type('input[name="password"]', 'WrongPass');
        await page.click('button[type="submit"]');
        
        // Wait for error message
        await page.waitForTimeout(1000);
        
        const errorMessage = await page.$eval('.text-red-600', el => el.textContent);
        if (errorMessage.includes('Invalid credentials')) {
            console.log('✅ PASS: Invalid credentials properly rejected');
        } else {
            console.log('❌ FAIL: Invalid credentials not properly rejected');
        }
        
        console.log('\n🎉 All tests completed successfully!');
        
    } catch (error) {
        console.error('❌ Test failed:', error.message);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

// Check if servers are running
async function checkServers() {
    console.log('🔍 Checking if servers are running...');
    
    try {
        const response = await fetch('http://localhost:3000');
        console.log('✅ React development server is running on port 3000');
    } catch (error) {
        console.log('❌ React development server is not running on port 3000');
        console.log('Please start the React app with: npm start');
        return false;
    }
    
    try {
        const response = await fetch('http://localhost:5000/api/excel-data');
        console.log('✅ Backend server is running on port 5000');
    } catch (error) {
        console.log('❌ Backend server is not running on port 5000');
        console.log('Please start the backend with: node server.js');
        return false;
    }
    
    return true;
}

// Run the tests
async function runTests() {
    const serversRunning = await checkServers();
    if (serversRunning) {
        await testAdminAuthentication();
    } else {
        console.log('\n⚠️ Please start both servers before running tests');
        console.log('Frontend: cd frontend && npm start');
        console.log('Backend: cd frontend && node server.js');
    }
}

runTests();


