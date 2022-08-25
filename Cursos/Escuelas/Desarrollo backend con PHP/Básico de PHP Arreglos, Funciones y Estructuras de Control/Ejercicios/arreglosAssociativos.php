<?php

// Creamos un arreglo associativo para edades.
$edades = array(
    "Carlos" => 20,
    "Mr.Michi" => 18,
    "Juan" => 40,
);

// Imprimimos el valor del indice 'Carlos'
echo "La edad de carlos es: {$edades["Carlos"]}\n";

// Creamos un arreglo associativo para precios de cafes
$cafes = array(
    "Capuchino" => 50,
    "Latte" => 40,
    "Americano" => 70,
);

// Imprimimos el valor del indice 'Americano'
echo "El precio del cafe es de {$cafes["Americano"]}\n";

// Array multimecional
$personas = array(
    "Carlos" => array(
        "edad" => 20,
        "apellido" => "Ortiz",
    ),
    "Mr.Michi" => array(
        "edad" => 10,
        "apellido" => "Michisancio",
    ),
);

echo "La información de Mr. Michi es: edad: {$personas["Mr.Michi"]["edad"]}\n";