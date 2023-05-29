const { default: mongoose } = require("mongoose");


mongoose
const videoSchema = new mongoose.Schema({
    name: String,
    url: String
});



module.exports = mongoose.model('Video', videoSchema);