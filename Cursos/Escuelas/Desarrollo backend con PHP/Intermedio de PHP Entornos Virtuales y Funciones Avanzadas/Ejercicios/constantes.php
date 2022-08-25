<?php

$decision = true;

if ($decision) {
    define("BLOCK_CONSTANT", "Esta constante fue declarada dentro de un if"); // Sí se puede definir dentro de un bloque de código
    const BLOCK_CONSTANT = "Esta constante fue declarada dentro de un if"; // No se puede definir dentro de un bloque de código.
    echo BLOCK_CONSTANT;
}







echo __LINE__;

echo "\n";