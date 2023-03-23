<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Cambie la dirección de correo electrónico a la que desea enviar el correo electrónico
  $to = "tudirecciondecorreo@ejemplo.com";
  $body = "De: $name\nCorreo electrónico: $email\nAsunto: $subject\nMensaje:\n$message";

  // Envía el correo electrónico
  if (mail($to, $subject, $body)) {
    echo "El correo electrónico se envió correctamente.";
  } else {
    echo "No se pudo enviar el correo electrónico.";
  }
}
?>
