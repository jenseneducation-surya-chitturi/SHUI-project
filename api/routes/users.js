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
router.delete('/user',  async (req, res) => {
    if (req.user) {
        const user = await User.deleteUser(req.user)
        const streams = await Stream.removeAllStreams(req.user)
        res.status(200).json({
            message: "user is deleted"
        })
    } else {
        res.status(400).json({
            message: 'Unable to delete user'
        })
    }
})

module.exports = router;