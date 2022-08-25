<?php

function caminito2() {
    return 20 / 0;
}

function caminito() {
    return caminito2();
}

function division() {
    return caminito();
}

try {
    $resultado = division();
    echo $resultado;

} catch (Throwable $e) {

    // echo $e->getMessage(); // Obtiene el mensaje del error.
    // echo $e->getCode(); // Obtiene el código del error.
    // echo $e->getFile(); // Obtiene la ruta del archivo del error.
    // echo $e->getLine(); // Obtiene el número de línea en el que ocurrio el error.

    echo "<pre>";
    var_dump($e->getTrace()); // Obtiene la cadena de ejecución para que el error ocurriera.
    echo "</pre>";

}