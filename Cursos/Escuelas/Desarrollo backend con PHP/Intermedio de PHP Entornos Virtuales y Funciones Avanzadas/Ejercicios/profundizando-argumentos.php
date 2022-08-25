<?php

// Parámetros por defecto con array.
function sumar_edades($edades = array(13, 17, 35)) {
  return array_sum($edades);
}

echo sumar_edades(array(5, 10, 15)) . PHP_EOL;

/**
 * Trailing commas implementado en PHP 8
 *
 * NOTA: En versiones anteriores a PHP 8
 * esto generará un error de sintaxis.
 */
function multiplicar($n1 = 1, $n2 = 2, $n3 = 3,) {
  return $n1 * $n2 * $n3;
}

echo multiplicar() . PHP_EOL;

class UnaClaseRandom {}
class OtraClaseRandom {}

// Parámetros por defecto con clases.
function receive_a_class($class = new UnaClaseRandom) {
    echo $class::class;
}

echo receive_a_class(new OtraClaseRandom) . PHP_EOL;

// Orden de los parámetros
function suma($n1, $n2 = 8)
{
    return $n1 + $n2;
}

echo suma(8) . PHP_EOL;
