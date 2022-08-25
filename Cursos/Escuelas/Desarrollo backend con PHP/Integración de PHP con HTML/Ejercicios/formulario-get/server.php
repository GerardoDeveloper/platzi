<?php

// Validamos por GET los datos recibidos.
$nombre = $_GET["nombre"];
$edad = $_GET["edad"];

echo "El usuario $nombre tiene $edad años.";
