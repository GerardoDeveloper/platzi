const data = {
  frontend : 'Gerardo',
  backend : 'Carlos',
  design : 'Daiana',
}

const entries = Object.entries(data);//Nos permite ver en forma de arreglo el objeto 'data'
console.log(entries);

console.log(entries.length);//Nos permite saber el tamaño del objeto.

const data2 = {
  frontend: 'Gerardo',
  backend: 'Carlos',
  design: 'Daiana',//<-- está coma significa que al final del elemento que se encuentra dentro de un objeto, puede a ver o no otro elemento.
}

const values = Object.values(data2);//Nos permite saber los valores de nuestro objeto.
console.log(values);


const string = 'hello';
console.log(string.padStart(7, ' hi'));//Agrega un elementos al inicio de la cadena.
console.log(string.padEnd(7, ' ----------'));//Agrega un elementos al final de la cadena.