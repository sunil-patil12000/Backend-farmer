const VideoSchem = require("../Model/VideoSchem");

VideoSchem
module.exports = (req, res) => {
    const { name, url } = req.body;

   
    const video = new VideoSchem({
        name,
        url
    });

   
    video.save((err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while saving the video.' });
        } else {
            res.status(201).json({ message: 'Video data saved successfully.' });
        }
    })
}