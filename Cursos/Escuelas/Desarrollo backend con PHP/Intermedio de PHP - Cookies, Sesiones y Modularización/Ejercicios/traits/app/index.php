<?php
require_once __DIR__ . "/../vendor/autoload.php";

use App\Classes\Perritu;
use App\Classes\Michi;

$firulais = new Perritu();
$mrMichi = new Michi();

echo $firulais->bark() . PHP_EOL;
echo $firulais->play() . PHP_EOL;

echo $mrMichi->sayMeow();
echo $mrMichi->sleep();
?>