const exercises = [
  {
    id: 1,
    name: "Flexiones",
    primaryMuscle: "pecho",
    secondaryMuscles: ["triceps", "hombros"],
    description: "Ejercicio de empuje con peso corporal.",
    allowedLocations: ["casa", "gym", "plaza"],
    requiredEquipment: [],
    selectionModes: ["custom", "system"],
    configurations: [
      { trainingFocus: "musculacion", experienceLevel: "principiante", allowed: true, sets: 3, reps: "8-12", restSeconds: 60, estimatedMinutes: 6, notes: "Se puede apoyar rodillas si hace falta." },
      { trainingFocus: "musculacion", experienceLevel: "intermedio", allowed: true, sets: 4, reps: "10-15", restSeconds: 60, estimatedMinutes: 8, notes: "Mantener tecnica estable." },
      { trainingFocus: "musculacion", experienceLevel: "avanzado", allowed: true, sets: 4, reps: "15-20", restSeconds: 45, estimatedMinutes: 8, notes: "Usar variantes mas desafiantes si hace falta." }
    ]
  },
  {
    id: 2,
    name: "Press con mancuernas",
    primaryMuscle: "pecho",
    secondaryMuscles: ["triceps", "hombros"],
    description: "Ejercicio de empuje con mancuernas.",
    allowedLocations: ["casa", "gym"],
    requiredEquipment: ["mancuernas", "banco"],
    selectionModes: ["custom", "system"],
    configurations: [
      { trainingFocus: "fuerza", experienceLevel: "principiante", allowed: true, sets: 3, reps: "6-8", restSeconds: 90, estimatedMinutes: 8, notes: "Usar una carga controlable." },
      { trainingFocus: "fuerza", experienceLevel: "intermedio", allowed: true, sets: 4, reps: "5-8", restSeconds: 120, estimatedMinutes: 10, notes: "Buscar progresion de carga." },
      { trainingFocus: "fuerza", experienceLevel: "avanzado", allowed: true, sets: 5, reps: "4-6", restSeconds: 120, estimatedMinutes: 12, notes: "Mantener tecnica y cercania al fallo controlada." }
    ]
  },
  {
    id: 3,
    name: "Aperturas con mancuernas",
    primaryMuscle: "pecho",
    secondaryMuscles: ["hombros"],
    description: "Ejercicio analitico para pecho.",
    allowedLocations: ["casa", "gym"],
    requiredEquipment: ["mancuernas", "banco"],
    selectionModes: ["custom", "system"],
    configurations: [
      { trainingFocus: "musculacion", experienceLevel: "principiante", allowed: true, sets: 3, reps: "10-12", restSeconds: 60, estimatedMinutes: 7, notes: "Controlar recorrido." },
      { trainingFocus: "musculacion", experienceLevel: "intermedio", allowed: true, sets: 4, reps: "10-15", restSeconds: 60, estimatedMinutes: 8, notes: "Evitar rebotes." },
      { trainingFocus: "musculacion", experienceLevel: "avanzado", allowed: true, sets: 4, reps: "12-15", restSeconds: 45, estimatedMinutes: 8, notes: "Buscar tension constante." }
    ]
  },
  {
    id: 4,
    name: "Fondos entre bancos",
    primaryMuscle: "triceps",
    secondaryMuscles: ["pecho", "hombros"],
    description: "Ejercicio de empuje enfocado en triceps.",
    allowedLocations: ["casa", "gym", "plaza"],
    requiredEquipment: ["banco"],
    selectionModes: ["custom", "system"],
    configurations: [
      { trainingFocus: "musculacion", experienceLevel: "principiante", allowed: true, sets: 3, reps: "8-10", restSeconds: 60, estimatedMinutes: 6, notes: "Recorrido controlado." },
      { trainingFocus: "musculacion", experienceLevel: "intermedio", allowed: true, sets: 4, reps: "10-12", restSeconds: 60, estimatedMinutes: 7, notes: "Agregar pausa abajo si hace falta." },
      { trainingFocus: "musculacion", experienceLevel: "avanzado", allowed: true, sets: 4, reps: "12-15", restSeconds: 45, estimatedMinutes: 7, notes: "Mantener hombros estables." }
    ]
  },
  {
    id: 5,
    name: "Extension de triceps con banda",
    primaryMuscle: "triceps",
    secondaryMuscles: ["hombros"],
    description: "Ejercicio analitico de triceps con banda elastica.",
    allowedLocations: ["casa", "gym", "plaza"],
    requiredEquipment: ["banda elastica"],
    selectionModes: ["custom", "system"],
    configurations: [
      { trainingFocus: "musculacion", experienceLevel: "principiante", allowed: true, sets: 3, reps: "12-15", restSeconds: 45, estimatedMinutes: 5, notes: "Codos fijos." },
      { trainingFocus: "musculacion", experienceLevel: "intermedio", allowed: true, sets: 4, reps: "12-15", restSeconds: 45, estimatedMinutes: 6, notes: "Controlar retorno." },
      { trainingFocus: "musculacion", experienceLevel: "avanzado", allowed: true, sets: 4, reps: "15-20", restSeconds: 40, estimatedMinutes: 6, notes: "Buscar congestion." }
    ]
  },
  {
    id: 6,
    name: "Elevaciones laterales",
    primaryMuscle: "hombros",
    secondaryMuscles: ["triceps"],
    description: "Ejercicio accesorio para deltoide medio.",
    allowedLocations: ["casa", "gym"],
    requiredEquipment: ["mancuernas"],
    selectionModes: ["custom", "system"],
    configurations: [
      { trainingFocus: "musculacion", experienceLevel: "principiante", allowed: true, sets: 3, reps: "12-15", restSeconds: 45, estimatedMinutes: 5, notes: "Poco peso, buena tecnica." },
      { trainingFocus: "musculacion", experienceLevel: "intermedio", allowed: true, sets: 4, reps: "12-15", restSeconds: 45, estimatedMinutes: 6, notes: "Subida controlada." },
      { trainingFocus: "musculacion", experienceLevel: "avanzado", allowed: true, sets: 4, reps: "15-20", restSeconds: 40, estimatedMinutes: 6, notes: "Evitar balanceo." }
    ]
  },
  {
    id: 7,
    name: "Press militar con mancuernas",
    primaryMuscle: "hombros",
    secondaryMuscles: ["triceps", "pecho"],
    description: "Ejercicio compuesto de empuje vertical.",
    allowedLocations: ["casa", "gym"],
    requiredEquipment: ["mancuernas"],
    selectionModes: ["custom", "system"],
    configurations: [
      { trainingFocus: "fuerza", experienceLevel: "principiante", allowed: true, sets: 3, reps: "6-8", restSeconds: 90, estimatedMinutes: 8, notes: "Usar carga controlada." },
      { trainingFocus: "fuerza", experienceLevel: "intermedio", allowed: true, sets: 4, reps: "5-8", restSeconds: 120, estimatedMinutes: 10, notes: "Mantener tronco estable." },
      { trainingFocus: "fuerza", experienceLevel: "avanzado", allowed: true, sets: 5, reps: "4-6", restSeconds: 120, estimatedMinutes: 11, notes: "Buscar progresion de carga." }
    ]
  },
  {
    id: 8,
    name: "Remo con mancuerna",
    primaryMuscle: "espalda",
    secondaryMuscles: ["biceps", "hombros"],
    description: "Ejercicio de traccion horizontal.",
    allowedLocations: ["casa", "gym"],
    requiredEquipment: ["mancuernas", "banco"],
    selectionModes: ["custom", "system"],
    configurations: [
      { trainingFocus: "musculacion", experienceLevel: "principiante", allowed: true, sets: 3, reps: "8-12", restSeconds: 60, estimatedMinutes: 7, notes: "Controlar escapulas." },
      { trainingFocus: "musculacion", experienceLevel: "intermedio", allowed: true, sets: 4, reps: "8-12", restSeconds: 60, estimatedMinutes: 8, notes: "No girar el torso." },
      { trainingFocus: "musculacion", experienceLevel: "avanzado", allowed: true, sets: 4, reps: "10-12", restSeconds: 50, estimatedMinutes: 8, notes: "Buscar buena contraccion." }
    ]
  },
  {
    id: 9,
    name: "Dominadas asistidas",
    primaryMuscle: "espalda",
    secondaryMuscles: ["biceps"],
    description: "Ejercicio vertical de traccion.",
    allowedLocations: ["gym", "plaza"],
    requiredEquipment: ["barra de dominadas", "banda elastica"],
    selectionModes: ["custom", "system"],
    configurations: [
      { trainingFocus: "fuerza", experienceLevel: "principiante", allowed: true, sets: 3, reps: "4-6", restSeconds: 90, estimatedMinutes: 8, notes: "Usar asistencia suficiente." },
      { trainingFocus: "fuerza", experienceLevel: "intermedio", allowed: true, sets: 4, reps: "5-8", restSeconds: 120, estimatedMinutes: 10, notes: "Reducir asistencia progresivamente." },
      { trainingFocus: "fuerza", experienceLevel: "avanzado", allowed: true, sets: 5, reps: "6-8", restSeconds: 120, estimatedMinutes: 11, notes: "Buscar rango completo." }
    ]
  },
  {
    id: 10,
    name: "Curl de biceps con mancuernas",
    primaryMuscle: "biceps",
    secondaryMuscles: ["antebrazos"],
    description: "Ejercicio analitico para biceps.",
    allowedLocations: ["casa", "gym"],
    requiredEquipment: ["mancuernas"],
    selectionModes: ["custom", "system"],
    configurations: [
      { trainingFocus: "musculacion", experienceLevel: "principiante", allowed: true, sets: 3, reps: "10-12", restSeconds: 45, estimatedMinutes: 5, notes: "Evitar balanceos." },
      { trainingFocus: "musculacion", experienceLevel: "intermedio", allowed: true, sets: 4, reps: "10-12", restSeconds: 45, estimatedMinutes: 6, notes: "Controlar bajada." },
      { trainingFocus: "musculacion", experienceLevel: "avanzado", allowed: true, sets: 4, reps: "12-15", restSeconds: 40, estimatedMinutes: 6, notes: "Buscar tension constante." }
    ]
  },
  {
    id: 11,
    name: "Sentadilla al aire",
    primaryMuscle: "cuadriceps",
    secondaryMuscles: ["gluteos", "isquiotibiales"],
    description: "Ejercicio de piernas con peso corporal.",
    allowedLocations: ["casa", "gym", "plaza"],
    requiredEquipment: [],
    selectionModes: ["custom", "system"],
    configurations: [
      { trainingFocus: "musculacion", experienceLevel: "principiante", allowed: true, sets: 3, reps: "12-15", restSeconds: 60, estimatedMinutes: 6, notes: "Priorizar control y profundidad comoda." },
      { trainingFocus: "musculacion", experienceLevel: "intermedio", allowed: true, sets: 4, reps: "15-20", restSeconds: 60, estimatedMinutes: 8, notes: "Agregar tempo si hace falta mas dificultad." },
      { trainingFocus: "musculacion", experienceLevel: "avanzado", allowed: true, sets: 4, reps: "20-25", restSeconds: 45, estimatedMinutes: 8, notes: "Usar variantes mas exigentes si aplica." }
    ]
  },
  {
    id: 12,
    name: "Zancadas",
    primaryMuscle: "cuadriceps",
    secondaryMuscles: ["gluteos", "isquiotibiales"],
    description: "Ejercicio unilateral de piernas.",
    allowedLocations: ["casa", "gym", "plaza"],
    requiredEquipment: [],
    selectionModes: ["custom", "system"],
    configurations: [
      { trainingFocus: "musculacion", experienceLevel: "principiante", allowed: true, sets: 3, reps: "8-10 por pierna", restSeconds: 60, estimatedMinutes: 7, notes: "Mantener equilibrio." },
      { trainingFocus: "musculacion", experienceLevel: "intermedio", allowed: true, sets: 4, reps: "10-12 por pierna", restSeconds: 60, estimatedMinutes: 8, notes: "Recorrido completo." },
      { trainingFocus: "musculacion", experienceLevel: "avanzado", allowed: true, sets: 4, reps: "12-15 por pierna", restSeconds: 50, estimatedMinutes: 9, notes: "Agregar carga si aplica." }
    ]
  },
  {
    id: 13,
    name: "Puente de gluteos",
    primaryMuscle: "gluteos",
    secondaryMuscles: ["isquiotibiales", "abdominales"],
    description: "Ejercicio de extension de cadera.",
    allowedLocations: ["casa", "gym"],
    requiredEquipment: [],
    selectionModes: ["custom", "system"],
    configurations: [
      { trainingFocus: "musculacion", experienceLevel: "principiante", allowed: true, sets: 3, reps: "12-15", restSeconds: 45, estimatedMinutes: 5, notes: "Pausa arriba." },
      { trainingFocus: "musculacion", experienceLevel: "intermedio", allowed: true, sets: 4, reps: "12-15", restSeconds: 45, estimatedMinutes: 6, notes: "Mayor control en la subida." },
      { trainingFocus: "musculacion", experienceLevel: "avanzado", allowed: true, sets: 4, reps: "15-20", restSeconds: 40, estimatedMinutes: 6, notes: "Agregar banda o carga si aplica." }
    ]
  },
  {
    id: 14,
    name: "Peso muerto rumano con mancuernas",
    primaryMuscle: "isquiotibiales",
    secondaryMuscles: ["gluteos", "espalda"],
    description: "Ejercicio de cadena posterior.",
    allowedLocations: ["casa", "gym"],
    requiredEquipment: ["mancuernas"],
    selectionModes: ["custom", "system"],
    configurations: [
      { trainingFocus: "fuerza", experienceLevel: "principiante", allowed: true, sets: 3, reps: "8-10", restSeconds: 75, estimatedMinutes: 7, notes: "Priorizar tecnica." },
      { trainingFocus: "fuerza", experienceLevel: "intermedio", allowed: true, sets: 4, reps: "6-8", restSeconds: 90, estimatedMinutes: 9, notes: "Mantener espalda neutra." },
      { trainingFocus: "fuerza", experienceLevel: "avanzado", allowed: true, sets: 5, reps: "5-6", restSeconds: 120, estimatedMinutes: 10, notes: "Controlar rango y carga." }
    ]
  },
  {
    id: 15,
    name: "Plancha",
    primaryMuscle: "abdominales",
    secondaryMuscles: ["gluteos", "hombros"],
    description: "Ejercicio isometrico del core.",
    allowedLocations: ["casa", "gym", "plaza"],
    requiredEquipment: [],
    selectionModes: ["custom", "system"],
    configurations: [
      { trainingFocus: "musculacion", experienceLevel: "principiante", allowed: true, sets: 3, reps: "30-40 segundos", restSeconds: 30, estimatedMinutes: 4, notes: "Mantener alineacion." },
      { trainingFocus: "musculacion", experienceLevel: "intermedio", allowed: true, sets: 4, reps: "40-50 segundos", restSeconds: 30, estimatedMinutes: 5, notes: "No elevar cadera." },
      { trainingFocus: "musculacion", experienceLevel: "avanzado", allowed: true, sets: 4, reps: "50-60 segundos", restSeconds: 30, estimatedMinutes: 5, notes: "Agregar variantes si hace falta." }
    ]
  },
  {
    id: 16,
    name: "Crunch abdominal",
    primaryMuscle: "abdominales",
    secondaryMuscles: [],
    description: "Ejercicio basico de flexion de tronco.",
    allowedLocations: ["casa", "gym", "plaza"],
    requiredEquipment: [],
    selectionModes: ["custom", "system"],
    configurations: [
      { trainingFocus: "musculacion", experienceLevel: "principiante", allowed: true, sets: 3, reps: "15-20", restSeconds: 30, estimatedMinutes: 4, notes: "No tirar del cuello." },
      { trainingFocus: "musculacion", experienceLevel: "intermedio", allowed: true, sets: 4, reps: "20-25", restSeconds: 30, estimatedMinutes: 5, notes: "Controlar subida." },
      { trainingFocus: "musculacion", experienceLevel: "avanzado", allowed: true, sets: 4, reps: "25-30", restSeconds: 25, estimatedMinutes: 5, notes: "Buscar tension constante." }
    ]
  },
  {
    id: 17,
    name: "Jumping jacks",
    primaryMuscle: "cuadriceps",
    secondaryMuscles: ["hombros", "abdominales"],
    description: "Ejercicio dinamico de cardio general.",
    allowedLocations: ["casa", "gym", "plaza"],
    requiredEquipment: [],
    selectionModes: ["custom", "system"],
    configurations: [
      { trainingFocus: "cardio", experienceLevel: "principiante", allowed: true, sets: 3, reps: "30 segundos", restSeconds: 30, estimatedMinutes: 4, notes: "Ritmo comodo." },
      { trainingFocus: "cardio", experienceLevel: "intermedio", allowed: true, sets: 4, reps: "40 segundos", restSeconds: 25, estimatedMinutes: 5, notes: "Mantener intensidad media." },
      { trainingFocus: "cardio", experienceLevel: "avanzado", allowed: true, sets: 5, reps: "45 segundos", restSeconds: 20, estimatedMinutes: 6, notes: "Ritmo alto sostenido." }
    ]
  },
  {
    id: 18,
    name: "Mountain climbers",
    primaryMuscle: "abdominales",
    secondaryMuscles: ["hombros", "cuadriceps"],
    description: "Ejercicio metabolico y de core.",
    allowedLocations: ["casa", "gym", "plaza"],
    requiredEquipment: [],
    selectionModes: ["custom", "system"],
    configurations: [
      { trainingFocus: "cardio", experienceLevel: "principiante", allowed: true, sets: 3, reps: "20 segundos", restSeconds: 30, estimatedMinutes: 4, notes: "Ritmo controlado." },
      { trainingFocus: "cardio", experienceLevel: "intermedio", allowed: true, sets: 4, reps: "30 segundos", restSeconds: 25, estimatedMinutes: 5, notes: "Mantener postura." },
      { trainingFocus: "cardio", experienceLevel: "avanzado", allowed: true, sets: 5, reps: "40 segundos", restSeconds: 20, estimatedMinutes: 6, notes: "Alta intensidad." }
    ]
  },
  {
    id: 19,
    name: "Burpees",
    primaryMuscle: "cuadriceps",
    secondaryMuscles: ["pecho", "hombros", "abdominales"],
    description: "Ejercicio completo de alta demanda cardiovascular.",
    allowedLocations: ["casa", "gym", "plaza"],
    requiredEquipment: [],
    selectionModes: ["custom", "system"],
    configurations: [
      { trainingFocus: "cardio", experienceLevel: "principiante", allowed: false, sets: 0, reps: "0", restSeconds: 0, estimatedMinutes: 0, notes: "No recomendado para principiantes absolutos." },
      { trainingFocus: "cardio", experienceLevel: "intermedio", allowed: true, sets: 4, reps: "10-12", restSeconds: 45, estimatedMinutes: 7, notes: "Controlar tecnica." },
      { trainingFocus: "cardio", experienceLevel: "avanzado", allowed: true, sets: 5, reps: "12-15", restSeconds: 40, estimatedMinutes: 8, notes: "Mantener intensidad alta." }
    ]
  },
  {
    id: 20,
    name: "High knees",
    primaryMuscle: "cuadriceps",
    secondaryMuscles: ["abdominales"],
    description: "Ejercicio de cardio dinamico en el lugar.",
    allowedLocations: ["casa", "gym", "plaza"],
    requiredEquipment: [],
    selectionModes: ["custom", "system"],
    configurations: [
      { trainingFocus: "cardio", experienceLevel: "principiante", allowed: true, sets: 3, reps: "20 segundos", restSeconds: 30, estimatedMinutes: 4, notes: "Ritmo moderado." },
      { trainingFocus: "cardio", experienceLevel: "intermedio", allowed: true, sets: 4, reps: "30 segundos", restSeconds: 20, estimatedMinutes: 5, notes: "Aumentar frecuencia." },
      { trainingFocus: "cardio", experienceLevel: "avanzado", allowed: true, sets: 5, reps: "40 segundos", restSeconds: 20, estimatedMinutes: 6, notes: "Mantener ritmo explosivo." }
    ]
  }
];

module.exports = exercises;
