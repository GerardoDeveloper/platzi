<?php

/**
 * Imprime una frase random.
 *
 * @return string
 */
function fraseRandom()
{
    $numberRandom = rand(1, 5); // Obtenemos un número random entre 1 y 5.
    $frase = "";

    switch ($numberRandom) {
        case 1:
            $frase = "Nunca pares de aprender" . PHP_EOL;
            break;
        case 2:
            $frase = "Amo programar" . PHP_EOL;
            break;
        case 3:
            $frase = "Amo PHP" . PHP_EOL;
            break;
        case 4:
            $frase = "La tecnoligía es el futuro." . PHP_EOL;
            break;
        case 5:
            $frase = "Las empresas te están esperando." . PHP_EOL;
            break;
    }

    return $frase;
}

// Imprimimos la frase random que retorna la función.
echo fraseRandom() . PHP_EOL;
