// Antes de ES6
function newUser(name, age, country) {
  var name = name || 'Gerardo';
  var age = age || 34;
  var country = country || 'ARG';
  console.log(name, age, country);
}

newUser();
newUser('Estebanquito', 20, 'CO');

// ES6
function newAdmin(name = 'Gerardo', age = 34, country = 'ARG') {
  console.log(name, age, country);
}

newAdmin();
newAdmin('Estebanquito', 20, 'CO');