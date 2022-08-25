<?php

$arrayMichis = array(
  "pepe",
  "tito",
  "pepito",
  "juancito",
  "juan",
);

$lengthArrayMuchis = count($arrayMichis);

for ($i=0; $i < $lengthArrayMuchis; $i++) { 
  echo $i . " - " . $arrayMichis[$i] . "\n";
}