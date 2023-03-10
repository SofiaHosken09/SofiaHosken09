<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
  <?php
   
   function apresentar($nome, $idade, $altura) {
       return "Ola meu nome e ". $nome . "tenho" . $idade . "e tenho de altura". $altura;

   }
    echo apresentar("sofia", "18", "1.70");

  ?>
<h1> <?php

$nome = "sofia";
$idade = "18";
$altura = "1.70";

echo apresentar($nome, $idade,$altura);

?>



</h1>

</body>
</html>,
