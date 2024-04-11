import Persona from "./Persona.js";

export default class Empleado extends Persona {
  constructor(id_dni, nombre, apellidos, estado_civil, anio_incorporacion, num_despacho) {
    super(id_dni, nombre, apellidos, estado_civil);
    this.anio_incorporacion = anio_incorporacion;
    this.num_despacho = num_despacho;
  }

  reasignarDespacho(nuevo_despacho) {
    this.num_despacho = nuevo_despacho;
    console.log(`${this.nombre} ${this.apellidos} ha sido reasignado al despacho ${nuevo_despacho}`);
  }

  imprimirInformacion() {
    super.imprimirInformacion();
    console.log(`Año de Incorporación: ${this.anio_incorporacion}`);
    console.log(`Número de Despacho: ${this.num_despacho}`);
  }
}