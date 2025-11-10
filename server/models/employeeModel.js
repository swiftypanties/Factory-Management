const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    startWorkYear: { type: Number, required: true },
    departmentID: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Department', 
    required: true 
  }
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;