<?php
/**
 * Para que se redirija a una dirección URL, se debe colocar el formato completo de la misma.
 */
header("location: https://platzi.com");

/**
 * Se debe colocar siempre como buena práctica 'exit' o 'die()' cuando se usa la redirección
 * para que los software automátizados lo detecten y no sigan leyendo el resto del archivo.
 */
exit;

/*===============================================NO HACER NUNCA ESTE TIPO DE REDIRECCIÓN===============================================*/
header("location: index.php");

/**
 * Esto generará una redirección infinita arrojando como excepción ERR_TOO_MANY_REDIRECTS en el navegador.
 */
