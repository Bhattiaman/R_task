// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Sample job listings data
const jobListings = require('./jobListings.json');

app.use(bodyParser.json());

// API endpoint to fetch job listings with pagination
app.post('/api/jobs', (req, res) => {
  const { limit, offset } = req.body;
  const totalCount = jobListings.length;
  const jobs = jobListings.slice(offset, offset + limit);
  res.json({ jobs, totalCount });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
