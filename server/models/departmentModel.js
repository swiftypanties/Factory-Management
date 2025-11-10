const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    manager: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Employee Id',  
    required: true
  }
})

const Department = mongoose.model('Department', departmentSchema);
module.exports = Department;