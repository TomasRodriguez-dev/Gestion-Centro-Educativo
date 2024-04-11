import CentroEducativo from "./clases/CentroEducativo.js";
import Persona from "./clases/Persona.js";
import Empleado from "./clases/Empleado.js"; 
import Estudiante from "./clases/Estudiante.js";
import Profesor from "./clases/Profesor.js";
import PersonalServicio from "./clases/PersonalServicio.js";

// Función para mostrar un menú de opciones al usuario
function mostrarMenu() {
    console.log("1. Dar de alta a una persona");
    console.log("2. Dar de baja a una persona");
    console.log("3. Listar toda la información");
    console.log("4. Salir");
}

// Crea una instancia de CentroEducativo
const centroEducativo = new CentroEducativo();

// Ciclo para mostrar el menú y realizar operaciones según la elección del usuario
let opcion;
do {
    mostrarMenu();
    opcion = parseInt(prompt("Seleccione una opción"));

    switch (opcion) {
        case 1:
            // Pedir los datos de la persona a dar de alta
            const id_dni = prompt("DNI:");
            const nombre = prompt("Nombre:");
            const apellidos = prompt("Apellidos:");
            const estado_civil = prompt("Estado Civil:");
            const tipo = prompt("Tipo de persona (empleado, estudiante, profesor, personal de servicio):");

            // Dependiendo del tipo, crear la instancia correspondiente y dar de alta
            let persona;
            switch (tipo) {
                case "empleado":
                    const anio_incorporacion = parseInt(prompt("Año de Incorporación:"));
                    const num_despacho = prompt("Número de Despacho:");
                    persona = new Empleado(id_dni, nombre, apellidos, estado_civil, anio_incorporacion, num_despacho);
                    break;
                case "estudiante":
                    const curso_matriculado = prompt("Curso Matriculado:");
                    persona = new Estudiante(id_dni, nombre, apellidos, estado_civil, curso_matriculado);
                    break;
                case "profesor":
                    const anio_incorporacion_prof = parseInt(prompt("Año de Incorporación:"));
                    const num_despacho_prof = prompt("Número de Despacho:");
                    const departamento = prompt("Departamento:");
                    persona = new Profesor(id_dni, nombre, apellidos, estado_civil, anio_incorporacion_prof, num_despacho_prof, departamento);
                    break;
                case "personal de servicio":
                    const anio_incorporacion_serv = parseInt(prompt("Año de Incorporación:"));
                    const num_despacho_serv = prompt("Número de Despacho:");
                    const seccion_asignada = prompt("Sección Asignada:");
                    persona = new PersonalServicio(id_dni, nombre, apellidos, estado_civil, anio_incorporacion_serv, num_despacho_serv, seccion_asignada);
                    break;
                default:
                    console.log("Tipo de persona no válido");
                    continue;
            }

            // Dar de alta a la persona
            centroEducativo.altaPersona(persona);
            console.log(`Se ha dado de alta a ${persona.nombre} ${persona.apellidos}`);
            break;
        case 2:
            if (centroEducativo.personas.length === 0) {
                console.log("No hay personas para dar de baja");
            } else {
                // Pedir el DNI de la persona a dar de baja
                const id_dni_baja = prompt("DNI de la persona a dar de baja:");
                // Dar de baja a la persona
                centroEducativo.bajaPersonaPorDNI(id_dni_baja);
            }
            break;
        case 3:
            // Imprimir toda la información
            if (centroEducativo.personas.length === 0) {
                console.log("No hay información cargada");
            } else {
                centroEducativo.imprimirInformacion();
            }
            break;
        case 4:
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción no válida");
    }
} while (opcion !== 4);