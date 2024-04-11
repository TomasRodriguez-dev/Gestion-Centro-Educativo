import Empleado from "./Empleado.js";

export default class Profesor extends Empleado {
  constructor(id_dni, nombre, apellidos, estado_civil, anio_incorporacion, num_despacho, departamento) {
    super(id_dni, nombre, apellidos, estado_civil, anio_incorporacion, num_despacho);
    this.departamento = departamento;
  }

  cambiarDepartamento(nuevo_departamento) {
    this.departamento = nuevo_departamento;
    console.log(`${this.nombre} ${this.apellidos} ha cambiado al departamento ${nuevo_departamento}`);
  }

  imprimirInformacion() {
    super.imprimirInformacion(); 
    console.log(`Departamento: ${this.departamento}`);
  }
}