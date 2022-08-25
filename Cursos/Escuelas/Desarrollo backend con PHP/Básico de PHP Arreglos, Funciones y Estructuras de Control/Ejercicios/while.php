<?php

$number = 1000;
$counter = 0;

$tiempo_inicial = microtime(true);
while ($counter <= $number) {
    echo "contador: $counter" . PHP_EOL;
    $counter++;
}
$tiempo_final = microtime(true);
$tiempo = $tiempo_final - $tiempo_inicial;

echo "El tiempo de ejecución del archivo ha sido de " . $tiempo . " segundos";
