// var _ = require('lodash'); // Importación de librerías que no tienen soporte para TS.
import _ from 'lodash'; // Traducción para las librerías que no tienen soporte de TS. NOTA: El editor nos sugiere instalar un sistema de tipos, lo cual se puede hacer de forma automática (presionando en el foquito) o manual (desde la terminal)

const data = [
  {
    username: 'Gerardo',
    role: 'Admin',
  },
  {
    username: 'Ariel',
    role: 'Customer',
  },
  {
    username: 'Federica',
    role: 'Customer',
  },
  {
    username: 'Daiana',
    role: 'Admin',
  },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
