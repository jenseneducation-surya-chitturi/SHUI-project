const Datastore = require("nedb-promise");
const users = new Datastore({ filename: "./db/users.db", autoload: true });
const { streamsDB } = require("./Stream");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv/config");
const Cryptr = require("cryptr");
const cryptr = new Cryptr(process.env.SECRET);

module.exports = {
  async register(credentials) {
    const { username, password, repeatPassword } = credentials;
    if (username == "" || password == "" || repeatPassword == "") return;
    const user = await users.findOne({ username });
    if (user) return;
    const newUser = await users.insert({
      username,
      subscriptions: [],
      password: await bcrypt.hash(password, 10),
    });
    const token = jwt.sign(
      {
        userID: newUser._id,
        username: newUser.username,
      },
      process.env.SECRET
    );
    return {
      username: newUser.username,
      token,
    };
  },

  async login(credentials) {
    const { username, password } = credentials;
    if (username == "" || password == "") return;
    const user = await users.findOne({ username });
    if (!user) return;
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return;
    const token = jwt.sign(
      {
        userID: user._id,
        username: user.username,
      },
      process.env.SECRET
    );
    return {
      username: user.username,
      token,
    };
  },

  async setSubscription(tags, userID) {
    const user = await users.findOne({ _id: userID });
    if (!user) return;
    await users.update(user, {
      $push: { subscriptions: { $each: tags } },
    });
  },

  async getSubscriptions(userID) {
    const user = await users.findOne({ _id: userID });
    if (!user) return;
    const userStreams = user.subscriptions.map(async (sub) => {
      const streams = await streamsDB.find({ tag: sub });
      if (!streams) return;
      return streams.map((stream) => {
        return {
          tag: stream.tag,
          date: stream.date,
          content: cryptr.decrypt(stream.content),
        };
      });
    });
    return await Promise.all(userStreams);
  },

  async removeSubscription(tag, userID) {
    const user = await users.findOne({ _id: userID });
    if (!user) return;
    let deletedSubs = user.subscriptions.filter((el) => el !== tag.toString());
    await users.update(user, { $set: { subscriptions: deletedSubs } });
  },

  async removeUser(userID) {
    return await users.remove({ _id: userID });
  },
};