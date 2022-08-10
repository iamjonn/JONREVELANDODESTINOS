const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")

const respostas = [

  "Certeza!",
  "Não tento tanta certeza.",
  "E eu que sei é?",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Me pergunta depois visse.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "Eu nao digo é nada.",
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
}, 3000)
}