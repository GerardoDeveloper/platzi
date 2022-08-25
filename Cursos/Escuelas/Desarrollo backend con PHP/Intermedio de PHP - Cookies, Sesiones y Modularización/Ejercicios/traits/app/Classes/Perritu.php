<?php
namespace App\Classes;

/**
 * Para usar un traits debemos decirle a la clase que use el namespace de ese traits.
 */
use App\Traits\Pet; // ---> Aquí únicamente se realiza la importación, aún no se está usando.

class Perritu
{
  use Pet; // ---> Aquí usamos el Traits.

  public function bark() {
    return "Woof!";
  }

  public function drool() {
    return "babeando 🐶";
  }
}

?>