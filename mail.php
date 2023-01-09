<?php

$recepient = "test@test.ru";
$sitename = "Название сайта";

$phone = trim($_POST["tel"]);
$message = "Заявка с сайта Одноэкранник \n Телефон: $phone ";

$pagetitle = "Заявка с сайта Одноэкранниcz";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>