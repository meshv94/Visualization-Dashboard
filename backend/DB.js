const mongoose = require("mongoose")

const connect_DB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/VisualDashboard');
        console.log("database connection successful")
    } catch (error) {
        console.log("database" , error)
    }
}

module.exports = connect_DB