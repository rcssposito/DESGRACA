// Converte o input password em text para exibir a senha enquanto o checkbox estiver marcado
function exibirSenha() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  }
  else {
    x.type = "password";
  }
}

// Deixa os campos dos inputs vazios 
function apagarValor() {
  document.getElementByClass("fields").value = " ";
}

// Verfica se as senhas existem e, caso positivo, direciona o usuário para sua página
function login() {
  let userm = "master";
  let passm = "master";
  let userd = "dev";
  let passd = "dev";

  let username = document.loginform.user.value;
  let password = document.loginform.pass.value;

  if (username == userm && password == passm) {
    window.location = "master.html";
  }
  if (username == userd && password == passd) {
    window.location = "dev.html";
    alert("dev access");
  }
  else {
    alert('Senha ou usuário incorretos');
  }
  apagarValor()
}

// Abrir o modal de usuário
function openModal(){
  document.getElementById('id01').style.display = 'block';
}
// Fechar o modal de usuário
function closeModal() {
  document.getElementById('id01').style.display = 'none';
}

// Abrir o modal de cliente
function openModal2(){
  document.getElementById('id02').style.display = 'block';
}
// Fechar o modal de usuário
function closeModal2() {
  document.getElementById('id02').style.display = 'none';
}

// Abrir o modal de ordem de serviço
function openModal3(){
  document.getElementById('id03').style.display = 'block';
}
// Fechar o modal de usuário
function closeModal3() {
  document.getElementById('id03').style.display = 'none';
}