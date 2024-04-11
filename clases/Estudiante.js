import Persona from "./Persona.js";

export default class Estudiante extends Persona {
  constructor(id_dni, nombre, apellidos, estado_civil, curso_matriculado) {
    super(id_dni, nombre, apellidos, estado_civil);
    this.curso_matriculado = curso_matriculado;
  }

  cambiarCurso(nuevo_curso) {
    this.curso_matriculado = nuevo_curso;
    console.log(`${this.nombre} ${this.apellidos} ha cambiado al curso ${nuevo_curso}`);
  }

  imprimirInformacion() {
    super.imprimirInformacion();
    console.log(`Curso Matriculado: ${this.curso_matriculado}`);
  }
}