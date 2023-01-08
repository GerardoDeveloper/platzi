const letters = ['a','b','c'];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for',element);
}

console.log("========================foreach========================");

/**
 * ForEach, consiste en ejecutar una función (callback) para cada uno de los elementos iterados.
 */
letters.forEach(item => console.log('forEach', item))