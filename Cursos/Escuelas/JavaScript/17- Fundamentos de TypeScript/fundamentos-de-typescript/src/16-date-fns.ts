import { subDays, format } from "date-fns"; // Sí la librería no tiene soporte para TS, el editor nos dará una advertencia.

/**
 * Referencias de los meses en js
 *
 * 0: Enero
 * 1: Febrero
 * ...
 * 11: Diciembre
 */
const date = new Date(1998, 1, 28);
const rta = subDays(date, 30);
const str = format(date, 'yyyy/MM/dd');
console.log(`str: ${str}`);
