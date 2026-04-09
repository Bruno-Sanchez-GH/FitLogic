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
      {
        trainingFocus: "musculacion",
        experienceLevel: "principiante",
        allowed: true,
        sets: 3,
        reps: "8-12",
        restSeconds: 60,
        estimatedMinutes: 6,
        notes: "Se puede apoyar rodillas si hace falta."
      },
      {
        trainingFocus: "musculacion",
        experienceLevel: "intermedio",
        allowed: true,
        sets: 4,
        reps: "10-15",
        restSeconds: 60,
        estimatedMinutes: 8,
        notes: "Mantener tecnica estable."
      },
      {
        trainingFocus: "musculacion",
        experienceLevel: "avanzado",
        allowed: true,
        sets: 4,
        reps: "15-20",
        restSeconds: 45,
        estimatedMinutes: 8,
        notes: "Usar variantes mas desafiantes si hace falta."
      }
    ]
  },
  {
    id: 2,
    name: "Sentadilla al aire",
    primaryMuscle: "cuadriceps",
    secondaryMuscles: ["gluteos", "isquiotibiales"],
    description: "Ejercicio de piernas con peso corporal.",
    allowedLocations: ["casa", "gym", "plaza"],
    requiredEquipment: [],
    selectionModes: ["custom", "system"],
    configurations: [
      {
        trainingFocus: "musculacion",
        experienceLevel: "principiante",
        allowed: true,
        sets: 3,
        reps: "12-15",
        restSeconds: 60,
        estimatedMinutes: 6,
        notes: "Priorizar control y profundidad comoda."
      },
      {
        trainingFocus: "musculacion",
        experienceLevel: "intermedio",
        allowed: true,
        sets: 4,
        reps: "15-20",
        restSeconds: 60,
        estimatedMinutes: 8,
        notes: "Agregar tempo si hace falta mas dificultad."
      },
      {
        trainingFocus: "musculacion",
        experienceLevel: "avanzado",
        allowed: true,
        sets: 4,
        reps: "20-25",
        restSeconds: 45,
        estimatedMinutes: 8,
        notes: "Usar variantes mas exigentes si aplica."
      }
    ]
  },
  {
    id: 3,
    name: "Press con mancuernas",
    primaryMuscle: "pecho",
    secondaryMuscles: ["triceps", "hombros"],
    description: "Ejercicio de empuje con mancuernas.",
    allowedLocations: ["casa", "gym"],
    requiredEquipment: ["mancuernas", "banco"],
    selectionModes: ["custom", "system"],
    configurations: [
      {
        trainingFocus: "fuerza",
        experienceLevel: "principiante",
        allowed: true,
        sets: 3,
        reps: "6-8",
        restSeconds: 90,
        estimatedMinutes: 8,
        notes: "Usar una carga controlable."
      },
      {
        trainingFocus: "fuerza",
        experienceLevel: "intermedio",
        allowed: true,
        sets: 4,
        reps: "5-8",
        restSeconds: 120,
        estimatedMinutes: 10,
        notes: "Buscar progresion de carga."
      },
      {
        trainingFocus: "fuerza",
        experienceLevel: "avanzado",
        allowed: true,
        sets: 5,
        reps: "4-6",
        restSeconds: 120,
        estimatedMinutes: 12,
        notes: "Mantener tecnica y cercania al fallo controlada."
      }
    ]
  }
];

module.exports = exercises;
