//MULTILINEAS EN LOS String ANTES.
let lorem = "Una frace epica \n"
+ "otra frace epica.";

//ES6
let lorem2 = `Otra frace epica
Ahora es otra frace épica.
`;

console.log(lorem2);

//DESESTRURACIÓN DE ELEMENTOS.
let person = {
  'name' : 'Gerardo',
  'age' : 32,
  'country' : 'Agentina'
}

//ACCEDER A LOS ELEMENTOS ANTES.
console.log(person.name, person.age);

//ES6
let {name, age, country} = person;
console.log(name, age, country);

/*
OPERADOR DE PROPAGACIÓN

Nos permite expandir desde otras situaciones varios elementos.
*/
let array1 = ['Gerardo', 'Daiana', 'Camila'];
let array2 = ['Esteban', 'Juliana', 'Erica'];

//ESTRUCTURAR UN ARREGLO EN ES6
let education = ['David', ...array1, ...array2];//de esta forma se unen los array1 y array2

//LET y CONST
var a = 0; //Esta disponible de forma global.
let b = 0; //Sólo esta disponible en el bloque de código en el cual será llamado.

{
  var globalVar = "Global var";
}

{
  let globalLet = "Global let";
}

console.log(globalVar);//Se imprimirá en consola.
console.log(globalLet);//No se imprimirá en consola.

const a = 'b';//Nos permite crear una constante inmutable.