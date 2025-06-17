const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Job = require('./Model/Job')
const Application = require('./Model/Application')
const connectDB = require('./db');
const app = express();
app.use(cors());
app.use(express.json());
connectDB();
// Create Job
app.post('/jobs', async (req, res) => {
  const job = await Job.create(req.body);
  res.json(job);
});

// Get all Jobs
app.get('/jobs', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Get Job by ID
app.get('/jobs/:id', async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.json(job);
});

// Update Job
app.put('/jobs/:id', async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(job);
});

// Delete Job
app.delete('/jobs/:id', async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});
// Apply for a Job
app.post('/applications', async (req, res) => {
  const appData = await Application.create(req.body);
  res.json(appData);
});

// Get Applications (for Admin/Recruiter)
app.get('/applications', async (req, res) => {
  const apps = await Application.find().populate('jobId');
  res.json(apps);
});
app.listen(8000, () => console.log('Server running on http://localhost:8000'));



