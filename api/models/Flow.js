const Datastore = require('nedb-promise')
const Cryptr = require('cryptr')
const cryptr = new Cryptr(process.env.SECRET)
 const streamsDB = require('../data/flowItems.json')
require("dotenv").config();
const streams = new Datastore({
	filename: './data/streams.db',
	autoload: true
})

module.exports = {
	async insertPlaceholderFlows() {
		streamsDB.streams.forEach((stream) => {
			streams.insert({
				date: cryptr.encrypt(stream.date),
				tags: cryptr.encrypt(stream.tags),
				content: cryptr.encrypt(stream.content)
			})
		})
	},
	async getDecrypedFlows() {
		const coolstreams = await streams.find({})

		coolstreams.forEach(stream => {
			stream.date = cryptr.decrypt(stream.date)
			stream.tags = cryptr.decrypt(stream.tags)
			stream.content = cryptr.decrypt(stream.content)
		})

		return coolstreams
	}
}