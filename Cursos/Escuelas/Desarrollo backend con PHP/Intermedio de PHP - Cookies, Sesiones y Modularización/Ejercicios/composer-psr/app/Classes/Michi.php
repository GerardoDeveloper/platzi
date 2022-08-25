<?php

/**
 * Para que PSR-4 autocargue las clases y los namespace:
 *  - El nombre de la clase debe de ser igual al nombre del archivo.
 *  - El namespace debe ser la ruta donde está el archivo.
 * De otro modo no funcionará.
 */
namespace App\Classes;

class Michi {

    protected $name;
    protected $color;
    protected $age;

    function __construct($name, $color, $age) {
        $this->name = $name;
        $this->color = $color;
        $this->age = $age;
    }

    public function getName() {
        return $this->name;
    }

    public function getColor() {
        return $this->color;
    }

    public function getAge() {
        return $this->age;
    }

    public function sayMeow() {
        return "Meow!";
    }

}