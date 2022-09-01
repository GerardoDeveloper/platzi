const os = require('os');

console.log(os.arch()); // --> La arquitectura.
console.log(os.platform()); // --> La plataforma.

console.log(os.cpus().length); // --> Muestra la cantidad de core del procesador.

console.log(os.constants); // --> Muestra las constantes del sistema.

const SIZE = 1024;
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }

console.log(os.freemem()); // --> Muestra el espacio en memoria en bytes.
console.log(kb(os.freemem())); // --> Muestra el espacio en memoria en kilobytes.
console.log(mb(os.freemem())); // --> Muestra el espacio en memoria en megabytes.
console.log(gb(os.freemem())); // --> Muestra el espacio en memoria en gigabytes.

console.log(gb(os.totalmem())); // --> Muestra el espacio total de memoria en la máquina.

console.log(os.homedir()) // --> Muestra el directorio raíz.
console.log(os.tmpdir()) // --> Muestra el directorio temporal.

console.log(os.hostname()); // --> Nos muestra el nombre del hostname (nombre de la máquina).
console.log(os.networkInterfaces()); // --> Nos muestra todas las interfaces de red.
