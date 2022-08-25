<?php

try {
    $resultado = 20 / 0;
    echo $resultado;
} catch (Throwable $e) {

  /**
   * Aquí atrapamos las excepciones.
   */
    // echo $e->getMessage();
    echo "¡Ups! Algo salió mal con tu división";

}

echo "<br>";

echo "Esto pasa sí o sí";
