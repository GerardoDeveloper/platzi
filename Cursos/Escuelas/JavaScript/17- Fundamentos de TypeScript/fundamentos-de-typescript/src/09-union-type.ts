(() => {
  let userId: string | number; // La variable puede ser de tipo string o number.
  userId = 1212;
  userId = 'asasa';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`); // Activa todos los métodos y propiedades del tipo string.
    } else {
      console.log(`number ${myText.toFixed(1)}`); // Activa todos los métodos y propiedades del tipo number.
    }
  }
  greeting('Nicolas');
  greeting(12.1212121212);
})();
