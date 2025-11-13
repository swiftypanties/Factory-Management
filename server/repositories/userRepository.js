const User = require('../models/userModel')

const getAllUsers = (filters) => {
    return User.find(filters)
}

const createUser = (obj) => {
    return User.create(obj)
}

const updateUser = (id, obj) => {
    return User.findByIdAndUpdate(id, obj)
}

const deleteUser = (id) => {
    return User.findByIdAndDelete(id)
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}
