<?php
echo "<pre>";
var_dump($GLOBALS); // Nos brinda información de todas las variables globales que existen.
echo "</pre>";

$michi = "que bonito michi";
echo "<pre>";
var_dump($_GET);
echo "</pre>";

$michi = "que bonito michi";

function local_scope()
{
    echo $_GET["michi"];
    // echo $michi; // --> Arroja un error por su scope.

}

local_scope();
