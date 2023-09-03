function Verifica() {
    let Nome = document.getElementById('participantes').value;
    let Email = document.getElementById('loginemail').value;
    let Senha = document.getElementById('loginsenha').value;
    let Repetindo = document.getElementById('confirmarsenha').value;
    let CPF = document.getElementById('identificacao').value;
    let RG = document.getElementById('rg').value;
    let cep = document.getElementById('Cep').value;
    let endereco = document.getElementById('rua').value;
    let numeracao = document.getElementById('numero').value;
    let bairro = document.getElementById('Bairro').value;
    let estado = document.getElementById('Estado').value;
    let cidade = document.getElementById('Cidade').value;
    let complementação = document.getElementById('complemento').value;
    if (!Nome || !Email || !Senha || !Repetindo || !CPF || !RG || ! cep ||! endereco || !numeracao || !bairro || !estado || !cidade ||! complementação) {
    alert("Campos de preenchimento obrigatório. Favor preencher!");
    } else {
    window.location.href = "Campeonato.html";
    }
    if((Senha !== '' || Repetindo !== '') && (Senha == Repetindo)) {
        alert("As senhas conferem!");
    } else {
        alert("Senhas não conferem! Por favor digite novamente");
}
}

function buscarCep() {
    var cep = document.getElementById('Cep').value;
    var url = 'https://viacep.com.br/ws/' + cep + '/json/';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                document.getElementById('rua').value = data.logradouro;
                document.getElementById('Cidade').value = data.localidade;
                document.getElementById('Estado').value = data.uf;
                document.getElementById('Bairro').value = data.bairro;
            } else {
                alert('CEP não encontrado');
            }
        })
        .catch(error => {
            console.error('Erro ao buscar CEP:', error);
        });
    }