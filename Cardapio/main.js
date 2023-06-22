const form = document.querySelector('form');
const selectDiaSemana = document.querySelector('#dia-semana');
const inputItem = document.querySelector('#item');
const btnAdicionar = document.querySelector('#adicionar');
const lista = document.querySelector('#lista');

let cardapio = {};

function adicionarItem() {
  const diaSemana = selectDiaSemana.value;
  const item = inputItem.value;

  if (!item) {
    return alert('Digite um item válido!');
  }

  if (!cardapio[diaSemana]) {
    cardapio[diaSemana] = [];
  }

  cardapio[diaSemana].push(item);

  atualizarLista();
  inputItem.value = '';
}

function atualizarLista() {
  lista.innerHTML = '';

  for (const [diaSemana, itens] of Object.entries(cardapio)) {
    const ul = document.createElement('ul');
    const h3 = document.createElement('h3');

    h3.textContent = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);

    for (const item of itens) {
      const li = document.createElement('li');
      const span = document.createElement('span');
      const btnEditar = document.createElement('button');
      const btnExcluir = document.createElement('button');

      span.textContent = item;
      btnEditar.textContent = 'Editar';
      btnExcluir.textContent = 'Excluir';

      btnEditar.addEventListener('click', () => editarItem(diaSemana, item));
      btnExcluir.addEventListener('click', () => excluirItem(diaSemana, item));

      li.appendChild(span);
      li.appendChild(btnEditar);
      li.appendChild(btnExcluir);

      ul.appendChild(li);
    }

    lista.appendChild(h3);
    lista.appendChild(ul);
  }
}

function editarItem(diaSemana, item) {
  const novoItem = prompt('Digite o novo item:', item);

  if (!novoItem) {
    return;
  }

  const index = cardapio[diaSemana].indexOf(item);

  if (index >= 0) {
    cardapio[diaSemana][index] = novoItem;
  }

  atualizarLista();
}

function excluirItem(diaSemana, item) {
  const index = cardapio[diaSemana].indexOf(item);

  if (index >= 0) {
    cardapio[diaSemana].splice(index, 1);
  }

  atualizarLista();
}

btnAdicionar.addEventListener('click', adicionarItem);


function calcularImc() {
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);
  
  if (altura && peso) {
    const imc = peso / (altura * altura);
    const resultado = document.getElementById("resultado-imc");
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}.`;
  }
}
