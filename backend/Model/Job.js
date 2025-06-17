const mongoose=require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  type: String, // full-time, part-time, intern
  salary: Number,
  company: String,
  category: String,
  postedBy: String, // recruiter ID or name
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('JobNew', jobSchema);
