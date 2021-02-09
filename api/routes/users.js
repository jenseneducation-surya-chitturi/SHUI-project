const express = require("express");
const router = express.Router();
const {
    login,
    register,
    removeUser,
    setSubscription,
    getSubscriptions,
    removeSubscription,
  } = require("../models/User");
  const { verifyToken } = require("./verify");

router.post("/api/register", async (req, res) => {
    const user = await register(req.body)
    if (user) {
        res.status(201).json(user);
        return;
    } 
    res.status(500).json({ error: "not valid"})
});

router.post("/api/login", async (req, res) => {
    const user = await login(req.body)
   if (user) {
    res.status(200).json(user);
    return;
  }
  res.status(500).json({ error: "not valid" });
});
router.post("/", verifyToken, async (req, res) => {
    const tags = await setSubscription(req.body, req.user.userID);
    if (tags) {
      res.status(201).json({ message: "Successful" });
      return;
    }
    res.status(401).json({ error: "Not authorized" });
  });
  
  router.get("/", verifyToken, async (req, res) => {
    const subscriptions = await getSubscriptions(req.user.userID);
    if (subscriptions) {
      res.status(200).json(subscriptions);
      return;
    }
    res.status(401).json({ error: "Not authorized" });
  });
  
  router.delete("/", verifyToken, async (req, res) => {
    const tags = await removeSubscription(req.body, req.user.userID);
    if (tags) {
      res.status(201).json({ message: "Successful" });
      return;
    }
    res.status(401).json({ error: "Not authorized" });
  });
  
  router.delete("/api/delete", verifyToken, async (req, res) => {
    const removedUser = await removeUser(req.user.userID);
    if (removedUser) {
      res.json({ message: "Successful" });
      return;
    }
    res.status(401);
  });
module.exports = router;