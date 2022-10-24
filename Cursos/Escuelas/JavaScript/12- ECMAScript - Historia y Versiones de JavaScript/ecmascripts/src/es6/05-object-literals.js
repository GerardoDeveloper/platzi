// antes de ES6
function newUser(user, age, country, uId) {
  return {
    user: user,
    age: age,
    country: country,
    uId: uId
  }
}

console.log(newUser("bndx", 24, "COL", 1));

// En ES6, enahced object literals
function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    id: uId
  }
}

console.log(newUser("bndx", 24, "COL", 1));