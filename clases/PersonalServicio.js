import Empleado from "./Empleado.js";

export default class PersonalServicio extends Empleado {
  constructor(id_dni, nombre, apellidos, estado_civil, anio_incorporacion, num_despacho, seccion_asignada) {
    super(id_dni, nombre, apellidos, estado_civil, anio_incorporacion, num_despacho);
    this.seccion_asignada = seccion_asignada;
  }

  cambiarSeccion(nueva_seccion) {
    this.seccion_asignada = nueva_seccion;
    console.log(`${this.nombre} ${this.apellidos} ha cambiado a la seccion ${nueva_seccion}`);
  }

  imprimirInformacion() {
    super.imprimirInformacion(); 
    console.log(`Sección Asignada: ${this.seccion_asignada}`);
  }
}