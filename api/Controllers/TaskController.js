const ReadAll = async (req, res) => {
  res.status(200).json({ message: "THIS IS READ ALL" });
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
