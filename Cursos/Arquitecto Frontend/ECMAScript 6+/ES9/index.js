/**
 * OPERADOR DE REPOSO
 * 
 * Puede extrar propiedades de un objeto que aún no se ha construido
 */
const obj = {
  name : 'Gerardo',
  age : 32,
  country : 'Argentina',
};

//Operador de reposo
let { name, ...all } = obj;
console.log(name, all);
//Imprimirá
/**
 * Gerardo {age: 32, country: 'Argentina'}
 */


//Operador de reposo
let {country, ...all} = obj;
console.log(all);
//Imprimirá
/**
 * {name: 'Gerardo', age: 32}
 */


 //UNIR DOS OBJETOS
const obj1 = {
  name: 'Gerardo',
  age: 32,
};

const obj2 = {
  ...obj1,
  country: 'Argentina',
};

console.log(ob2);


//Saber cuando ha finalizado una promesa.
const helloWord = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello word'), 3000)
      : reject(new Error('Error'))
  });
};

helloWord()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizo'))//Podemos saber cuando a finalizado nuestra promesa.


//AGRUPAR BLOQUES DEL REGEX  Y PODER ACCEDER A CADA UNO DE ELLOS.
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]){2})/;
const match = regexData.exec('2018-04-20');

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);