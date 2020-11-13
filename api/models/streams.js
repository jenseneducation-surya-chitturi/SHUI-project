const dataStore = require('nedb-promise');
const streamsDB = new dataStore({ filename: './data/streams.db', autoload: true, })
const Cryptr = require("cryptr");
require("dotenv/config");
const cryptr = new Cryptr(process.env.SECRET);

module.exports = {
  
    async addStreams(streams){
        console.log(streams)
        const { content, tag, date } = streams;
        const newStream = await streamsDB.insert({
            content: await cryptr.encrypt(content),
            tag,
            date
        });
         console.log(newStream)
        return newStream
       
    },

    async getStreams(){
        const stream = await streamsDB.find({})
        const newStream = stream.map( stream => {
            const streamRea = {

                content: cryptr.decrypt(stream.content),
                tag: stream.tag,
                date:  stream.date
            }
            return streamRea
        })
        console.log("data collected", newStream)
        return newStream
    },
    streamsDB
}