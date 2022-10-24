const user = {
  username: "gndx",
  age: 34,
  coutry: "CO"
};

const { username, ...values } = user;
console.log(username); // gndx
console.log(values); // { age: 34, coutry: 'CO' }