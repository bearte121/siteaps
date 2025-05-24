function alterarFonte(tamanho) {
  const conteudo = document.getElementById('conteudo-principal');
  const botoes = document.querySelectorAll('.tamanho-fonte button');

  botoes.forEach(btn => btn.classList.remove('ativo'));

  switch (tamanho) {
    case 'pequena':
      conteudo.style.fontSize = '17px';
      document.getElementById('fonte-pequena').classList.add('ativo');
      break;
    case 'padrao':
      conteudo.style.fontSize = '20px';
      document.getElementById('fonte-padrao').classList.add('ativo');
      break;
    case 'grande':
      conteudo.style.fontSize = '25px';
      document.getElementById('fonte-grande').classList.add('ativo');
      break;
  }
}

document.getElementById('fonte-pequena').addEventListener('click', () => alterarFonte('pequena'));
document.getElementById('fonte-padrao').addEventListener('click', () => alterarFonte('padrao'));
document.getElementById('fonte-grande').addEventListener('click', () => alterarFonte('grande'));

function alterarCor(modo) {
  const corpo = document.querySelector('body');
  const botoes = document.querySelectorAll('.cor-site button');

  botoes.forEach(btn => btn.classList.remove('ativo'));
  corpo.classList.remove('modo-claro', 'modo-escuro');

  if (modo === 'claro') {
    corpo.classList.add('modo-claro');
    document.getElementById('cor-claro').classList.add('ativo');
  } else {
    corpo.classList.add('modo-escuro');
    document.getElementById('cor-escuro').classList.add('ativo');
  }
}

document.getElementById('cor-claro').addEventListener('click', () => alterarCor('claro'));
document.getElementById('cor-escuro').addEventListener('click', () => alterarCor('escuro'));

window.addEventListener('DOMContentLoaded', () => {
  alterarFonte('padrao');
  alterarCor('claro');
});
