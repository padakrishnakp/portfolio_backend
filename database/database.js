const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log(`Mongoose connected to server: ${mongoose.connection.host}`);
    } catch (error) {
        console.error("Mongoose connection error:", error.message);
    }
};

module.exports = connectDatabase;
