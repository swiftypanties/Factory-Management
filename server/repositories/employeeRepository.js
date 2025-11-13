const Employee = require('../models/employeeModel')

const getAllEmplyoees = (filters) => {
    return Employee.find(filters)
}

const createEmployee = (obj) =>{
    return Employee.create(obj);
}

const updateEmployee = (id, obj) => {
    return Employee.findByIdAndUpdate(id, obj)
}

const deleteEmployee = (id) => {
    return Employee.findByIdAndDelete(id)
}


module.exports = {
    getAllEmplyoees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
}