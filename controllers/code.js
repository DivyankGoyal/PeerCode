const Code = require("../models/Code");
const { uuid } = require("uuidv4");

exports.uploadCode = async (req, res) => {
  try {
    const { code, extension, language } = req.body;
    const newCode = new Code({ code, extension, language });
    newCode.save();
    res.status(201).send(newCode._id);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong!" });
  }
};

exports.getCode = async (req, res) => {
  try {
    const { codeId } = req.params;
    const code = await Code.findOne({ _id: codeId });
    if (!code) {
      res.status(400).json({ error: "Invalid URL!" });
    } else res.status(200).send(code);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong!" });
  }
};

//Create room
exports.createRoom = async (req, res) => {
  try {
    const code = new Code({ username: req.body.username });
    await code.save();
    res.status(201).send(code);
  } catch (error) {
    console.log(error);
  }
};

exports.createRooms = async (req, res) => {
  try {
    console.log(req.body);
    let arr = [];
    for (let i = 0; i < req.body.numberRooms; i++) {
      arr.push({
        username: uuid(),
      });
    }
    console.log(arr);
    const data = await Code.insertMany(arr);
    console.log(data);
    res.status(201).send({ data });
  } catch (error) {
    console.log(error);
  }
};
