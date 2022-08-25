
<?php

/**
 * En la variable superglobal $_FILES se encuentran los archivos que se mandan desde el frontend.
 */
echo "<pre>";
var_dump($_FILES);
echo "</pre>";

$basename = $_FILES["image"]["name"];

echo $basename;