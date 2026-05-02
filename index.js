const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const college = require('./router/college');
const student = require('./router/student');
const login = require('./router/login');
const categories = require('./router/category');
const states = require('./router/state');
const services = require('./router/service');
const city = require('./router/city.js');
const {
  config: { API_VERSION, DB_STRING, NODE_ENV, PORT },
} = require('./config');

const app = express();
app.use(express.json());
const corsOptions = {
  exposedHeaders: 'auth',
};

app.use(cors(corsOptions));

// router
app.use(`${API_VERSION}/categoryImages/:id`, (req, res) => {
  res.sendFile(path.join(__dirname, `categoryImages/${req.params.id}.png`));
});
app.use(`${API_VERSION}/college`, college);
app.use(`${API_VERSION}/student`, student);
app.use(`${API_VERSION}/login`, login);
app.use(`${API_VERSION}/categories`, categories);
app.use(`${API_VERSION}/states`, states);
app.use(`${API_VERSION}/services`, services);
app.use(`${API_VERSION}/city`, city);

if (NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

// Serve static files from the React app in production mode
// Note: On Vercel, static files are handled by vercel.json rewrites for better performance
const isProduction = NODE_ENV === 'production' && !process.env.VERCEL;

if (isProduction) {
  console.log('Running in PRODUCTION mode');
  const buildPath = path.join(process.cwd(), 'client', 'build');

  app.use(express.static(buildPath));

  // Catch-all route to serve the React app
  app.get('*', (req, res) => {
    const indexPath = path.join(buildPath, 'index.html');
    res.sendFile(indexPath, (err) => {
      if (err) {
        console.error('Error sending index.html:', err);
        res.status(500).send('Could not load frontend. Check if client/build exists.');
      }
    });
  });
}

// Database connection
const connectDB = async () => {
  try {
    if (DB_STRING && DB_STRING !== '<YOUR_DB_STRING>') {
      console.log('Connecting to:', DB_STRING.split('@')[1] || 'Unknown Host');
      await mongoose.connect(DB_STRING);
      console.log('✅ Database connected successfully');
    } else {
      console.log('⚠️ Please provide a valid DB_STRING in .env');
    }
  } catch (error) {
    console.error('❌ Database connection error:', error.message);
  }
};

connectDB();

// Export the app for Vercel serverless functions
module.exports = app;

// Only start the server if we are running locally (not on Vercel)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
}
