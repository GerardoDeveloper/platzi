import { Animal, Dog } from './09-protected';

/**
 * Sí la clase es abstracta no se pueden crear instancias de la misma directamente,
 * ? se deben crear instancias a traves de las clases hijas que hereden de ella.
 */
// const animal = new Animal('elite'); // --> ERROR, Cannot create an instance of an abstract class.
// animal.greeting();

const cheis = new Dog('cheis', 'nico');
cheis.greeting();
cheis.woof(2);

