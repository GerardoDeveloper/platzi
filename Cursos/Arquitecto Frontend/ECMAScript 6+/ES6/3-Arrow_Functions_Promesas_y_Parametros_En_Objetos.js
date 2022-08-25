//CREACIÓN DE OBJETOS ANTES.
let = name = 'Gerardo';
let age = 32;
obj = { name: name, age: age };

//ES6
obj2 = {name, age};

//ARROW FUNCTION ANTES
const names = [
  {name: 'Gerardo', age: 32},
  {name: 'Esteban', age: 25}
]

let listOfNames = names.map(function(item) {
  console.log(item.name);
});

//ES6
//Puede a ver 4 tipos de arrow fuction
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) =>{
  //code...
};

const listOfNames4 = name => {
  //code...
};

const square = num => num * num;

//PROMESAS: Vienen a resolver los callback, se pueden definir como, algo va a pasar.
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Algo salio bien');
    }else{
      reject('Algo salio mal');
    }
  });
}

//EJECUTAR PROMESA
helloPromise()
.then(response => console.log(response))
.then(() =>console.log('Hola'))
.catch(error => console.log());
