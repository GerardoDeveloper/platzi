<?php

// Validamos sí el dato o variable está declarada y además validamos sí está vacía.
if (isset($_POST["nombre"]) && !empty($_POST["nombre"])) {
    echo "¡Hola " . $_POST['nombre'] . "!";
} else {
    echo "No mandaste nada 😾";
}

// Validamos sí sólo el dato o variable está declarada.
if (isset($_POST["form"])) {
    echo "Todo el formulario fue mandado";
} else {
    echo "No se mando ningun formulario";
}
