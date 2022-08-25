<?php

class Michi
{

    // Propiedades
    protected $name;
    protected $color;
    protected $age;

    /**
     * Constructor
     *
     * @param string $name Nombre del michi.
     * @param string $color Color del michi.
     * @param integer $age Edad del michi.
     */
    public function __construct($name, $color, $age)
    {
        $this->name = $name;
        $this->color = $color;
        $this->age = $age;
    }

    /**
     * Obtiene el nombre del michi.
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Obtiene el color del michi.
     *
     * @return string
     */
    public function getColor()
    {
        return $this->color;
    }

    /**
     * Obtiene la edad del michi.
     *
     * @return integer
     */
    public function getAge()
    {
        return $this->age;
    }

    /**
     * Obtiene el saludo del michi.
     *
     * @return string
     */
    public function sayMeow()
    {
        return "Meow!";
    }

}
