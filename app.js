const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
};

app.use(cors(corsOpts));
app.use(bodyParser.json());

// Import Routes
const templatesRoute = require('./routes/templates');
app.use('/templates', templatesRoute);

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Template Provider!');
});

// Connect To DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    () => console.log('Connected to database!!')
);

// How to start listening server
app.listen(3001);