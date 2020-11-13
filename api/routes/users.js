const express = require("express");
const router = express.Router();
const User = require("../models/User");


router.post("/api/register", async (req, res) => {
    const user = await User.register(req.body)
    if (user) {
        res.json(user)
    } else {
        res.send('Something wrong');
    }
});

router.post("/api/login", async (req, res) => {
    const user = await User.login(req.body)
    console.log(user)
   if (user) {
       res.json(user)

    } else {
        res.send("You are not authorized");
    }
}); 

module.exports = router;