const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")

const respostas = [

  "Certeza!",
  "Não tento tanta certeza.",
  "E eu que sei é?",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Claro! ainda duvida ?.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "VIXI QUE PERGUNTA DIFICIL, Não faço ideia.",
  "Minhas fontes dizen não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "tomara que sim.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontan que sim.",

]


function fazerPergunta() {

  if(inputPergunta.value == "") {
  alert("Digite sua pergunta")
  return
}

const pergunta = "<div>" + inputPergunta.value
+ "</div>"


const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random
() * totalRespostas)

console.log(numeroAleatorio)
elementoResposta.innerHTML = pergunta + respostas
[numeroAleatorio]


setTimeout(function() {
  elementoResposta.style.opacity = 0;
}, 5000)
}

elementoResposta.addEventListener("transitionend", function () {
  if (elementoResposta.style.opacity == 0) {
    elementoResposta.innerHTML = "";
    elementoResposta.style.opacity = 1;
    inputPergunta.value = "";
  }
});








//01101010 01101111 01101110 