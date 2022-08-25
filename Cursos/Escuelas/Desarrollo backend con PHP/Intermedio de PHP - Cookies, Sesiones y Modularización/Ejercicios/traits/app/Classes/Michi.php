<?php

namespace App\Classes;

/**
 * Para usar un traits debemos decirle a la clase que use el namespace de ese traits.
 */
use App\Traits\Pet; // ---> Aquí únicamente se realiza la importación, aún no se está usando.

class Michi
{
    use Pet; // ---> Aquí usamos el Traits.

    public function sayMeow()
    {
        return "Meow! ";
    }

    public function scratch()
    {
        return "🐱";
    }
}
