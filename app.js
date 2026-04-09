const express = require("express");
const routineRoutes = require("./routes/routineRoutes");
const userRoutes = require("./routes/userRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("FitLogic API funcionando");
});

app.use("/api/routines", routineRoutes);
app.use("/api/users", userRoutes);
app.use("/api/exercises", exerciseRoutes);

module.exports = app;
