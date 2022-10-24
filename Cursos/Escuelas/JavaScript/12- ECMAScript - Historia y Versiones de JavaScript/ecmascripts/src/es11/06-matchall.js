const regex = /\b(Apple)+\b/g;

const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.";

/**
 * El método 'matchall' devuelve un iterable con todas las coincidencias del string específico a partir de una expresión regular.
 */
for (const match of fruit.matchAll(regex)) {

  /**
   * [
      'Apple',
      'Apple',
      index: 0,
      input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
      groups: undefined
     ]
     [
      'Apple',
      'Apple',
      index: 21,
      input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
      groups: undefined
     ]
   */
  console.log(match);
}