const express = require("express");
const router = express.Router();
const Flow = require('../models/Flow.js');
const Tags = require('../models/Tags')
const {verify}= require("./auth")

app.get('/api/flow', verify,  async (req, res) => {
	const flowItems = await Flow.getDecrypedFlows();
	if (flowItems) {
		response.json(flowItems)
	} else {
		response.status(401).json({ error: 'not working' })
	}
})

router.post('/api/tags', verify, async (req, res) => {
	// console.log(req.body)
	const tags = await Tags.insertedTags(req.body, req.user.userID)
	if (tags) {
		res.json({ message: 'tag' })
		return
	}
	res.status(401).json({ error: 'not working' })
})

router.get('/api/tags', verify,  async (req, res) => {
	const tags = await Tags.getAllTags(req.user.userID)
	if (tags) {
		res.json(tags)
		return
	}
	res.status(401).json({ error: 'not working' })
})


module.exports = router;