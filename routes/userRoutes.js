const express = require("express");
const { getUsersMessage } = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsersMessage);

module.exports = router;
