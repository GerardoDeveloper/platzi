// Console

console.log()
console.info()
console.warn()
console.error()

// Tabla
console.table()

const varTesting = [
  {
    a: 1,
    b: 'Y'
  },
  {
    a: 'Z',
    b: 2
  }
];

console.table(varTesting);
// ┌─────────┬─────┬─────┐
// │ (index) │  a  │  b  │
// ├─────────┼─────┼─────┤
// │    0    │  1  │ 'Y' │
// │    1    │ 'Z' │  2  │
// └─────────┴─────┴─────┘

// Armar grupos
console.group();
console.groupEnd();

// EJEMPLO 1
console.group('despedida');
console.log('adios');
console.group();
console.log('Carlos');
console.groupEnd();
console.groupEnd();

// Contadores
console.count('veces'); // veces: 1
console.count('veces'); // veces: 2
console.count('veces'); // veces: 3
console.countReset('veces'); // veces: 4
console.count('veces'); // veces: 5