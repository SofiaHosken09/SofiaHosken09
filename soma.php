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
    

   

      $num1 = $_POST["num1"];
      $num2 = $_POST["num2"];//retorna string
      
      $valido = true; // estrutura de controle para validar os dados (se forem positivos)
      $num1 = intval($num1); //"10" -> 10 // floatval() :"10.5" -> 10.5
      
      if($num1 <= 0){ // if para validar se o numero e positivo ou negativo
          echo "Numero 1 e invalido<br>"; // não inserir no BD
          $valido =  false; // variavel boolean
      }
    
      $numero2 = intvaL($num2);

      if($num2 <= 0){
        echo "Numero 2 e invalido<br>"; //inserir no BD
        $valido =  false; // se o número for negativo trocar para false
    }
        
       
       
        $con = new mysqli("localhost", "root","", "devweb2"); // con -> armazena um obj de conexão com o bd mysqli
   
        if($valido){  //Verifica se a variavel de controle está true ou false se estiver true vai executar o cod

        $stmt = $con->prepare("INSERT INTO soma(num1, num2, result) VALUES (?, ?, ?)"); //stmt e um obj que representa um comando que vai executar no BD
            // usa " ? " para evitar invasão do cod, ela representa cada dado passado para o comando
            //prepare passa uma instrução sql || gera um obj que representa um comando do BD

        $soma = $num1 + $num2; // cria variavel soma e receba o resultado da var1+var2 ||| 10 + 15 =25
        $stmt->bind_param("iii", $num1, $num2, $soma); //substui cada enterrogação por valores || define o tipo por "iii" -> int || para enterrogação e passado as variaveis para dar o valor.

        $stmt->execute(); // vai executar no bd

        echo "<h2>Resultado armazenado com sucesso!</h2>"; // passa pro front o result

        $stmt->close(); // fecha a instancia do obj que representa o comando insert




    }
    $stmt = $con->prepare("SELECT * FROM soma ORDER BY id"); // novo obj que representa o comando select
   
    $stmt->execute(); //executar comando

    $result = $stmt->get_result(); // metado get_result gera obj que representa o result que representa os dados que meu select retornou
    echo "<hr>"; // linha

    while($row = $result->fetch_array()){ // row representa os valores das linhas || fetch_Array: ele retorna uma linha do select toda vez que ele e chamado || pecorre cada linha do result do select e armazena na variavel row
        echo "<h1>", $row["num1"], "+", $row["num2"], "=", $row["resultado"], "</h1>"; //imprime os resultados no front 

    }
   
    $result->close(); //fecha o result

    $stmt->close(); // fecha o obj stmt da linha 64

    $con->close(); // fecha con

    



        
    

?>
<hr>
<a href="index.php"> Voltar </a>

</body>
</html>