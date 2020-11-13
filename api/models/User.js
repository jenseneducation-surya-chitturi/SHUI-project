const DataStore = require("nedb-promise");
const users = new DataStore({ filename: "./data/users.db", autoload: true })
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config()


module.exports = {
    async register(credentials) {
      const { username, password, repeatPassword } = credentials;
      if (username == "" || password == "" || repeatPassword == "") return;
      const user = await users.findOne({ username });
      if (user) return;
      const newUser = await users.insert({
        username:username,
        password: await bcrypt.hash(password,10),
      });
      console.log(newUser)
      const token = jwt.sign(
        {
          userID: newUser._id,
          username: newUser.username,
        },
        process.env.SECRET
      );
      return{ 
        username: newUser.username,
      token,
    };
  },
  
    async login(credentials) {
      const { username, password } = credentials;
      if (username == "" || password == "") return;
      const user = await users.findOne({ username });
      console.log(user)
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
    async deleteUser(userID) {
      return await dbUsers.remove({ _id: userID })
    }
  }; 