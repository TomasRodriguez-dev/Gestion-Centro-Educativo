import Persona from "./Persona.js";

export default class Empleado extends Persona {
    constructor(nombre, apellidos, numeroIdentificacion, estadoCivil, añoIncorporacion, numeroDespacho) {
      super(nombre, apellidos, numeroIdentificacion, estadoCivil);
      this.añoIncorporacion = añoIncorporacion;
      this.numeroDespacho = numeroDespacho;
    }
}