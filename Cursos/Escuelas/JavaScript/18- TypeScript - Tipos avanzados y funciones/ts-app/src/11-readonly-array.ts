const numbers: ReadonlyArray<number> = [1, 2, 2, 2];
// Todos los métodos que modifican al array originl, ya no estarán disponibles.
numbers.push(9); // INCORRECTO
numbers.pop(); // INCORRECTO
numbers.unshift(1); // INCORRECTO

// Todos aquellos métodos que no modifiquen al array original, sí estarán disonibles.
numbers.filter(() => {}); // CORRECTO
numbers.reduce(() => 0); // CORRECTO
numbers.map(() => 0); // CORRECTO
