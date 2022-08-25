//VALORES POR DEFECTO ANTES
function newFuction(name, age, country) {
  var name = name || 'Gerardo';
  var age = age || 32;
  var country = country || 'Argentina';
  console.log(name, age, country);
}

//ES6
function newFuction2(name = 'Gerardo', age = 32, country = 'Argentina') {
  console.log(name, age, country);
}

//LLAMADA DE LA FUNCIÓN.
newFuction2();//Sin párametros, imprimirá los párametros por defecto.

newFuction2('Estebanquito', 34, 'Brucelas');//Imprimirá los párametros especificados.


/*TEMPLATE LITERALS
Nos permite separar o unir según sea el caso varios elementos.*/

//ANTES
let hello = 'Hello';
let word = 'Word';
let result = hello + ' ' + word;
console.log(result);

//ES6
let result2 = `${hello} ${word}`;
console.log(result2);