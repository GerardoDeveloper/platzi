const string = "JavaScript es un maravilloso lenguaje de programación, JavaScript";

const replacedString1 = string.replace("JavaScript", "TypeScript");
const replacedString2 = string.replaceAll("JavaScript", "TypeScript");

console.log(replacedString1); // --> TypeScript es un maravilloso lenguaje de programación, JavaScript
console.log(replacedString2); // --> TypeScript es un maravilloso lenguaje de programación, TypeScript