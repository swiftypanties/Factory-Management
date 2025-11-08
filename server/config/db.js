const mongoose = require('mongoose');

const connectDB = () => {
    mongoose
        .connect('mongodb://127.0.0.1:27017/Factory Management')
        .then(() => console.log("Connected to DB"))
        .catch(console.log)
}


module.exports = connectDB
