const users = {
  gndx: {
    country: "MX"
  },
  ana: {
    country: "CO"
  }
}

/**
 * El siguiente código devolverá 'undefined'
 * pero no rompera la appen caso de que no se
 * encuentren algunas de las propiedades.
 */
console.log(users?.bebeloper?.country);