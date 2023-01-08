const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
  editA() {
    this.a = "AAAAAA";
  }
};

// Convierte un objeto a un string.
const stringifiedComplexObj = JSON.stringify(obj1);
console.log(stringifiedComplexObj + " " + typeof stringifiedComplexObj); // {"a":"a","b":"b","c":{"d":"d","e":"e"}}

// Convierte un string a un objeto.
const obj2 = JSON.parse(stringifiedComplexObj);
console.log(obj2); // { a: 'a', b: 'b', c: { d: 'd', e: 'e' } }
