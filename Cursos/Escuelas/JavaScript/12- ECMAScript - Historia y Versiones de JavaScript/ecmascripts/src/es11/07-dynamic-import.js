const button = document.getElementById("btn");

button.addEventListener("click", async () => {
  const module = await import("./module.js"); // Importamos el modulo dinámicamente.
  console.log(module);
  module.hello(); // Hello word
});