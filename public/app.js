// Estas claves se usan para guardar informacion temporal en sessionStorage.
// Sirven para mantener los datos entre pantallas sin necesidad de backend ni base de datos.
const STORAGE_KEY = "fitlogic-routine-draft";
const RESULT_KEY = "fitlogic-routine-result";

// Lee el borrador actual guardado en sessionStorage.
// Si todavia no hay nada guardado, devuelve un objeto vacio.
function getDraft() {
  const savedDraft = sessionStorage.getItem(STORAGE_KEY);
  return savedDraft ? JSON.parse(savedDraft) : {};
}

// Guarda o actualiza el borrador de la rutina en sessionStorage.
// Se usa entre pasos para no perder lo que el usuario ya eligio.
function saveDraft(nextDraft) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(nextDraft));
}

// Muestra un objeto JS formateado dentro de un elemento del DOM.
// Lo usamos sobre todo para estudiar respuestas JSON del backend.
function renderJson(targetElement, data) {
  targetElement.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

// Busca todos los checkboxes de musculos que esten marcados
// y devuelve un array con sus valores.
// Ejemplo: ["pecho", "triceps"]
function getSelectedMuscles() {
  return Array.from(
    document.querySelectorAll('input[name="muscles"]:checked')
  ).map((checkbox) => checkbox.value);
}

// Inicializa la pantalla del paso 1.
// Aca el usuario define solo el tiempo disponible.
function initTimeStep() {
  const form = document.getElementById("time-form");
  const draft = getDraft();
  const timeInput = document.getElementById("time");

  // Si el usuario ya habia pasado por este paso,
  // volvemos a mostrar el dato guardado.
  if (draft.time) {
    timeInput.value = draft.time;
  }

  // Cuando se envia el formulario:
  // 1. frenamos la recarga
  // 2. guardamos el tiempo
  // 3. mandamos al siguiente paso
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    saveDraft({
      ...draft,
      time: timeInput.value
    });

    window.location.href = "./setup-context.html";
  });
}

// Inicializa la pantalla del paso 2.
// Aca se guardan type, level y location.
function initContextStep() {
  const form = document.getElementById("context-form");
  const draft = getDraft();

  const typeInput = document.getElementById("type");
  const levelInput = document.getElementById("level");
  const locationInput = document.getElementById("location");

  // Si ya habia datos guardados, se vuelven a cargar en el formulario.
  if (draft.type) typeInput.value = draft.type;
  if (draft.level) levelInput.value = draft.level;
  if (draft.location) locationInput.value = draft.location;

  // Cuando el usuario envia este paso:
  // 1. frenamos el comportamiento normal del form
  // 2. guardamos el contexto
  // 3. pasamos al paso de seleccion de musculos
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    saveDraft({
      ...draft,
      type: typeInput.value,
      level: levelInput.value,
      location: locationInput.value
    });

    window.location.href = "./setup-muscles.html";
  });
}

// Inicializa la pantalla del paso 3.
// Aca se seleccionan los musculos y finalmente se llama al backend.
function initMusclesStep() {
  const form = document.getElementById("muscles-form");
  const submitMessage = document.getElementById("submit-message");
  const draft = getDraft();

  // Si el usuario vuelve a este paso, re-marcamos los musculos que ya habia elegido.
  if (Array.isArray(draft.muscles)) {
    draft.muscles.forEach((muscle) => {
      const checkbox = document.querySelector(`input[name="muscles"][value="${muscle}"]`);
      if (checkbox) {
        checkbox.checked = true;
      }
    });
  }

  // Cuando el usuario envia el ultimo paso:
  // 1. validamos que haya al menos un musculo
  // 2. armamos el body final
  // 3. hacemos fetch al backend
  // 4. guardamos el resultado
  // 5. redirigimos a la pagina final
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const muscles = getSelectedMuscles();

    // Validacion minima del frontend.
    // Si no selecciona musculos, no intentamos llamar al backend.
    if (muscles.length === 0) {
      submitMessage.textContent = "Selecciona al menos un musculo para generar la rutina.";
      return;
    }

    // Este objeto es el body que se envia al endpoint POST /api/routines.
    // Aca se junta lo guardado en pasos anteriores con los musculos finales.
    const body = {
      ...draft,
      muscles
    };

    submitMessage.textContent = "";
    saveDraft(body);

    try {
      // fetch hace la request HTTP al backend.
      // Le pega al endpoint de rutinas y manda JSON.
      const response = await fetch("/api/routines", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });

      // Convertimos la respuesta del backend a objeto JS.
      const data = await response.json();

      // Si el backend responde con error, mostramos el mensaje al usuario.
      if (!response.ok) {
        submitMessage.textContent = data.error || "No se pudo generar la rutina.";
        return;
      }

      // Si todo sale bien, guardamos la rutina generada para usarla en la vista final.
      sessionStorage.setItem(RESULT_KEY, JSON.stringify(data));

      // Finalmente navegamos a la pantalla donde se muestra la rutina.
      window.location.href = "./routine.html";
    } catch (error) {
      // Este catch cubre errores de conexion o fallos inesperados del request.
      submitMessage.textContent = "Ocurrio un error al conectar con el servidor.";
    }
  });
}

// Toma la respuesta generada por el backend y la transforma en HTML legible.
// Esta funcion ya no muestra JSON crudo: arma una vista mas cercana a una app real.
function renderRoutineResult(result) {
  const summary = document.getElementById("routine-summary");
  const routineList = document.getElementById("routine-list");

  // Si no hay rutina guardada, mostramos un mensaje vacio.
  if (!result) {
    summary.innerHTML = "";
    routineList.innerHTML = "<p>No hay una rutina generada todavia.</p>";
    return;
  }

  // Extraemos del resultado lo que nos interesa renderizar.
  const { filtersUsed, totalEstimatedMinutes, exercises } = result.data;

  // Armamos un pequeño resumen de la rutina:
  // tiempo, tipo, nivel, lugar y musculos elegidos.
  summary.innerHTML = `
    <article class="summary-item">
      <span class="summary-label">Tiempo pedido</span>
      <span class="summary-value">${filtersUsed.time} min</span>
    </article>
    <article class="summary-item">
      <span class="summary-label">Tiempo estimado</span>
      <span class="summary-value">${totalEstimatedMinutes} min</span>
    </article>
    <article class="summary-item">
      <span class="summary-label">Tipo</span>
      <span class="summary-value">${filtersUsed.type}</span>
    </article>
    <article class="summary-item">
      <span class="summary-label">Nivel</span>
      <span class="summary-value">${filtersUsed.level}</span>
    </article>
    <article class="summary-item">
      <span class="summary-label">Lugar</span>
      <span class="summary-value">${filtersUsed.location}</span>
    </article>
    <article class="summary-item">
      <span class="summary-label">Musculos</span>
      <span class="summary-value">${filtersUsed.muscles.join(", ")}</span>
    </article>
  `;

  // Recorremos el array de ejercicios y por cada uno generamos una tarjeta.
  // Esto transforma la respuesta del backend en una vista mas amigable.
  routineList.innerHTML = exercises
    .map(
      (exercise) => `
        <article class="exercise-card">
          <h3>${exercise.name}</h3>
          <div class="exercise-meta">
            <span class="tag">${exercise.primaryMuscle}</span>
            <span class="tag">${exercise.sets} series</span>
            <span class="tag">${exercise.reps}</span>
            <span class="tag">${exercise.restSeconds}s descanso</span>
            <span class="tag">${exercise.estimatedMinutes} min</span>
          </div>
          <p class="exercise-notes">${exercise.notes}</p>
        </article>
      `
    )
    .join("");
}

// Inicializa la pagina final donde se muestra la rutina y tambien
// una pequena demo del modulo de ejercicios para estudiar endpoints.
function initRoutineResult() {
  const savedResult = sessionStorage.getItem(RESULT_KEY);
  const parsedResult = savedResult ? JSON.parse(savedResult) : null;

  // Primero renderizamos la rutina guardada desde el paso anterior.
  renderRoutineResult(parsedResult);

  const exerciseResult = document.getElementById("exercise-result");
  const loadAllExercisesButton = document.getElementById("load-all-exercises");
  const loadFilteredExercisesButton = document.getElementById("load-filtered-exercises");

  // Este boton prueba GET /api/exercises/all
  // y muestra el JSON para estudiar la respuesta del modulo exercises.
  loadAllExercisesButton.addEventListener("click", async () => {
    try {
      const response = await fetch("/api/exercises/all");
      const data = await response.json();
      renderJson(exerciseResult, data);
    } catch (error) {
      exerciseResult.innerHTML = "<p>No se pudieron cargar los ejercicios.</p>";
    }
  });

  // Este boton prueba GET /api/exercises/filter con un ejemplo hardcodeado.
  // Sirve para estudiar como responde exerciseController cuando se aplican filtros.
  loadFilteredExercisesButton.addEventListener("click", async () => {
    try {
      // URLSearchParams ayuda a construir la query string de forma ordenada.
      const query = new URLSearchParams({
        location: "casa",
        level: "principiante",
        trainingFocus: "musculacion",
        muscle: "pecho",
        selectionMode: "custom",
        time: "20"
      });

      const response = await fetch(`/api/exercises/filter?${query.toString()}`);
      const data = await response.json();
      renderJson(exerciseResult, data);
    } catch (error) {
      exerciseResult.innerHTML = "<p>No se pudo ejecutar el filtrado de ejemplo.</p>";
    }
  });
}

// Cada HTML tiene un atributo data-page distinto en el body.
// Esto nos permite usar un solo archivo app.js y decidir que inicializar segun la pagina actual.
const currentPage = document.body.dataset.page;

// Si estamos en el paso de tiempo, corremos solo esa logica.
if (currentPage === "time-step") {
  initTimeStep();
}

// Si estamos en el paso de contexto, corremos solo esa logica.
if (currentPage === "context-step") {
  initContextStep();
}

// Si estamos en el paso de musculos, corremos solo esa logica.
if (currentPage === "muscles-step") {
  initMusclesStep();
}

// Si estamos en la pagina final, mostramos la rutina y la demo de ejercicios.
if (currentPage === "routine-result") {
  initRoutineResult();
}
