<?php

$name = $_POST['name'];
$email = $_POST['email'];
$comment = $_POST['comment'];
$to = "abdullokh.dev@mail.ru";
$subject = "Mail From website";
$tema = $name;
$message = "Name = " . $name . " Email = " . $email . " Text = " . $comment;
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
mail($to, $tema, $message, $headers);
header('Location: ' . $_SERVER['HTTP_REFERER']);
?>
