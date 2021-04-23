// variáveis para serem utilizadas no código.
const incremento = selector(".incremento");
const cesar = selector("#cesar");
const escolhaCodificacao = selector(".escolha-decodificacao");
const inputCodificar = selector(".input-codificar");
const inputDecodificar = selector(".input-decodificar");
const codificar = selector(".codificar");
const decodificar = selector(".decodificar");
const cifraDeCesar = selector("#apresentacao-cesar");
const base64 = selector("#apresentacao-base64");
const mensagem = selector("#mensagem");

// Eventos!

escolhaCodificacao.addEventListener("change", () => {
  if (escolhaCodificacao.value == "cifraDeCesar") {
    incremento.style.display = "block";
    setTimeout(() => {
      cifraDeCesar.style.display = "flex";
    }, 300);
  }
  if (escolhaCodificacao.value == "base64") {
    setTimeout(() => {
      base64.style.display = "flex";
    }, 300);
  }
});

inputCodificar.addEventListener(
  "click",
  () => (codificar.style.display = "block")
);
inputDecodificar.addEventListener(
  "click",
  () => (decodificar.style.display = "block")
);
codificar.addEventListener("click", (event) => {
  event.preventDefault();
  let mensagemCodificada = btoa(mensagem.value);
  if (escolhaCodificacao.value == "base64") {
    mensagem.value = `${mensagemCodificada}`;
  }
});

decodificar.addEventListener("click", (event) => {
  event.preventDefault();
  let mensagemDecodificada = atob(mensagem.value);
  if (escolhaCodificacao.value == "base64") {
    mensagem.value = `${mensagemDecodificada}`;
  }
});

//Funções
function selector(elemento) {
  return document.querySelector(elemento);
}
