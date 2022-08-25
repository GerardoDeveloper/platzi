<?php

// Sacamos el tamaño de un arreglo.
$edades = [10, 50, 45, 75];
$lengthArrayEdades = count($edades); // --> Saca el tamaño de un arreglo.

echo "tamaño de array edades: " .  $lengthArrayEdades . "\n";

// Agregando nuevos elementos al final de un arreglo.
array_push($edades, 25, 63, 10);
echo "Nuevos elementos de edades: \n";
var_dump($edades);

// Verificamos si una variable es un arreglo.
$isArray = is_array($edades);

// Convertimos un string a un arreglo.
$listFrutas = "Banana,Peras,Manzanas";
$arrayFrutas = explode(",", $listFrutas);
echo "Array frutas:\n";
var_dump($arrayFrutas);

// Convertimos un array en un string.
$listArrayFrutas = ["Banana","Peras","Manzanas"];
$stringFrutas = implode(",", $listArrayFrutas);
echo "frutas: {$stringFrutas}";