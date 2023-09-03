
// BLOCO DE VERIFICAÇÃO DE PREENCHIMENTO DE CAMPOS
function Verifica() {
    let user = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;
    if (!user || !senha) {
    alert("Campos de preenchimento obrigatorio. Favor preencher!");
    }else {
        window.location = "./Campeonato.html";}}

// CRIAÇÃO DO ARRAY
    var Camisas = [];
    var Nome = [];
    var CPF = [];
    var Genero = [];

// SALVAR INFORMAÇÕES DO USUÁRIO
function salvarUser() {
    let NumeroCamisa = document.getElementById("NumeroCamisa").value;
    let Participantes = document.getElementById("Participantes").value;
    let Identificacao = document.getElementById("Identificacao").value;
    let Sexo = document.getElementById("Sexo").value;

if (NumeroCamisa && Participantes && Identificacao && Sexo) {
    Camisas.push(NumeroCamisa);
    Nome.push(Participantes);
    CPF.push(Identificacao);
    Genero.push(Sexo);
    crialista();
    document.getElementById("Participantes").value = '';
    document.getElementById("NumeroCamisa").value = '';
    document.getElementById("Identificacao").value = '';
    document.getElementById("Sexo").value = '';
    }else {alert("Preencha todos os campos obrigatórios.");}}

// FUNÇÃO CRIA LISTA
function crialista() {
    let tabela = "<tr><th>Participantes</th><th>N º da camisa</th><th>CPF</th><th>Genêro</th><th>Ações</th></tr>";
    for (let i = 0; i < Camisas.length; i++) 
    {tabela += "<tr><td>" + Nome[i] + "</td><td>" + Camisas[i] + "</td><td>" + CPF[i] + "</td><td>" + Genero[i] + "</td><td><button class='btnEditar' onclick='editar(" + i + ")'>Editar</button><button class='btnExcluir' onclick='excluir(" + i + ")'>Excluir</button></td></tr>";}
    document.getElementById('tabela').innerHTML = tabela;}

// FUNÇÃO PARA EDITAR UM ARRAY
function editar(i) {
    document.getElementById('NumeroCamisa').value = Camisas[i];
    document.getElementById('Participantes').value = Nome[i];
    document.getElementById('Identificacao').value = CPF[i];
    document.getElementById('Sexo').value = Genero[i];
    Camisas.splice(i, 1);
    Nome.splice(i, 1);
    CPF.splice(i, 1);
    Genero.splice(i, 1);
    crialista();}

// FUNÇÃO PARA EXCLUIR UM ARRAY
function excluir(i) {
    Camisas.splice(i, 1);
    Nome.splice(i, 1);
    CPF.splice(i, 1);
    Genero.splice(i, 1);
    crialista();}

// REDIRECIONAR PARA CADASTRO
function Redirecionar() {
window.location.href = "Cadastro.html";
}
