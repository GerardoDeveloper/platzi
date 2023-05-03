// El return está implícito sino añadimos las llaves.
const getResult = () => "Results";
console.log(getResult()); // Results

//Sin arrows functions
[1, 2, 3].map(function (n) {
  return n * 2;
});

// Con arrows functions
[1, 2, 3].map((n) => n * 2);

// Ejemplos del this en arrow function
const counter = {
  number: 0,
  increase() {
    setInterval(() => console.log(this.number++), 1000);
  },
};

counter.increase(); //> 1 2 3 4 5

// Ejemplos del this en funciones normales.
const counter2 = {
  number: 0,
  increase() {
    setInterval(function () {
      console.log(this.number++);
    }, 1000);
  },
};

/**
 * ? Obtenemos un NaN (Not a Number) y esto se da porque dentro
 * ? de la función setInterval() el 'this' perdio por completo la referencia
 * ? de 'counter2', entonces como no tiene la referencia a ese elemento, no
 * ? sabe que es 'number'
 */
counter2.increase(); //> NaN, NaN, NaN, NaN, NaN

/**
 * Antes que existieran las arrow function, el problema del 'this' en funciones
 * se solucionaban con el método 'bind'
 */
const counter3 = {
  number: 0,
  increase() {
    setInterval(
      function () {
        console.log(++this.number);
      }.bind(this), // <---
      1000
    );
  },
};

counter3.increase(); //> 1 2 3 4 5