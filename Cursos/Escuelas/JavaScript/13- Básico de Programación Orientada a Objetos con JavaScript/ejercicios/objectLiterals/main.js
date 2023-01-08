const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],
  // 1ra forma de crear métodos dentro de un objeto
  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  },
  // 2da forma de crear métodos dentro de un objeto
  aprobarCurso: function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
};

// Creación de prototipo
function Student(name, age, cursosAprobados) {

  // Atributos
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;

  // 1ra forma de trabajar con los prototipos, para crear métodos.
  // this.aprobarCurso = function (nuevoCursito) {
  //   this.cursosAprobados.push(nuevoCursito);
  // }
}

// 2da forma de trabajar con los prototipos, crear métodos.
Student.prototype.aprobarCurso = function (nuevoCursito) {
  this.cursosAprobados.push(nuevoCursito);
}

// Instancia del prototipo.
const juanita = new Student("Juanita Alejandra", 15, ["Curso de Introducción a la Producción de Videojuegos", "Curso de Creación de Personajes",]);
