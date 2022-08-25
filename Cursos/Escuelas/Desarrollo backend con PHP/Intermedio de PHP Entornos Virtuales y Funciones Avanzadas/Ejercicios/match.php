<?php

/**
 * Obtiene el nombre completo del país según lo especificado por parámetro.
 *
 * NOTA: Se utiliza 'switch'que es compatible con todas las versiones de PHP.
 *
 * @param string $country Nombre corto del país.
 * @return string
 */
function get_country_name_switch($country) {

    $name = "";

    switch ($country) {
        case 'MX':
            $name = "México";
            break;

        case 'COL':
            $name = "Colombia";
            break;

        case 'EUA':
            $name = "Estados Unidos Americanos";
            break;

        default:
            $name = "Lo siento, no conozco ese país";
            break;
    }

    return $name;
}

// Imprimimos el resultado.
echo get_country_name_switch("MX") . PHP_EOL;

/**
 * Obtiene el nombre completo del país según lo especificado por parámetro.
 *
 * NOTA: Se utiliza 'match' el cuál se incorporó a partir de la versión 8 de php.
 *
 * @param string $country Nombre corto del país.
 * @return string
 */
function get_country_name_match($country) {

    return match($country) {
        "MX" => "México",
        "COL" => "Colombia",
        "EUA" => "Estados Unidos Americanos",
        default => "Lo siento, no conozco ese país"
    };

}

// Imprimimos el resultado.
echo get_country_name_match("LKASJDKLASDNLAS") . PHP_EOL;