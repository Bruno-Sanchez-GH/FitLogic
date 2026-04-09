const exercises = require("../data/exercisesData");

const getRoutineMessage = (req, res) => {
  res.send("Ruta de rutinas funcionando");
};

const createRoutine = (req, res) => {
  const { time, type, level, location, muscles } = req.body;
  const validTypes = ["cardio", "fuerza", "musculacion"];
  const validLevels = ["principiante", "intermedio", "avanzado"];

  // Verifica que lleguen todos los datos necesarios.
  if (time === undefined || !type || !level || !location || !muscles) {
    return res.status(400).json({
      error: "Debes enviar time, type, level, location y muscles para crear una rutina"
    });
  }

  if (!Array.isArray(muscles) || muscles.length === 0) {
    return res.status(400).json({
      error: "muscles debe ser un array con al menos un musculo"
    });
  }

  const timeNumber = Number(time);
  const normalizedType = type.toLowerCase().trim();
  const normalizedLevel = level.toLowerCase().trim();
  const normalizedLocation = location.toLowerCase().trim();
  const normalizedMuscles = muscles.map((muscle) => muscle.toLowerCase().trim());

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

  // Primero se filtran los ejercicios compatibles con el contexto recibido.
  const filteredExercises = exercises.filter((exercise) => {
    const matchesLocation = exercise.allowedLocations.includes(normalizedLocation);
    const matchesMuscle =
      normalizedMuscles.includes(exercise.primaryMuscle) ||
      exercise.secondaryMuscles.some((secondaryMuscle) =>
        normalizedMuscles.includes(secondaryMuscle)
      );

    const matchesConfiguration = exercise.configurations.some(
      (config) =>
        config.trainingFocus === normalizedType &&
        config.experienceLevel === normalizedLevel &&
        config.allowed === true
    );

    return matchesLocation && matchesMuscle && matchesConfiguration;
  });

  if (filteredExercises.length === 0) {
    return res.status(404).json({
      error: "No se encontraron ejercicios compatibles con los filtros enviados"
    });
  }

  // Despues se arma una rutina simple agregando ejercicios mientras entren en el tiempo.
  const routineExercises = [];
  let totalEstimatedMinutes = 0;

  filteredExercises.forEach((exercise) => {
    const selectedConfiguration = exercise.configurations.find(
      (config) =>
        config.trainingFocus === normalizedType &&
        config.experienceLevel === normalizedLevel &&
        config.allowed === true
    );

    if (!selectedConfiguration) {
      return;
    }

    const nextTotal = totalEstimatedMinutes + selectedConfiguration.estimatedMinutes;

    if (nextTotal <= timeNumber) {
      routineExercises.push({
        id: exercise.id,
        name: exercise.name,
        primaryMuscle: exercise.primaryMuscle,
        secondaryMuscles: exercise.secondaryMuscles,
        estimatedMinutes: selectedConfiguration.estimatedMinutes,
        sets: selectedConfiguration.sets,
        reps: selectedConfiguration.reps,
        restSeconds: selectedConfiguration.restSeconds,
        notes: selectedConfiguration.notes
      });

      totalEstimatedMinutes = nextTotal;
    }
  });

  if (routineExercises.length === 0) {
    return res.status(404).json({
      error: "Los ejercicios encontrados no entran en el tiempo disponible"
    });
  }

  return res.json({
    message: "Rutina generada correctamente",
    data: {
      filtersUsed: {
        time: timeNumber,
        type: normalizedType,
        level: normalizedLevel,
        location: normalizedLocation,
        muscles: normalizedMuscles
      },
      totalEstimatedMinutes,
      exercises: routineExercises
    }
  });
};

module.exports = {
  getRoutineMessage,
  createRoutine
};
