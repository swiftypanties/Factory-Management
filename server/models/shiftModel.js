const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  startingHour: { type: Number, required: true },
  endingHour: { type: Number, required: true },
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }] // one or more employees per shift
});

const Shift = mongoose.model('Shift', shiftSchema);
module.exports = Shift;
