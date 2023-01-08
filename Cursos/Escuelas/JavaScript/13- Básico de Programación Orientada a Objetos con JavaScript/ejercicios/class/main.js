// Objetos literales
const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],
  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  },
};

// Prototipos
function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
}
Student.prototype.aprobarCurso = function (nuevoCursito) {
  this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student(
  "Juanita Alejandra",
  15,
  [
    "Curso de Introducción a la Producción de Videojuegos",
    "Curso de Creación de Personajes",
  ],
);

/* ==================================================Prototipos con la sintaxis de clases================================================== */
class Student2 {

  // Constructor
  constructor({ name, cursosAprobados = [], age, email, }) {

    // Atributos
    this.name = name;
    this.email = email;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  // Métodos
  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}

// Instancia de la clase
const miguelito = new Student2({
  name: "Miguel",
  age: 28,
  email: "miguelito@platzi.com",
});
