export class MyDate {
  constructor(
    public year: number = 1993,
    private _month: number = 7,
    private _day: number = 9
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
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
      this._month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

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

  get month() {
    return this._month;
  }

  /**
   * Es un método set, el cuál es una función que modifica el valor interno de las propiedades privadas de la clase.
   * ? Por ésto se deben colocar un _ (guión bajo) delante a las variables privadas, para que no ocurra un error.
   * ! NOTA: Los métodos 'set' no pueden retornar nada, es decir, son por definición 'void', de lo contrario se generará un error.
   */
  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('month out of range');
    }
  }
}

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());
myDate.month = 4;
console.log('run', myDate.month);
myDate.month = 78;
console.log('esto no debe aparecer', myDate.month);