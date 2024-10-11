const { User } = require("../Models/TaskModels");

const ReadAll = async (req, res) => {
  const newUser = new User({
    name: "String",
    description: "Number",
  });
  await newUser.save();
  res.status(200).json({ message: "THIS IS READ ALL2" });
};

const ReadOne = async (req, res) => {
  res.status(200).json({ message: req.params.id });
};

const Update = async (req, res) => {
  res.status(200).json({ message: req.body.id });
};

const Delete = async (req, res) => {
  res.status(200).json({ message: req.body.id });
};

module.exports = {
  ReadAll,
  ReadOne,
  Delete,
  Update,
};
