# Frontend with Integrated Backend Setup

## Environment Variables

Create a `.env` file in the frontend folder with the following variables:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
TO_EMAIL=recipient-email@gmail.com
PORT=5000
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables (see above)

3. Run the development servers:
```bash
# Terminal 1 - Start React development server
npm run start:dev

# Terminal 2 - Start Express backend server
npm run start:server
```

## Available Scripts

- `npm start` - Start React development server (port 3000)
- `npm run server` - Start Express backend server (port 5000)
- `npm run dev` - Start backend server only
- `npm run build` - Build React app for production
- `npm run build:server` - Build and serve production version
- `npm run start:dev` - Start React dev server on port 3000
- `npm run start:server` - Start Express server on port 5000

## Development Setup

1. Open two terminal windows
2. In first terminal: `npm run start:dev` (React on port 3000)
3. In second terminal: `npm run start:server` (Express on port 5000)
4. Access your app at `http://localhost:3000`

## Features

- Contact form with email sending
- Excel file generation for contact submissions
- Static file serving for React build
- CORS enabled for development
- Environment variable support
