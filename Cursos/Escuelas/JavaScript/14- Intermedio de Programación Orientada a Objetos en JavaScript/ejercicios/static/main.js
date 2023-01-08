const juan = {
  name: "Juanito",
  age: 18,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  }
};

// console.log(Object.keys(juan)); // Lista todas las propiedades que tengan la propiedad 'enumerable' en true.
// console.log(Object.getOwnPropertyNames(juan));  // Lista todas las propiedades sin importar que tengan la propiedad 'enumerable' en true o en false.
// console.log(Object.entries(juan)); // Sella el objeto.

// Object.seal(juan);
// Object.freeze(juan); // Friza el objeto, es decir, no deja agregar propidades ni métodos al objeto.



Object.defineProperty(juan, "navigator", {
  value: "Chrome",
  enumerable: false,
  writable: true,
  configurable: true
})

Object.defineProperty(juan, "editor", {
  value: "VSCode",
  enumerable: true, // Determina sí una propiedad es listada o no.
  writable: false, // Determina si una propiedad es editable o no.
  configurable: true // Determina si una propiedad puede ser eliminada o no.
})

Object.defineProperty(juan, "terminal", {
  value: 7500,
  writable: false,
  enumerable: true,
  configurable: false
})

Object.defineProperty(juan, "pruebaNasa", {
  value: "male",
  writable: false,
  enumerable: false,
  configurable: false
})

console.log(Object.getOwnPropertyDescriptors(juan));