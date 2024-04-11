import Empleado from "./Empleado.js";

export default class Profesor extends Empleado {
    constructor(nombre, apellidos, numeroIdentificacion, estadoCivil, añoIncorporacion, numeroDespacho, departamento) {
      super(nombre, apellidos, numeroIdentificacion, estadoCivil, añoIncorporacion, numeroDespacho);
      this.departamento = departamento;
    }
}