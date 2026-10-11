# Node.js & Backend Development

## Assignment Map

| Folder | Assignment or class work | Main files |
|---|---|---|
| `assignment1 - IntroductoryNodeExercises` | Assignment 1 | `atm.js`, `big-assignment.js`, `server.js`, `shopping-cart.js`, `validate.js` |
| `assignment3 - ExpressUserValidationApi` | Assignment 3 | `app.js`, `controllers/userController.js`, `routes/userRoutes.js`, `middleware/validateUser.js` |
| `majorAssignmentOne.js` | Major Assignment 1 | Root-level JavaScript assignment file |
| `majorAssignment2 - EcommerceBackendApi` | Major Assignment 2 | `backend/server.js`, product/auth controllers, routes, and services |
| `majorAssignment3 - UserManagementMiddlewareApi` | Major Assignment 3 | `server.js`, user controller, routes, validation, and logging |
| `class 4 - PlantCatalogFullStack` | Class 4 | Backend plant service and React frontend |
| `classAssignment1 - NodeModulesExercise` | Class Assignment 1 | `main.js` and `module.js` |
| `classAssignment2 - FileDataModuleExercise` | Class Assignment 2 | `index.js`, `module.js`, and `data.txt` |
| `classAssignment3 - JsonDataModuleExercise` | Class Assignment 3 | `index.js`, `module.js`, and `data.json` |
| `classWork -NodeFundamentalsPractice` | Class work | `index.js`, `main.js`, `math.js`, and `app.js` |
| `classworkDay4 - ExpressRequestPractice` | Classwork Day 4 | Express request examples and server files |
| `classworkDay5 - TrainBookingApi` | Classwork Day 5 | Train booking backend, models, routes, and middleware |
| `javascriptBasics` | JavaScript basics | Fundamentals, browser assignments, and concept examples |
| `httpModuleExercises` | HTTP practice | Native HTTP servers, data, and test clients |
| `middlewareDemoExamples` | Middleware practice | Middleware, signature, and server examples |
| `plantProject` | Plant project | Plant catalog backend and frontend |
| `practiceFileReadWriteExercises` | Practice exercises | `readTextFile.js` and `writeTextFile.js` |

Each meaningful project folder contains its own `assignmentDocumentation.docx`, generated from that project's actual source files and README. Technical subfolders such as `controllers`, `routes`, `services`, and `models` are documented within their parent project rather than treated as separate assignments.

The train-booking JWT secret is `Demo@123` and is classroom-only demo data, not a production secret.

Coursework, lecture notes, and lab exercises covering JavaScript fundamentals, Node.js core modules, and Express.js backend development.

## Topics Covered

- **JavaScript Concepts**: Execution context, hoisting, closures, `this` binding, higher-order functions, Promises, and asynchronous control flow.
- **Node.js Core Modules**: CommonJS module exports/imports, File System (`fs`), Operating System (`os`), and native `http` module.
- **HTTP Server Basics**: Creating servers, handling request streams, parsing JSON payloads, route handling, and status codes.
- **Data Persistence**: Reading and writing structured records using file-based storage (`fs`).
- **Express.js Framework**: Building RESTful endpoints, middleware usage, route organization, and MVC pattern (Controllers, Routes, Services).

## Running the Code

### Prerequisites
- Node.js (v18+)
- npm

### Execution
Run any standalone script directly:
```bash
node <script-name>.js
```

For subprojects with external dependencies (e.g., Express apps):
```bash
npm install
npm start
```
