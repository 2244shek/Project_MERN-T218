const mongoose = require("mongoose");

// Define a schema for the LeaveForm data
const leaveFormSchema = new mongoose.Schema({
    empName: String,
    empId: String,
    department: String,
    leaveType: String,
    startDate: String,
    endDate: String,
    reason: String,
});


// Create a model based on the schema
const LeaveForm = mongoose.model('LeaveForm', leaveFormSchema);
module.exports = LeaveForm ;