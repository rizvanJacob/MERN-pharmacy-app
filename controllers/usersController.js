const User = require("../models/user");

const create = (req, res) => {
  res.status(200).json({ message: "create new user" });
};

// const login -> We do together

module.exports = { create };
