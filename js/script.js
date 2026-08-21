// let display = document.getElementById("display");
// console.log(display);
 
 
 
 
// const campoTexto = document.getElementById("campoTexto").value;
//   console.log(campoTexto);
 
//   let cepDigitado = '05051000';
 
// // let cepDigitado = prompt('Digite um cep sem formatação');
const campoTexto = document.getElementById('campoTexto')
const btnConsultar = document.getElementById('btnConsultar')
const display = document.getElementById('display')
const btnLimpar = document.getElementById('btnLimpar')
 
btnLimpar.addEventListener('click', function () {
  display.innerHTML = "";
  campoTexto.value = "";
})
 
btnConsultar.addEventListener('click', function () {
  const campoTextoInput = campoTexto.value;
  const url = `https://viacep.com.br/ws/${campoTextoInput}/json/`;
  if (campoTextoInput.length != 8 || isNaN(campoTextoInput)) {
    alert("CEP INVALIDO! Digite somente NUMÉROS.")
  }
  else {
    fetch(url)
      .then(function (resposta) {
        return resposta.json()
      })
      .then(function (dados) {
        if (dados.erro) {
          display.innerHTML = "CEP não encontrado!";
          return;
        }
        console.log(dados);
        display.innerHTML = `CEP: ${dados.cep}`;
        display.innerHTML += `<br> Logradouro: ${dados.logradouro}`;
        display.innerHTML += `<br> Bairro: ${dados.bairro}`;
        display.innerHTML += `<br> Cidade: ${dados.estado}`;
      })
  }
});