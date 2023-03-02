export class MyDate {
  constructor(
    public year: number = 1993,
    public month: number = 7,
    private _day: number = 9 // Sí se tienen variables privadas con 'get' y 'set', se debe colocar un _ (guión bajo) para que no se produscan errores en los métodos get y set.
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  /**
   * Es un método get, el cuál es una función que accede al valor interno de las propiedades privadas de la clase.
   * ? Por ésto se deben colocar un _ (guión bajo) delante a las variables privadas, para que no ocurra un error.
   */
  get day() {
    // code
    return this._day;
  }

  /**
   * Valida sí es un año biciesto.
   */
  get isLeapYear(): boolean {
    // Es biciesto sí el año es divicible por 400
    if (this.year % 400 === 0) return true;

    // No es biciesto sí el año es divicible por 100
    if (this.year % 100 === 0) return false;

    // Sí el año es divisible por 4, es un año bisiesto
    return this.year % 4 === 0;
  }

  /**
   * ! ERROR! Un método 'get' debe retornar un valor siempre.
   */
  // get myReturn(): void {
  // code
  // }
}

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());
// console.log(myDate.getDay());
console.log(myDate.day);
console.log('1993', myDate.isLeapYear);

const myDate2 = new MyDate(2000, 7, 10);
console.log('2000', myDate2.isLeapYear);

const myDate3 = new MyDate(2001, 7, 10);
console.log('2001', myDate3.isLeapYear);

const myDate4 = new MyDate(2004, 7, 10);
console.log('2004', myDate4.isLeapYear);
