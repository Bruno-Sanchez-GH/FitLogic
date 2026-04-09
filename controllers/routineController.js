const getRoutineMessage = (req, res) => {
  res.send("Ruta de rutinas funcionando");
};

const createRoutine = (req, res) => {
  const { time, type, level } = req.body;
  const validTypes = ["cardio", "fuerza", "musculacion"];
  const validLevels = ["principiante", "intermedio", "avanzado"];

  // Verifica que lleguen todos los datos necesarios.
  if (time === undefined || !type || !level) {
    return res.status(400).json({
      error: "Debes enviar time, type y level para crear una rutina"
    });
  }

  const timeNumber = Number(time);
  const normalizedType = type.toLowerCase().trim();
  const normalizedLevel = level.toLowerCase().trim();

  // Valida que time sea un numero positivo.
  if (isNaN(timeNumber) || timeNumber <= 0) {
    return res.status(400).json({
      error: "El tiempo debe ser un numero positivo"
    });
  }

  if (!validTypes.includes(normalizedType)) {
    return res.status(400).json({
      error: "El tipo de rutina no es valido. Debe ser cardio, fuerza o musculacion"
    });
  }

  if (!validLevels.includes(normalizedLevel)) {
    return res.status(400).json({
      error: "El nivel no es valido. Debe ser principiante, intermedio o avanzado"
    });
  }

  // Devuelve los datos recibidos en formato JSON.
  return res.json({
    message: "Datos de rutina recibidos correctamente",
    data: {
      time: timeNumber,
      type: normalizedType,
      level: normalizedLevel
    }
  });
};

module.exports = {
  getRoutineMessage,
  createRoutine
};
