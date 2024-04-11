import CentroEducativo from "./clases/CentroEducativo.js";
import Persona from "./clases/Persona.js";
import Empleado from "./clases/Empleado.js"; 
import Estudiante from "./clases/Estudiante.js";
import Profesor from "./clases/Profesor.js";
import PersonalServicio from "./clases/PersonalServicio.js";

// Crea una instancia de CentroEducativo
const centroEducativo = new CentroEducativo();

// Crea instancias de personas y da de alta a cada una en el centro educativo
const persona1 = new Persona("123456789", "Juan", "Pérez", "Casado");
const empleado1 = new Empleado("987654321", "María", "González", "Soltero", 2010, "A1");
const estudiante1 = new Estudiante("456789123", "Pedro", "Ramírez", "456789123", "Soltero", "2º ESO");
const profesor1 = new Profesor("654321987", "Ana", "Martínez", "Casado", 2005, "B2", "Matemáticas");
const personalServicio1 = new PersonalServicio("789456123", "Luis", "López", "Soltero", 2015, "C3", "Limpieza");

centroEducativo.altaPersona(persona1);
centroEducativo.altaPersona(empleado1);
centroEducativo.altaPersona(estudiante1);
centroEducativo.altaPersona(profesor1);
centroEducativo.altaPersona(personalServicio1);

// Imprime la información de todas las personas en el centro educativo
centroEducativo.imprimirInformacion();

// Da de baja a una persona por su ID/DNI
centroEducativo.bajaPersonaPorDNI("123456789");

// Imprime la información actualizada
centroEducativo.imprimirInformacion();