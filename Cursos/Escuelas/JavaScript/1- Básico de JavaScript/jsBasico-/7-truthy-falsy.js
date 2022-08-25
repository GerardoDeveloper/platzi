/**
 * Truthy y Falsy: Son valores que son verdaderos o falsos.
 */

/* ===========================Falsy (False)======================= */

Boolean("") // = false
Boolean(0) // = false
Boolean(null) // = false
Boolean(NaN) // = false
Boolean(false) // = false
Boolean(undefined) // = false

/* ===========================Truthy (true)====================== */

Boolean("hola") // = true ---> NOTA: Se debe tener cuidado con los espacios, porque también da 'true'
Boolean(30) // = true
Boolean({ a: 1 }) // = true
Boolean([1, 3]) // = true
Boolean(true) // = true
Boolean(function a() { }) // = true
más

/**
 * Para que podemos utilizar esto, para generar condiciones segun el valor que demos.
 */

if (InputEvent.value) {
    // ...
}
