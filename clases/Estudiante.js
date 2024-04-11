import Persona from "./Persona.js";

export default class Estudiante extends Persona {
    constructor(nombre, apellidos, numeroIdentificacion, estadoCivil, cursoMatriculado) {
      super(nombre, apellidos, numeroIdentificacion, estadoCivil);
      this.cursoMatriculado = cursoMatriculado;
    }
}