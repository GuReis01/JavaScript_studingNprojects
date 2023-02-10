function multiplicarNumeros(dias, ida, volta){
   const idaEvolta = (ida + volta);

   console.log(ida)
   console.log(volta)
   console.log(idaEvolta)

   return dias * idaEvolta;
};

dias = parseInt(prompt("Quantos dias você vai pra empresa esse mês?"))
ida = parseFloat(prompt("Quantos R$ você gasta para ir para a empresa?"))
volta = parseFloat(prompt("Quantos R$ você gasta para voltar pra casa?"))

alert("Você precisa de R$" + multiplicarNumeros(dias, ida, volta) + " de Vale Transporte para esse mês") 

var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
   var clients = request.response;
   console.log(clients.homeTown)
 }