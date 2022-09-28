const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() { // function interna
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() { // funcion interna de parent
      console.log(inner, myNumber, myGlobal);
    }

    return child();
  }

  return parent();
}

myFunction();

/* ================================================================= */
function greeting() {
  let username = 'Oscar';

  function displayUserName() {
    return `Hello ${username}`;
  }
  return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());