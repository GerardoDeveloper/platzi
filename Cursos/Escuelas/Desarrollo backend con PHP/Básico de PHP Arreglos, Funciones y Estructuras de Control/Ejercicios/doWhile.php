<?php

// Usuarios ya regístrados.
$arrayUserNames = ["pepe", "carlos", "juan"];

do {
  //Pedimos al usuario que ingrese su nombre de usuario.
  $userName = readline("Por favor, ingresa tú nombre de usuario: ");

  // Verificamos que el nombre que el usuario ingreso, está o no en el arreglo.
  $isInArray = in_array($userName, $arrayUserNames);
} while ($isInArray);