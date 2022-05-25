const router = require("express").Router();
const {
  uploadCode,
  getCode,
  createRoom,
  createRooms,
} = require("../controllers/code");

router.post("/uploadcode", uploadCode);

router.get("/getcode/:codeId", getCode);

router.post("/createroom", createRoom);

router.post("/createrooms", createRooms);

module.exports = router;
