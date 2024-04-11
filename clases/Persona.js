export default class Persona {
  constructor(id_dni, nombre, apellidos, estado_civil) {
    this.id_dni = id_dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.estado_civil = estado_civil;
  }

  cambiarEstadoCivil(nuevo_estado_civil) {
    this.estado_civil = nuevo_estado_civil;
    console.log(`${this.nombre} ${this.apellidos} ha cambiado su estado civil a ${nuevo_estado_civil}`);
  }

  imprimirInformacion() {
    console.log(`DNI: ${this.id_dni}`);
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellidos: ${this.apellidos}`);
    console.log(`Estado Civil: ${this.estado_civil}`);
  }
}