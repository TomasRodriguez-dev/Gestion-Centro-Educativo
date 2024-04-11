import Persona from "./clases/Persona.js";
import Empleado from "./clases/Empleado.js"; 
import Estudiante from "./clases/Estudiante.js";
import Profesor from "./clases/Profesor.js";
import PersonalServicio from "./clases/PersonalServicio.js";

// Crear instancias de las clases
const persona = new Persona("Juan", "Pérez", "123456789", "Casado");
const empleado = new Empleado("María", "González", "987654321", "Soltero", 2010, "A1");
const estudiante = new Estudiante("Pedro", "Ramírez", "456789123", "Soltero", "2º ESO");
const profesor = new Profesor("Ana", "Martínez", "654321987", "Casado", 2005, "B2", "Matemáticas");
const personalServicio = new PersonalServicio("Luis", "López", "789456123", "Soltero", 2015, "C3", "Limpieza");
  
// Mostrar información en consola para verificar que todo funciona correctamente
console.log(persona);
console.log(empleado);
console.log(estudiante);
console.log(profesor);
console.log(personalServicio);