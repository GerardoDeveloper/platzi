export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  /**
   * Imprime el formato de fechas.
   * @returns
   */
  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
}

// Instacia de la clase
const myDate = new MyDate(1993, 7, 9);
console.log(myDate.printFormat());

myDate.add(3, 'days');
console.log(myDate.printFormat());

myDate.add(1, 'months');
console.log(myDate.printFormat());

// Accediendo a las propiedades
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);
