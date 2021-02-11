<?php
  $destinatario= 'bere24school@gmail.com';
  $asunto= $_POST['asunto_message'];
  $mensaje= $_POST['mensaje-text'];
  $email_emisor= $_POST['email_emisor'];
  
  $header= "Enviado desde la página web de Xochitl";
  $mensaje_completo = $mensaje . "\nCorreo enviado de: " .$email_emisor;
  
  mail($destinatario,$asunto,$mensaje,$header);
  
  echo "<script> alert('Correo enviado de manera exitosa')</script>";
  echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";


?>
