//CLASES
class Calculator{
  constructor(){
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB){
    this.valueA = valueA;
    this.valueB = valueB;

    return this.valueA + this.valueB;
  }
}

//INSTANCIAMOS LA CLASE.
const calc = new Calculator();
console.log(calc.sum(5, 5));

//TRABAJAR CON MODULOS.
import {hello} from './module';
hello();

//GENERADORES: Es una función especial que retorna una serie de valores según el algoritmo definido.
function* helloWord() {
  if (true) {
    yield 'Hello, ';
  } 
  if (true) {
    yield 'Word';
  } 
};

//LLAMAMOS AL GENERADOR.
const generadorHello = helloWord();
console.log(generadorHello.next().value);//Imprime 'Hello, '
console.log(generadorHello.next().value);//Imprime 'Word'