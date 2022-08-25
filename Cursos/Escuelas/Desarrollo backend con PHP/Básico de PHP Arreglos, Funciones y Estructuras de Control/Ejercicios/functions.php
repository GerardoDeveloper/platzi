<?php
/* ===========================Función sin parámetros=========================== */

/**
 * Obtiene un número random, es decir, un número aleatorio.
 *
 * @return int
 */
function getNumberRandom() {
  $numberRandom = rand(0, 10);

  return $numberRandom;
}

echo "Número 1: " .  getNumberRandom() . PHP_EOL;

/* =================================Función con parámetros================================= */

/**
 * Obtiene un número random, es decir, un número aleatorio.
 *
 * @param integer $min Número minímo.
 * @param integer $max Número máximo.
 * @return int
 */
function getNumberRandomTwho($min, $max) {
  $numberRandom = rand($min, $max);

  return $numberRandom;
}

echo "Número 2: " .  getNumberRandomTwho(0, 20) . PHP_EOL;

/* ===========================Función con parámetros por default=========================== */

/**
 * Obtiene un número random, es decir, un número aleatorio.
 *
 * @param integer $min Número minímo.
 * @param integer $max Número máximo.
 * @return int
 */
function getNumberRandomTwhoThree($min = 1, $max = 10) {
  $numberRandom = rand($min, $max);

  return $numberRandom;
}

/* ======Función con parámetros utilizabdo el operador de propagación (...) o array an unpacking====== */

$arreglo1 = [1, 2, 3];
$arreglo2 = [4, 5, 6];

// Fucionamos los dos array con el operador '...' resultando en un nuevo array.
$resultado = [...$arreglo1, ...$arreglo2];

echo "resultado: " . PHP_EOL;
var_dump($resultado);

/* ========================Utilizando array an unpacking en funciones======================== */

function suma($a, $b) {
  $resultado = $a + $b;

  echo "El resultado es: $resultado" . PHP_EOL;;
}

$numeros = [2, 3];

suma(...$numeros); // --> Lo que ocurre aquí esencialmente es que el operador (...) desempaqueta el contenido del array y lo coloca automáticamente en los parámetros $a y $b de la función suma.

/**
 * Realiza la suma de tantos números como parámetros reciba.
 *
 * @param integer ...$params Número de parámetros infinitos.
 * @return string
 */
function sumaInfinita(...$params) {
  $suma = 0;
  foreach ($params as $key => &$numero) {
    $suma += $numero;
  }

  echo "La suma es es: $suma" . PHP_EOL;;
}

sumaInfinita(1);
sumaInfinita(1, 2);
sumaInfinita(2, 10, 15);
sumaInfinita(5, 50, 74, 100);