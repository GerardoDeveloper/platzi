<?php

namespace App\Traits;

/**
 * La sintaxis de un traits es muy similar a una clase.
 *
 * NOTA: Los traits no se pueden instanciar.
 */
trait Pet
{
    /**
     * Aquí dentro se puede programar como si fuera una clase común y corrientem,
     * es decir, con métodos y propiedades.
     */

    public function play()
    {
        return "Estoy jugando...";
    }

    public function sleep()
    {
        return "Estoy durmiendo...";
    }
}
