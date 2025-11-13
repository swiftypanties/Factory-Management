const Shift = require('../models/shiftModel')

const getAllShifts = (filters) => {
    return Shift.find(filters)
}

const createShift = (obj) => {
    return Shift.create(obj)
}

const updateShift = (id, obj) => {
    return Shift.findByIdAndUpdate(id, obj)
}

//only for the use of Admins//
const deleteShift = (id) => {
    return Shift.findByIdAndDelete(id)
}

module.exports = {
    getAllShifts,
    createShift,
    updateShift,
    deleteShift
}
