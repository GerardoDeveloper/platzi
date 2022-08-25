<?php

function michi()
{
    echo "Meow!";
}

function perro()
{
    echo "Woof!";
}

function zorro()
{
    echo "Guaak!";
}

$function = "zorro";

echo $function();

// La salida será 'Guaak!'

// Lo que hace PHP internamente es si llamaramos a nuestra función 'zorro'
echo zorro();
