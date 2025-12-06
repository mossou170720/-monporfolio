<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags($_POST['name']);
    $email = strip_tags($_POST['email']);
    $message = strip_tags($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'mossoumoss@gmail.com';
        $mail->Password = 'TON_MOT_DE_PASSE_APP'; // mot de passe d’application Gmail
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom($email, $name);
        $mail->addAddress('mossoumoss@gmail.com');

        $mail->isHTML(true);
        $mail->Subject = 'Message depuis le portfolio';
        $mail->Body    = "Nom : $name<br>Email : $email<br>Message : $message";

        $mail->send();
        echo 'Message envoyé avec succès !';
    } catch (Exception $e) {
        echo "Erreur, le message n'a pas pu être envoyé. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Méthode non autorisée.";
}
?>