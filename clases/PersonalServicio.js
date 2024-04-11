import Empleado from "./Empleado.js";

export default class PersonalServicio extends Empleado {
    constructor(nombre, apellidos, numeroIdentificacion, estadoCivil, añoIncorporacion, numeroDespacho, seccion) {
      super(nombre, apellidos, numeroIdentificacion, estadoCivil, añoIncorporacion, numeroDespacho);
      this.seccion = seccion;
    }
}