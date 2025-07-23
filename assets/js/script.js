let nome = window.document.getElementById("name");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mensagemOk = false;
let mapa = document.querySelector("#mapa");

nome.style.width = "100%";
email.style.width = "100%";

function validaNome() {
  let txtNome = document.querySelector("#txtNome");
  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome inválido";
    txtNome.style.color = "red";
  } else {
    txtNome.innerHTML = "Nome Válido";
    txtNome.style.color = " green";
    nomeOk = true;
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "E-Mail inválido";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "E-Mail válido";
    txtEmail.style.color = "green";
    emailOk = true;
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector("#txtAssunto");

  if (subject.value.length < 5) {
    txtAssunto.innerHTML = "coloque mais informação no assunto";
    txtAssunto.style.color = "red";
  } else {
    txtAssunto.style.display = "none";
    assuntoOk = true;
  }
}

function validaMensagem() {
  let txtMensagem = document.querySelector("#txtMensagem");

  if (message.value.length <= 5) {
    txtMensagem.innerHTML = "Mensagem muito curta";
    txtMensagem.style.color = "red";
  }
  if (message.value.length >= 100) {
    txtMensagem.innerHTML = "Texto é muito grande";
    txtMensagem.style.color = "red";
    txtMensagem.style.display = "block";
  } else {
    txtMensagem.style.display = "none";
    mensagemOk = true;
  }
}

function enviar() {
  if (
    nomeOk == true &&
    emailOk == true &&
    assuntoOk == true &&
    mensagemOk == true
  ) {
    alert("Formulario enviado com sucesso!");
  } else {
    alert("Preencha o formulário corretamente antes de enviar...");
  }
}

function mapaZoom() {
  mapa.style.width = "800px";
  mapa.style.height = "600px";
}
function mapaNormal() {
  mapa.style.width = "400px";
  mapa.style.height = "250px";
}
