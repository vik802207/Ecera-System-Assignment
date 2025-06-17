
const mongoose=require('mongoose');

const applicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  applicantName: String,
  email: String,
  resumeLink: String,
  appliedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ApplicationNew', applicationSchema);
