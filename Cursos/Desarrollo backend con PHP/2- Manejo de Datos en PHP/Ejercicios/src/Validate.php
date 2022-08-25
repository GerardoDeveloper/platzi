<?php

namespace App;

/**
 * Clase que se utiliza para validar la instroducción de un email correctamente.
 */
class Validate
{
  public static function email($value) {
    $validate_email = (bool) filter_var($value, FILTER_VALIDATE_EMAIL);

    return $validate_email;
  }

  public static function url($value) {
    $validate_url = (bool) filter_var($value, FILTER_VALIDATE_URL);

    return $validate_url;
  }
}
