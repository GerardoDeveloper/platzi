<?php

// Michi 1: 8
// Michi 2: 5
// Michi 3: 10
// Michi 4: 7
// Michi 5: 4

$michi = 5;

switch ($michi) {
    case 1:
        echo "Su número favorito es el 8";

        break;
    case 2:
        echo "Su número favorito es el 5";

        break;
    case 3:
        echo "Su número favorito es el 10";

        break;
    case 4:
        echo "Su número favorito es el 7";

        break;
    case 5:
        echo "Su número favorito es el 4". PHP_EOL;

        break;
    default:
        echo "Ese michi no existe";
}
