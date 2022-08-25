<?php
require "vendor/autoload.php";
use PHPMailer\PHPMailer\PHPMailer;

/**
 * Realiza en envío de email.
 *
 * @param string $subject Destinatarios del email.
 * @param string $body    Cuerpo del email.
 * @param string $email   Dirección de email.
 * @param string $name    Nombre del remitente.
 * @param boolean $html   Flag que determina si es un formato HTML o no.
 * @return void
 */
function sendMail($subject, $body, $email, $name, $html = false)
{
    // Configuración inicial de nuestro servidor de correos
    $phpMailer = new PHPMailer();
    $phpMailer->isSMTP();
    $phpMailer->Host = 'smtp.gmail.com';
    $phpMailer->SMTPAuth = true;
    $phpMailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $phpMailer->Port = 465; // ---> Utilizar este puerto es de buena práctica porque contiene seguridad para el envío de email.
    $phpMailer->Username = 'don.michi.michisancio@gmail.com';
    $phpMailer->Password = 'amffkjcdoxxbcvig';

    //  Añadiendo destinatarios
    $phpMailer->setFrom('mark@facebook.com', 'Mark Zuckerberg');
    $phpMailer->addAddress($email, $name);

    // Definiendo el contenido de mi email
    $phpMailer->isHTML($html); //Set email format to HTML
    $phpMailer->Subject = $subject;
    $phpMailer->Body = $body;

    // Mandar el correo
    $phpMailer->send();
}
