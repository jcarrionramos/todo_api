const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");

router.get(`/all`, (req, res) => {
  userSchema
    .find()
    .then((users) => res.json({ success: true, users }))
    .catch((error) => res.json({ success: false, error }));
});

router.post(`/`, (req, res) => {
  const { body } = req;

  const user = userSchema(body);
  user
    .save()
    .then(() => res.json({ success: true, user }))
    .catch((error) => res.json({ success: false, error }));
});

router.delete("/:userId", (req, res) => {
  userSchema
    .deleteOne({ _id: req.params.userId })
    .then((data) => res.json({ success: true, data }))
    .catch((error) => res.json({ success: false, error }));
});

module.exports = router;
