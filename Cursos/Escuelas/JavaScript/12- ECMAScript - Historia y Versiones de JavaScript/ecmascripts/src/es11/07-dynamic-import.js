const button = document.getElementById("btn");

button.addEventListener("click", async () => {
  const module = await import("./module.js"); // Importamos el modulo dinĂ¡micamente.
  console.log(module);
  module.hello(); // Hello word
});