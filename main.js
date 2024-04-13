import CentroEducativo from "./clases/CentroEducativo.js";
import Persona from "./clases/Persona.js";
import Empleado from "./clases/Empleado.js"; 
import Estudiante from "./clases/Estudiante.js";
import Profesor from "./clases/Profesor.js";
import PersonalServicio from "./clases/PersonalServicio.js";

// Crea una instancia de CentroEducativo
const centroEducativo = new CentroEducativo();

// Ciclo para mostrar el menú y realizar operaciones según la elección del usuario
let opcion;
do {
    // Mostrar el menú justo antes de solicitar la opción
    const menu = "1. Dar de alta a una persona\n" +
                 "2. Dar de baja a una persona\n" +
                 "3. Listar toda la información\n" +
                 "4. Cambiar estado civil\n" +
                 "5. Reasignar despacho\n" +
                 "6. Cambiar curso/departamento/sección\n" +
                 "7. Salir";
    opcion = parseInt(prompt(menu + "\n\nSeleccione una opción"));

    switch (opcion) {
        case 1:
            // Pedir los datos de la persona a dar de alta
            const id_dni = prompt("DNI:");
            const nombre = prompt("Nombre:");
            const apellidos = prompt("Apellidos:");
            const estado_civil = prompt("Estado Civil:");
            const tipo = prompt("Tipo de persona (estudiante, profesor, personal de servicio):");

            // Dependiendo del tipo, crear la instancia correspondiente y dar de alta
            let persona;
            switch (tipo) {
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
                    alert("Tipo de persona no válido");
                    continue;
            }

            // Dar de alta a la persona
            centroEducativo.altaPersona(persona);
            alert(`Se ha dado de alta a ${persona.nombre} ${persona.apellidos}`);
            break;
        case 2:
            if (centroEducativo.personas.length === 0) {
                alert("No hay personas para dar de baja");
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
                alert("No hay información cargada");
            } else {
                centroEducativo.imprimirInformacion();
            }
            break;
        case 4:
            // Cambiar estado civil
            const dni_estado_civil = prompt("Ingrese el DNI de la persona:");
            const nuevo_estado_civil = prompt("Ingrese el nuevo estado civil:");
            const persona_estado_civil = centroEducativo.buscarPorDNI(dni_estado_civil);
            if (persona_estado_civil) {
                persona_estado_civil.cambiarEstadoCivil(nuevo_estado_civil);
            } else {
                alert("Persona no encontrada");
            }
            break;
        case 5:
            // Reasignar despacho
            const dni_despacho = prompt("Ingrese el DNI de la persona:");
            const nuevo_despacho = prompt("Ingrese el nuevo despacho:");
            const persona_despacho = centroEducativo.buscarPorDNI(dni_despacho);
            if (persona_despacho instanceof Empleado) {
                persona_despacho.reasignarDespacho(nuevo_despacho);
            } else {
                alert("Persona no encontrada o no es un empleado");
            }
            break;
        case 6:
            // Cambiar curso/departamento/sección
            const dni_cambio = prompt("Ingrese el DNI de la persona:");
            const tipo_persona = prompt("Ingrese el tipo de persona (estudiante/profesor/personal de servicio):");
            const persona_cambio = centroEducativo.buscarPorDNI(dni_cambio);
            if (persona_cambio) {
                switch (tipo_persona) {
                    case "estudiante":
                        const nuevo_curso = prompt("Ingrese el nuevo curso:");
                        if (persona_cambio instanceof Estudiante) {
                            persona_cambio.cambiarCurso(nuevo_curso);
                        } else {
                            alert("La persona no es un estudiante");
                        }
                        break;
                    case "profesor":
                        const nuevo_departamento = prompt("Ingrese el nuevo departamento:");
                        if (persona_cambio instanceof Profesor) {
                            persona_cambio.cambiarDepartamento(nuevo_departamento);
                        } else {
                            alert("La persona no es un profesor");
                        }
                        break;
                    case "personal de servicio":
                        const nueva_seccion = prompt("Ingrese la nueva sección:");
                        if (persona_cambio instanceof PersonalServicio) {
                            persona_cambio.cambiarSeccion(nueva_seccion);
                        } else {
                            alert("La persona no es personal de servicio");
                        }
                        break;
                    default:
                        alert("Tipo de persona no válido");
                }
            } else {
                alert("Persona no encontrada");
            }
            break;
        case 7:
            alert("Saliendo...");
            break;
        default:
            alert("Opción no válida");
    }
} while (opcion !== 7);