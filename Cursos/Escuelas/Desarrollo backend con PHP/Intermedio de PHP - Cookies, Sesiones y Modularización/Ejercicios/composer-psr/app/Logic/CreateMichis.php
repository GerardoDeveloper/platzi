<?php

/**
 * Para que composer carge un archivo individual, se deben cumplir las siguintes condiciones:
 * ? - Poner las rutas de las carpetas y luego poner el mismo nombre que el archivo.
 * ? - Para que sea cargado un archivo individual, dentro de 'composer.json' en la propiedad 'autoload' se le debe agregar una propiedad llamada 'files'
 *
 * Ejemplo de autoload:
 *
 * "autoload": {
 *   "files": [
 *     "app/Logic/CreateMichis.php" <--- aquí van las listas de archivos que se desean autocargar.
 *   ],
 *   "psr-4": {
 *     "App\\": "app/" <--- aquí va la carpeta raíz donde se encuentran todos los archivos de nuestro sistema.
 *   }
 * }
 *
 * ! Luego de hacer todo lo anterior, nos vamos a la consola y tipiamo el comando 'composer dump'
 */


// ? Ejemplo de importación de namespace.
use App\Classes\Michi;
use App\Classes\MichisAdoptados;

function createMichis()
{
    $mr_michi = new Michi("Mr. Michi", "Blanquito", 16);
    $mr_michi_adopted = new MichisAdoptados("Mr. Michi", new DateTime("2022-04-16"), "Retaxito");

    echo $mr_michi->sayMeow() . " Me adoptó {$mr_michi_adopted->getAdopted_by()}";
}
