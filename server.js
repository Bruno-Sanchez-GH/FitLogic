const app = require("./app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor de FitLogic corriendo en http://localhost:${PORT}`);
});
