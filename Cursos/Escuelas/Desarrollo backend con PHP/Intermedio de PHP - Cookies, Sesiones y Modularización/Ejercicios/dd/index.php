<?php
require_once __DIR__ . "/PatasDeMichi.php";
require("vendor/autoload.php");

class Michi
{
    protected $patas = [];
    protected $color;

    public function __construct($color)
    {
        $this->color = $color;

        for ($i = 0; $i < 4; $i++) {
            $this->patas[$i] = new PatasDeMichi();
        }
    }
}

$cadaDeMichis = array(
    "nombre" => "Michilango",
    "ubicacion" => array(
        "pais" => "Mexico",
        "ciudad" => "Ciudad de mexico",
    ),
    "numero_de_michis" => 3,
    "michis" => array(
        new Michi("Blanco"),
        new Michi("Negro"),
        new Michi("Gris"),
    ),
);

dd($cadaDeMichis);