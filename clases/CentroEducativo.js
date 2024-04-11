import Estudiante from "./Estudiante.js";
import PersonalServicio from "./PersonalServicio.js";
import Profesor from "./Profesor.js";

export default class CentroEducativo {
    constructor() {
        this.personas = [];
    }

    // Método para dar de alta a una persona
    altaPersona(persona) {
        this.personas.push(persona);
        console.log(`Se ha dado de alta a ${persona.nombre} ${persona.apellidos}`);
    }

    // Método para dar de baja a una persona por su DNI
    bajaPersonaPorDNI(id_dni) {
        const index = this.personas.findIndex(persona => persona.id_dni === id_dni);
        if (index !== -1) {
            const personaEliminada = this.personas.splice(index, 1)[0];
            console.log(`Se ha dado de baja a ${personaEliminada.nombre} ${personaEliminada.apellidos}`);
        } else {
            console.log(`No se encontró a ninguna persona con el DNI ${id_dni}`);
        }
    }

    // Método para ordenar alfabéticamente las personas por apellidos
    ordenarPorApellidos() {
        this.personas.sort((a, b) => a.apellidos.localeCompare(b.apellidos));
    }

    // Método para filtrar personas por tipo (estudiante, profesor, personal de servicio)
    filtrarPorTipo(tipo) {
        return this.personas.filter(persona => {
            if (tipo === "estudiante" && persona instanceof Estudiante) {
                return true;
            }
            if (tipo === "profesor" && persona instanceof Profesor) {
                return true;
            }
            if (tipo === "personal de servicio" && persona instanceof PersonalServicio) {
                return true;
            }
            return false;
        });
    }

    // Método para buscar una persona por su ID/DNI
    buscarPorDNI(id_dni) {
        return this.personas.find(persona => persona.id_dni === id_dni);
    }

    // Método para imprimir la información de todas las personas
    imprimirInformacion() {
        this.personas.forEach(persona => {
            persona.imprimirInformacion();
            console.log("---------------------------------------------");
        });
    }
}