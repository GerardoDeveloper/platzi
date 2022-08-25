<?php

// Funcionan para leer variables del ámbito global.
$cajero = 10;
$add_cajero = fn($add) => $cajero + $add;
echo $add_cajero(20) . PHP_EOL;

// No funcionan para escribir variables en el ámbito global.
$cajero = 10;
$add_cajero = fn($add) => $cajero += $add;
$add_cajero(20);
$add_cajero(40);
$add_cajero(4);
echo $cajero . PHP_EOL; // Imprimirá 10.

$edades = [5, 21, 50, 9, 18];

// Funcion anónima.
$mayores_de_edad = array_filter($edades, function ($current) {
    return $current >= 18;
});

// Arrow function.
$mayores_de_edad = array_filter($edades, fn($current) => $current >= 18);

print_r($mayores_de_edad) . PHP_EOL;
