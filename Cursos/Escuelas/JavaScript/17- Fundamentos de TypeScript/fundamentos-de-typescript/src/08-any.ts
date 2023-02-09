(() => {

  // Útilizar any es de muy mala práctica, salvo excepción, cuando se este migrando desde js a ts.
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'Hola';

  // 1ra forma de casting
  const rta = (myDynamicVar as string).toLowerCase(); // Casting to string
  console.log(rta);

  myDynamicVar = 1212;

  // 2da forma de casting
  const rta2 = (<number>myDynamicVar).toFixed(); // Casting to number
  console.log(rta2);
})();
