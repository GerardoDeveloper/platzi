// archivoA.js
const hello = () => {
  console.log("Hello!")
}
export default hello;


// archivoB.js
import hello from "./module.js"; /** <--- Es importante colocar la extensión del modulo, sino obtendremos un error de tipo 'node: internal/errors: Cannot find module'
                                          En algunos casos podemos omitirlo cuando trabajemos con herramientas no robustas o framework y librerias, que ya tienen por
                                          defecto la configuración para poder detectar las extenciones.
                                  */

hello();
