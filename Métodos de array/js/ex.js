/*
1- Solicite ao usuário as quatro notas (inteiro) bimestrais de um aluno,
armazenando-as num array simples. Após isso, utilize a
 função reduce() para calcular a média desse aluno.

*/

function calcularMedia() {
    const num1 = parseInt(prompt("Digite o valor de num1:"));
    const num2 = parseInt(prompt("Digite o valor de num2:"));
    const num3 = parseInt(prompt("Digite o valor de num3:"));
    const num4 = parseInt(prompt("Digite o valor de num4:"));
  
    const notas = [num1, num2, num3, num4];
    const media = notas.reduce((a, b) => a + b, 0) / notas.length;
  
    const message = document.querySelector('#message');
    message.style.display = 'block';
    message.innerHTML = 'A média do aluno é: ' + media.toFixed(2);
  }
  

/*
2- Solicite ao usuário quatro valores inteiros e os armazene
 em  um array simples. Após isso, utilize a função filter()
 para gerar um novo array contendo apenas os valores pares.

*/ 

function valoresInteiros() {
    const num1 = parseInt(prompt("Digite o valor de num1:"));
    const num2 = parseInt(prompt("Digite o valor de num2:"));
    const num3 = parseInt(prompt("Digite o valor de num3:"));
    const num4 = parseInt(prompt("Digite o valor de num4:"));
  
    const valores = [num1, num2, num3, num4];
    const eventValores = valores.filter(function (valor) {
        return valor % 2 === 0;
    });
  
    const message = document.querySelector('#message');
    message.style.display = 'block';
    message.innerHTML = 'Valores pares: ' + eventValores.join(', ');
}

/*
3-Solicite ao usuário o nome e idade de quatro pessoas,
 armazenando esses dados em um array de objetos. Após utilize filter() 
 para gerar um novo array contendo
  apenas as pessoas idosas(idade maior ou igual a 60).


*/ 


function idadePessoas() {
  const pessoas = [];

  for (let i = 0; i < 4; i++) {
    const nome = prompt("Digite o nome da pessoa " + (i + 1) + ":");
    const idade = parseInt(prompt("Digite a idade da pessoa " + (i + 1) + ":"));

    const pessoa = {
      nome: nome,
      idade: idade
    };

    pessoas.push(pessoa);
  }

  const pessoasIdosas = pessoas.filter(function(pessoa) {
    return pessoa.idade >= 60;
  });

  const nomesIdades = pessoasIdosas.map(function(pessoa) {
    return `${pessoa.nome} (${pessoa.idade})`;
  });

  const message = document.querySelector('#message');
  message.style.display = 'block';
  message.innerHTML = 'Idade das pessoas idosas: ' + nomesIdades.join(', ');
}


  /*
4-Solicite ao usuário quatro valores inteiros e os armazene em um array. 
Utilize a função map() para gerar um novo array contendo o fatorial desses valores.


*/ 
function valoresInt() {
    const val = [];
  
    for (let i = 0; i < 4; i++) {
      const valor = parseInt(prompt("Digite um valor inteiro " + (i + 1) + ":"));
  
      val.push(valor);
    }
  
    const fatorial = val.map(function(valor) {
      return calcularFatorial(valor);
    });
  
    const message = document.querySelector('#message');
    message.style.display = 'block';
    message.innerHTML = 'Fatoriais dos valores: ' + fatorial.join(', ');
  }
  
  function calcularFatorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      let fatorial = 1;
      for (let i = 2; i <= num; i++) {
        fatorial *= i;
      }
      return fatorial;
    }
  }
  
 /*
5-Solicite ao usuário o nome e abreviatura de quatro estados brasileiros, 
armazenando esses dados em um array de objetos.
 Utilize a função map() para gerar um novo array 
 onde cada um desses estados deve estar contido em tags HTML <i></i>,
  gerando como resposta a imagem abaixo
*/ 
function estadosBrasileiros() {
  const estados = [];

  for (let i = 0; i < 4; i++) {
    const nome = prompt("Digite o nome do estado " + (i + 1) + ":");
    const abreviatura = prompt("Digite a abreviatura do estado " + (i + 1) + ":");

    estados.push({ nome: nome, abreviatura: abreviatura });
  }

  const estadosEmTags = estados.map(function (estado) {
    return '<i>' + estado.nome + '</i>';
  });

  const message = document.querySelector('#message');
  message.style.display = 'block';
  message.innerHTML = estadosEmTags.join(', ');
}

 /*
6-  dado o vetor de objetos, pokemon abaixo: faça o que se pede
a)Considere que você subiu de nível no Pokemon,  e agora todos os seus 
Pokemons devem receber uma atualização. Cada CP Máximo deve ser acrescentado em 50. 
Utilize um método de array para aplicar este acréscimo em todos.


b)Considere que agora você está fazendo uma busca na sua lista de Pokemons. 
Você deseja procurar pelo seus Pokemon Charmanders afim de visualizar dados deles. 
Utilize um método de array para aplicar este filtro.

c)Digamos que você quer verificar se possui doces 
suficientes para evoluir o seu Pokemon.
 Sendo assim, você agora precisa achar o seu pokemon no array e mostrar seus dados na tela. 
A propriedade ID é o nosso identificador único e ele será a condicional 
usada para descobrir qual Pokemon foi selecionado por você. Utilize FIND().

d)Imagina que você quer saber o quanto seus Pokemons juntos possuem de CP. Utilize reduce para retornar a soma.


*/ 
function pokemon() {
  const pokemons = [
    { id: 1, nome: 'Pikachu', tipo: 'electric', registro: 25, CP: 350 },
    { id: 2, nome: 'Bulbasaur', tipo: 'grass', registro: 1, CP: 400 },
    { id: 3, nome: 'Squirtle', tipo: 'water', registro: 7, CP: 450 },
    { id: 4, nome: 'Charmander', tipo: 'fire', registro: 4, CP: 380 },
    { id: 5, nome: 'Jigglypuff', tipo: 'fairy', registro: 20, CP: 300 }
  ];

  // a) Aumentar o CP máximo em 50 para todos os Pokemons
  pokemons.forEach(pokemon => pokemon.CP += 50);

  // b) Filtrar somente os Pokemons do tipo Charmander
  const charmanders = pokemons.filter(pokemon => pokemon.nome === 'Charmander');

  // c) Encontrar um Pokemon pelo ID
  const selectedPokemon = pokemons.find(pokemon => pokemon.id === 2);

  // d) Calcular o total de CP de todos os Pokemons
  const totalCP = pokemons.reduce((sum, { CP }) => sum + CP, 0);

  console.log(pokemons); // Pokemons com CP atualizado
  console.log(charmanders); // Pokemons do tipo Charmander
  console.log(selectedPokemon); // Pokemon selecionado pelo ID
  console.log(totalCP); // Total de CP de todos os Pokemons
}






switch (a) {
  case 1:
    calcularMedia();
    break;
  case 2:
    valoresInteiros();
    break;
  case 3:
    idadePessoas();
    break;
  case 4:
    valoresInt();
    break;
  case 5:
    estadosBrasileiros();
    break;
  case 6:
    pokemon();
    break;
}
