const { sum, multiply, devide } = require("./02-math")

/**
 * test("-->Aquí va lo que estamos probando o el ecenario de pruebas<--")
 */
test("adds 1 + 3 should be 4", () => {
    const response = sum(1, 3);

    /**
     * expect(), es quién nos soluciona la hipotesis o lo que yo quiero asertar, sí es correcto o no.
     * toBe(), es el valor final o respuesta que debe dar la función.
     */
    expect(response).toBe(4);
});

test("should be 4", () => {
    const response = multiply(1, 4);

    /**
     * expect(), es quién nos soluciona la hipotesis o lo que yo quiero asertar, sí es correcto o no.
     * toBe(), es el valor final o respuesta que debe dar la función.
     */
    expect(response).toBe(4);
});

test("should divide", () => {
    const response = devide(6, 3);

    /**
     * expect(), es quién nos soluciona la hipotesis o lo que yo quiero asertar, sí es correcto o no.
     * toBe(), es el valor final o respuesta que debe dar la función.
     */
    expect(response).toBe(2);

    // ? En una misma prueba puedo resolver varios expect.

    const response2 = devide(5, 2);

    expect(response).toBe(2);
});

test("should divide for zero", () => {
    const response = devide(6, 0);

    /**
     * expect(), es quién nos soluciona la hipotesis o lo que yo quiero asertar, sí es correcto o no.
     * toBe(), es el valor final o respuesta que debe dar la función.
     */
    expect(response).toBeNull();
});