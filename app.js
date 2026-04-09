const express = require("express");
const path = require("path");
const routineRoutes = require("./routes/routineRoutes");
const userRoutes = require("./routes/userRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/api/routines", routineRoutes);
app.use("/api/users", userRoutes);
app.use("/api/exercises", exerciseRoutes);

module.exports = app;
