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
let mensagem = selector("#mensagem");

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

  if (escolhaCodificacao.value == "base64") {
    let mensagemCodificada = btoa(mensagem.value);
    mensagem.value = `${mensagemCodificada}`;
  }
  if (escolhaCodificacao.value == "cifraDeCesar") {
    codificacaoDeCesar();
    console.log("caiu");
  }
});

decodificar.addEventListener("click", (event) => {
  event.preventDefault();
  if (escolhaCodificacao.value == "base64") {
    let mensagemDecodificada = atob(mensagem.value);
    mensagem.value = `${mensagemDecodificada}`;
  } else if (escolhaCodificacao.value == "cifraDeCesar") {
    decodificacaoDeCesar();
    console.log("caiu");
  }
});

//Funções
function selector(elemento) {
  return document.querySelector(elemento);
}

function codificacaoDeCesar() {
  let mensagemCesar = mensagem.value.split("");
  let incrementos = parseInt(incremento.value);
  let codificacaoFinal = "";
  mensagemCesar.forEach((item) => {
    let numeroCodificado = item.charCodeAt() + incrementos;
    let resultado = String.fromCharCode(numeroCodificado);
    let resultadoCodificado = resultado.split("");
    let resultadoCodificado2 = resultadoCodificado.join("");
    codificacaoFinal += resultadoCodificado2;
    mensagem.value = `${codificacaoFinal}`;
  });
}
function decodificacaoDeCesar() {
  let mensagemCesar = mensagem.value.split("");
  let incrementos = parseInt(incremento.value);
  let codificacaoFinal = "";
  mensagemCesar.forEach((item) => {
    let numeroCodificado = item.charCodeAt() - incrementos;
    let resultado = String.fromCharCode(numeroCodificado);
    let resultadoCodificado = resultado.split("");
    let resultadoCodificado2 = resultadoCodificado.join("");
    codificacaoFinal += resultadoCodificado2;
    mensagem.value = `${codificacaoFinal}`;
  });
}
