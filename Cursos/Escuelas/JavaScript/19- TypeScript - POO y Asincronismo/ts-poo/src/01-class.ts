const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

/**
 * 0 = Enero
 * 1 = Frebrero
 * ...
 * 11 = Diciembre
 */
const date2 = new Date(1993, 1, 12);
date2.getHours();
date2.getTime();
date2.toISOString();

console.log(date);
console.log(date2);

// Clase personalizada
class MyDate {
  // Propiedades
  year: number;
  month: number;
  day: number;

  // Constructor
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

// Instancia de la clase
const myDate = new MyDate(2021, 3, 13);
console.log(myDate);
