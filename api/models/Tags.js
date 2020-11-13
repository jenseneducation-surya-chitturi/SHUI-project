const Datastore = require('nedb-promise')
const Cryptr = require('cryptr')
const cryptr = new Cryptr(process.env.SECRET)
require("dotenv").config();
const tagsDB = new Datastore({
	filename: './data/tags.db',
	autoload: true
})

module.exports = {
	async insertedTags(body, userID) {
		if (body === 'undefined') return
		return await tagsDB.insert({
			userID,
			date: cryptr.encrypt(body.date),
			tags: cryptr.encrypt(body.tags),
			content: cryptr.encrypt(body.content)
		})
	},
	async getAllTags(userID) {
		const tags = await tagsDB.find({ userID })
		return tags.map(tag => {
			const tagObj = {
				date: cryptr.decrypt(tag.date),
				tags: cryptr.decrypt(tag.tags),
				content: cryptr.decrypt(tag.content)
			}
			return tagObj
		})
	},
}