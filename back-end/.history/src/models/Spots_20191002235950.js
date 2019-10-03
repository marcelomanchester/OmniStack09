const mongoose = require('mongoose');
const SpotsSchema = new mongoose.Schema({
    email: String,
});

module.exports = mongoose.model('User', SpotsSchema);