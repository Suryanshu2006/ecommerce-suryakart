const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI)
        .then(() => {
            console.log('MongoDB connected with server data successfully');
        })
        .catch((err) => {
            console.error('MongoDB connection error:', err);
        });
};

module.exports = connectDatabase;