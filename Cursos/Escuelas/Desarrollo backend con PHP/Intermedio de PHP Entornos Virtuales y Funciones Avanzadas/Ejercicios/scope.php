<?php

$outside_variable = "Esto es una variable global";

function my_function1()
{
    global $outside_variable;

    echo $outside_variable;
}

my_function1();

$outside_variable = "Esto es una variable global";

function my_function2()
{
    /**
     * La variable súperglobal $GLOBALS, el cuál es un array asociativo,
     * Nos permite ver todas las variables globales que existen.
     */
    echo $GLOBALS["outside_variable"];

}

my_function2();

echo "\n";
