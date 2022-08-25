<?php

// Variable original.
$cat = "Meow!";

function make_a_cat_bark(&$cat_dog)
{

    /**
     * Al recibir una variable por referencia '&$cat_dog',
     * modifica el valor de la variable original '$cat'
     */
    $cat_dog = "Woof!";
}

// Llamamos a la función y enviamos el parámetro.
make_a_cat_bark($cat);

echo $cat . PHP_EOL; // Imprimirá 'Woof!'
