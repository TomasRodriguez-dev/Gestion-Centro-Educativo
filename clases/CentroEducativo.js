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

    // Método para imprimir la información de todas las personas
    imprimirInformacion() {
        this.personas.forEach(persona => {
            persona.imprimirInformacion();
            console.log("---------------------------------------------");
        });
    }
}