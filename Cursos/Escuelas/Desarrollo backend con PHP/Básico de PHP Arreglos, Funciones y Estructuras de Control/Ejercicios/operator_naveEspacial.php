<?php

$preciosDeCafes = [10, 15, 78, 65, 55, 99];

/**
 * En PHP podemos ordenar un arreglo de números con la función 'usort()',
 * pero para poder darle un uso al operador de nave espacial, se usará
 * la función 'usort()' la cúal recibe un callback como 2do parámetro que
 * determinará como ordenar los números.
 */
usort($preciosDeCafes, function ($currentNumber, $numberNext) {

    /**
     * El operador de nave espacial <=> permite comparar dos números y retornar -1, 0 y 1
     * sí el primer número es menor, igual o mayor al segundo respectivamente. Es decír:
     *
     * Sí $currentNumber <  $numberNext  = -1
     * Sí $currentNumber == $numberNext  =  0
     * Sí $currentNumber >  $numberNext  =  1
     */
    $result = $currentNumber <=> $numberNext;

    return $result;
});

var_dump($preciosDeCafes);