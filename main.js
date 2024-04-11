import Persona from "./clases/Persona.js";
import Empleado from "./clases/Empleado.js"; 
import Estudiante from "./clases/Estudiante.js";
import Profesor from "./clases/Profesor.js";
import PersonalServicio from "./clases/PersonalServicio.js";

// Crea instancias de las clases
const persona = new Persona("Juan", "Pérez", "123456789", "Casado");
const empleado = new Empleado("María", "González", "987654321", "Soltero", 2010, "A1");
const estudiante = new Estudiante("Pedro", "Ramírez", "456789123", "Soltero", "2º ESO");
const profesor = new Profesor("Ana", "Martínez", "654321987", "Casado", 2005, "B2", "Matemáticas");
const personalServicio = new PersonalServicio("Luis", "López", "789456123", "Soltero", 2015, "C3", "Limpieza");

// Cambiar el estado civil de una persona
persona.cambiarEstadoCivil("Soltero");

// Reasignar el despacho de un empleado
empleado.reasignarDespacho("A2");

// Cambiar el curso de un estudiante
estudiante.cambiarCurso("3º ESO");

// Imprimir la información de cada persona
persona.imprimirInformacion();
empleado.imprimirInformacion();
estudiante.imprimirInformacion();
profesor.imprimirInformacion();
personalServicio.imprimirInformacion();