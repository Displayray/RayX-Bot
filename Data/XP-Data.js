const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    ID: String,
    XP: Number,
})

module.exports = mongoose.model("XP_Data", schema)