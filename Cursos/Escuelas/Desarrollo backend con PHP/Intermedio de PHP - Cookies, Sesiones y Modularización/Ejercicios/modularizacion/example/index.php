<?php

include "constantes.php";
echo PROFESION;

// No importa sí no encuentra el archivo, sólo lanzará un warning y el código seguirá ejecutandoce.
include "constants.php";
echo "Sigue funcionando"; // ---> Esto se imprimirá

// Sí el archivo no se encuentra, la ejecución  del programa se detiene por completo.
require "constants.php";
echo "Ya no funcionar"; // ---> Esto ya no se imprimirá.

// Sí el archivo fue importado más de una vez, se lanzará un warning.
include "constantes.php";
include "constantes.php";
echo PROFESION;

// Sí el archivo ya fue importado, sólo se incluirá una sola vez, la segunda se ignora completamente.
include_once "constantes.php";
include_once "constantes.php";
echo PROFESION;
