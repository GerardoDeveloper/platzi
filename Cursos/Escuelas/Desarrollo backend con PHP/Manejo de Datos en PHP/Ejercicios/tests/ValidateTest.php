<?php

use PHPUnit\Framework\TestCase;
use App\Validate;

/**
 * Esta es la clase donde se realizan todas las pruebas
 */
class ValidateTest extends TestCase
{
  public function test_email(){
    //En caso de que se ingrese el email correctamente devuelve true.
    $email = Validate::email('gerardo@gmail.com');
    $this->assertTrue($email);

    //En caso de que se ingrese mal el email devuelve false.
    $email = Validate::email('gerardo@@gmail.com');
    $this->assertFalse($email);
  }

  public function test_url(){
    //En caso de que se ingrese el email correctamente devuelve true.
    $email = Validate::url('www.platzi.com');
    $this->assertTrue($email);

    //En caso de que se ingrese mal el email devuelve false.
    $email = Validate::url('http:platzi.com');
    $this->assertFalse($email);
  }
}
