<?php

$name = $_POST["nombre"];
$username = $_POST["username"];
$email = $_POST["email"];
$age = $_POST["age"];

$htmlentities = htmlentities($name);
$addslashes = addslashes($username);
$onlywords = preg_replace("/\d/", "", $username);
$onlynumbers = preg_replace("/\D/", "", $username);
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$sanitize_int = filter_var($age, FILTER_SANITIZE_NUMBER_INT);

/*==============================================================================================*/

$is_float = filter_var("0.9", FILTER_VALIDATE_FLOAT, FILTER_FLAG_ALLOW_THOUSAND);

$is_int = filter_var("45", FILTER_VALIDATE_INT);

$is_ip = filter_var("127.0.0.1", FILTER_VALIDATE_IP);

$is_url = filter_var("https://platzi.com", FILTER_VALIDATE_URL);

$is_email = filter_var("mrmichi@michisancio.com", FILTER_VALIDATE_EMAIL);

echo "<pre>";
var_dump($is_float);
var_dump($is_int);
var_dump($is_ip);
var_dump($is_url);
var_dump($is_email);
echo "</pre>";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datos de mi usuario</title>
</head>
<body>

    <p>Nombre:</p>
    <?=$htmlentities?>

    <p>Username:</p>
    <?=$addslashes?>

    <p>Username sin numeros:</p>
    <?=$onlywords?>

    <p>Username sin letras:</p>
    <?=$onlynumbers?>

    <p>Email:</p>
    <?=$email?>

    <p>Edad:</p>
    <?=$sanitize_int?>
</body>
</html>