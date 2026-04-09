# FitLogic

FitLogic es un proyecto backend enfocado en la generacion de rutinas de entrenamiento segun el contexto del usuario, su objetivo de entrenamiento y el tiempo disponible.

La version actual se esta construyendo como un proyecto de aprendizaje con Node.js y Express, con foco en fundamentos de backend, arquitectura modular y desarrollo progresivo de funcionalidades.

## Vision del Proyecto

La idea de FitLogic es permitir que una persona pueda:

- elegir como quiere entrenar
- definir su nivel de experiencia
- indicar donde entrena y con que equipamiento cuenta
- seleccionar musculos de forma manual o elegir un sistema de entrenamiento predefinido
- indicar cuanto tiempo tiene disponible
- recibir una rutina adaptada a ese contexto

Las futuras versiones contemplan rutinas guardadas, sistemas de progreso, logros, gamificacion, contenido multimedia de ejercicios y una logica de entrenamiento mas avanzada basada en investigacion y criterios reales de planificacion.

## Estado Actual

El proyecto se encuentra en una etapa inicial de arquitectura backend.

Actualmente ya cuenta con:

- configuracion base del servidor con Express
- estructura modular con `app.js`, `routes` y `controllers`
- validacion inicial para la creacion de rutinas
- catalogo temporal de ejercicios
- endpoint de filtrado de ejercicios

Actualmente se esta diseñando:

- la logica de generacion de rutinas
- la separacion entre flujo `custom` y flujo `system`
- el contexto del usuario segun lugar de entrenamiento y equipamiento disponible
- un filtrado mas inteligente antes de construir la rutina

## Stack Tecnologico

- Node.js
- Express
- JavaScript

Planeado para mas adelante:

- MongoDB
- autenticacion
- persistencia de rutinas guardadas

## Estructura del Proyecto

```txt
fitlogic/
├── app.js
├── server.js
├── controllers/
│   ├── exerciseController.js
│   ├── routineController.js
│   └── userController.js
├── routes/
│   ├── exerciseRoutes.js
│   ├── routineRoutes.js
│   └── userRoutes.js
└── data/
    └── exercisesData.js
```

## Arquitectura

El proyecto sigue una estructura modular con Express:

- `server.js` levanta el servidor
- `app.js` configura la aplicacion y conecta los modulos de rutas
- `routes/` define los endpoints
- `controllers/` maneja la logica de request y response
- `data/` funciona actualmente como una fuente de datos temporal en memoria hasta incorporar base de datos

## Endpoints Actuales

### Rutinas

- `GET /api/routines`
- `POST /api/routines`

Actualmente el endpoint de rutinas valida:

- `time`
- `type`
- `level`

### Ejercicios

- `GET /api/exercises`
- `GET /api/exercises/all`
- `GET /api/exercises/filter`

El endpoint de filtrado soporta por ahora:

- `location`
- `level`
- `trainingFocus`
- `muscle`
- `selectionMode`
- `equipment`
- `time`

Ejemplo:

```txt
GET /api/exercises/filter?location=casa&level=principiante&trainingFocus=musculacion
```

### Usuarios

- `GET /api/users`

Este modulo esta preparado de forma base para crecer en futuras iteraciones.

## Direccion del Modelo de Ejercicios

FitLogic se esta diseñando sobre una estructura flexible de ejercicios que incluye:

- identidad base del ejercicio
- musculo principal y musculos secundarios
- lugares de entrenamiento compatibles
- equipamiento requerido
- compatibilidad con modos de seleccion
- configuraciones segun foco de entrenamiento y nivel de experiencia

Esto permite que el proyecto pueda evolucionar hacia una logica de generacion mas realista, en lugar de depender de listas estaticas de ejercicios.

## Direccion de la Logica del Producto

Se estan contemplando dos caminos principales para generar rutinas:

- `custom`
  El usuario selecciona manualmente uno o mas musculos.

- `system`
  El usuario elige una estructura predefinida como `PPL`, `torso-pierna` o `full body`.

En ambos casos, la idea es que el generador de rutinas:

- filtre primero los ejercicios validos
- construya despues una rutina que entre dentro del tiempo disponible
- mas adelante ajuste volumen, series, repeticiones, descansos y progresion

## Roadmap

Corto plazo:

- mejorar la logica de generacion de rutinas
- conectar el filtrado de ejercicios con la construccion de la rutina
- definir plantillas para sistemas de entrenamiento
- ampliar el flujo relacionado a usuarios

Mediano plazo:

- guardar rutinas aceptadas
- permitir regenerar nuevas propuestas de rutina
- almacenar el equipamiento y el contexto del usuario
- incorporar persistencia con base de datos

Largo plazo:

- sistema de progreso y rangos
- logros y gamificacion
- sistema de personaje y evolucion visual
- videos y contenido enriquecido para ejercicios
- mejor logica de prescripcion basada en entrenamiento real

## Ejecucion Local

```bash
npm install
npm run dev
```

Servidor local por defecto:

```txt
http://localhost:3000
```

## Contexto de Aprendizaje

FitLogic tambien esta siendo desarrollado como un proyecto practico de aprendizaje backend. Las decisiones de arquitectura y funcionalidades se estan construyendo progresivamente, priorizando entender la logica detras de cada parte y no solo hacer que la aplicacion funcione.
"# FitLogic" 
