const express = require("express");
const router = express.Router();
const Streams = require('../models/streams.js')
const {verify}= require("./verify")

router.post('/streams',  async (req, res) => {

    const newStream = await Streams.addStreams(req.body, req.user);
    if (newStream) {

        res.status(200).send({
            user: 'new stream has been added',
            newStream: newStream,
        })
    } else {
        res.status(404).json({
            error: "Not authorized"
        })
    }
})

router.get('/streams',  async (req, res) => {
    const userStreams = await Streams.getStreams(req.user);
    if (userStreams) {
        res.status(200).json({
            message: 'all streams are displayed',
            streams: userStreams,

        })
    } else {
        res.status(400).json({
            message: 'Not authorized'
        })
    }

})

router.delete('/stream', async (req, res) => {
    console.log(req.body)
    const product = await Streams.removeStream(req.body, req.user)
    if (product) {
        res.status(200).json({
            message: "stream is removed",
            "id": req.body.id
        })
    } else {
        res.status(404).json({ message: 'you are not able to delete' })
    }

})

router.delete('/streams',  async (req, res) => {
    const product = await Streams.removeAllStreams(req.user)
    if (product) {
        res.status(200).json({
            message: "All streams removed",
        })
    } else {
        res.status(404).json({ message: 'you are not able to delete' })
    }

})
module.exports = router;