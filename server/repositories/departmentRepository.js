const Department = require('../models/departmentModel')

const getAllDepartments = (filters) =>{
    return Department.find(filters)
}

const createDepartment = (obj) =>{
    return Department.create(obj)
}

const updateDepartment = (id, obj) => {
    return Department.findByIdAndUpdate(id, obj)
}

const deleteDepartment = (id) => {
    return Department.findByIdAndDelete(id)
}

module.exports = {
    getAllDepartments,
    createDepartment,
    updateDepartment,
    deleteDepartment
};

