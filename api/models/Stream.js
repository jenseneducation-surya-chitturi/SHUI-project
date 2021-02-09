const Datastore = require("nedb-promise");
const streamsDB = new Datastore({
  filename: "./db/streams.db",
  autoload: true,
});
const Cryptr = require("cryptr");
require("dotenv/config");
const cryptr = new Cryptr(process.env.SECRET);

const streamsData = require("../data/streams.json");

// Comment out DB insert to intially insert data
streamsData.streams.forEach((stream) => {
  streamsDB.insert({
    content: cryptr.encrypt(stream.content),
    date: stream.date,
    tag: stream.tag,
  });
});

 module.exports = {
  async getUserStreams() {
    const streams = await streamsDB.find({});
    const newStreams = streams.map((stream) => {
      return {
        tag: stream.tag,
        date: stream.date,
        content: cryptr.decrypt(stream.content),
      };
    });
    return newStreams;
  },
  streamsDB,
}; 