const express = require("express");
const { getRoutineMessage,createRoutine } = require("../controllers/routineController");

const router = express.Router();

router.get("/", getRoutineMessage);
router.post("/", createRoutine);

module.exports = router;
