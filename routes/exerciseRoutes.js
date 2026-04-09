const express = require("express");
const {
  getExercisesMessage,
  getAllExercises,
  filterExercises
} = require("../controllers/exerciseController");

const router = express.Router();

router.get("/", getExercisesMessage);
router.get("/all", getAllExercises);
router.get("/filter", filterExercises);

module.exports = router;
