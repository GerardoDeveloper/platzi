const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

const rta = users.map((user) => user.attributes).flat();
console.log("rta", rta); // [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

/**
 * flatMap, consiste en la combinación de los métodos map y flat.
 * Primero realiza la iteración de los elementos del array (como si fuera map), y
 * después los aplana en una sola profundidad (como si fuera flat).
 *
 * NOTA: flatMap solo permite un nivel de aplastamiento.
 */
const rta2 = users.flatMap((user) => user.attributes);
console.log("map-flat", rta); // [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]
console.log("rta2", rta2); // [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

const rta3 = Object.values(calendars).flatMap(item => {
  return item.map(date => date.startDate);
});

console.log(rta3);