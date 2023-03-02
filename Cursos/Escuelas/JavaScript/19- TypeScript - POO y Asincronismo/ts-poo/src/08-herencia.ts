// Clase padre
export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

// Clase hija,hereda de la clase padre
export class Dog extends Animal {

  /**
   *
   * @param name
   * @param owner
   */
  constructor(name: string, public owner: string) {
    /**
     * Para no doblar el 'name' del atributo, es decir, el nombre del animal y el nombre del perro,
     * no se debe colocar el 'public' delante de 'name', sólo se necesita pasarlo como parámatro y
     * no como una propiedad de clase. Ésto es para no duplicar el nombre en la clase perro y otro en la case animal.
     */
    super(name);
    // this.name = name; // INCORRECTO, se duplica el nombre.
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof!');
    }
  }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const cheis = new Dog('cheis', 'nico');
cheis.move();
console.log(cheis.greeting());
cheis.woof(5);
console.log(cheis.owner);
