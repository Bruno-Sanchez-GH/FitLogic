const exercises = require("../data/exercisesData");

const getExercisesMessage = (req, res) => {
  res.send("Ruta de ejercicios funcionando");
};

const getAllExercises = (req, res) => {
  return res.json({
    message: "Lista de ejercicios obtenida correctamente",
    data: exercises
  });
};

const filterExercises = (req, res) => {
  const { location, level, trainingFocus, muscle, selectionMode, equipment, time } = req.query;
  let filtered = [...exercises];

  if (location) {
    const normalizedLocation = location.toLowerCase().trim();

    // Filtra ejercicios compatibles con la ubicacion elegida.
    filtered = filtered.filter((exercise) =>
      exercise.allowedLocations.includes(normalizedLocation)
    );
  }

  if (level) {
    const normalizedLevel = level.toLowerCase().trim();

    // Filtra ejercicios que tengan al menos una configuracion valida para ese nivel.
    filtered = filtered.filter((exercise) =>
      exercise.configurations.some(
        (config) =>
          config.experienceLevel === normalizedLevel && config.allowed === true
      )
    );
  }

  if (trainingFocus) {
    const normalizedTrainingFocus = trainingFocus.toLowerCase().trim();

    // Filtra ejercicios que tengan al menos una configuracion valida para ese foco.
    filtered = filtered.filter((exercise) =>
      exercise.configurations.some(
        (config) =>
          config.trainingFocus === normalizedTrainingFocus && config.allowed === true
      )
    );
  }

  if (muscle) {
    const normalizedMuscle = muscle.toLowerCase().trim();

    // Filtra por musculo principal o secundario.
    filtered = filtered.filter((exercise) =>
      exercise.primaryMuscle === normalizedMuscle ||
      exercise.secondaryMuscles.includes(normalizedMuscle)
    );
  }

  if (selectionMode) {
    const normalizedSelectionMode = selectionMode.toLowerCase().trim();

    // Filtra por modo de seleccion: custom o system.
    filtered = filtered.filter((exercise) =>
      exercise.selectionModes.includes(normalizedSelectionMode)
    );
  }

  if (equipment) {
    const normalizedEquipment = equipment
      .toLowerCase()
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    // Filtra ejercicios cuyos requerimientos puedan cubrirse con el equipamiento enviado.
    filtered = filtered.filter((exercise) =>
      exercise.requiredEquipment.every((item) => normalizedEquipment.includes(item))
    );
  }

  if (time) {
    const timeNumber = Number(time);

    // Filtra ejercicios que tengan al menos una configuracion con tiempo estimado dentro del limite.
    if (!isNaN(timeNumber) && timeNumber > 0) {
      filtered = filtered.filter((exercise) =>
        exercise.configurations.some(
          (config) => config.allowed === true && config.estimatedMinutes <= timeNumber
        )
      );
    }
  }

  return res.json({
    message: "Ejercicios encontrados",
    receivedFilters: {
      location,
      level,
      trainingFocus,
      muscle,
      selectionMode,
      equipment,
      time
    },
    count: filtered.length,
    data: filtered
  });
};

module.exports = {
  getExercisesMessage,
  getAllExercises,
  filterExercises
};
