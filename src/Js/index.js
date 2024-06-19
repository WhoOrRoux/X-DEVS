//buscando por ID
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
// quando o "click" acontecer a function sera executada
btnAvancar.addEventListener("click", function () {
  const cartoes = document.querySelectorAll(".cartao"); // buscando por classe
  if (cartaoAtual < cartoes.length - 1) {
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");
    cartoes[cartaoAtual - 1].classList.remove("selecionado");
  }
});
btnVoltar.addEventListener("click", function () {
  const cartoes = document.querySelectorAll(".cartao"); // buscando por classe
  if (cartaoAtual > 0) {
    cartaoAtual = cartaoAtual - 1;
    cartoes[cartaoAtual].classList.add("selecionado");
    cartoes[cartaoAtual + 1].classList.remove("selecionado");
  }
});
