//console.log(window); // navegador, pero no es accesible en node.
console.log(global);  // node, pero no es accesible desde el navegador.

//console.log(self);// webworker
console.log(globalThis); // Para ambos, es decir, es accesible tanto desde el navegador como node.