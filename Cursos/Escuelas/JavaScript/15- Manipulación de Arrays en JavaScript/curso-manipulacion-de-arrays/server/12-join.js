const elements = ["hola", null, "como", "estas"]

// Con for
let acumulator = ""
const separator = "/"

for (let i = 0; i < elements.length; i++) {
  const element = elements[i] ?? "";

  if (i !== elements.length - 1) {
    acumulator += element + separator;
  } else {
    acumulator += element;
  }
}

console.log(acumulator) // 'hola//como/estas'

// Con join

/**
 * join une los elementos del array, mediante una separación, y retorna un string. Si un elemento es undefined o null, se convierte en una cadena vacía.
 */
const resultado = elements.join("/")
console.log(resultado) // 'hola//como/estas'

// split

/**
 * split, es lo contrario que el método join, consiste en separar un string en substrings,
 * indicando un valor a separar. Este método retornará un array de los elementos separados.
 */
const cadena = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

cadena.split(" ")/* [ 'JavaScript', 'es', 'maravilloso,', 'con', 'JavaScript', 'puedo', 'crear', 'el', 'futuro', 'de', 'la', 'web.' ]*/

cadena.split(", ") /* ['JavaScript es maravilloso', 'con JavaScript puedo crear el futuro de la web.']*/

cadena.split("JavaScript") /* ['', ' es maravilloso, con ', ' puedo crear el futuro de la web.']*/

cadena.split(" ", 3) // [ 'JavaScript', 'es', 'maravilloso,' ]