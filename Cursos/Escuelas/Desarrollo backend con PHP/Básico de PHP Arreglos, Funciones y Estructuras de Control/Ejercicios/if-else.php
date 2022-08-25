<?php

$asientoDisponibles = 5;
$flag = false;

// Preguntamos sí hay asientos disponibles.
if ($asientoDisponibles > 0) {
    echo "Puedes ver las pelicula.";
} else if ($flag) { // Hacemos utra evaluación.
    echo "ok.";
} else {
    echo "No se encuentran asientos disponibles";
}
