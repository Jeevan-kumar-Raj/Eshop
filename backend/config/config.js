const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    mongoURI: 'mongodb+srv://jk@cluster0-p69lf.mongodb.net/Eshop?retryWrites=true&w=majority',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
}