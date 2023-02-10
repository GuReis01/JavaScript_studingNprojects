// let nome = prompt("Qual o seu nome?")

// if(nome == "Luis"){
//    alert(`Olá ${nome}`)
// } else{
//    alert("NÃO É O LUIS")
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// switch (idade) {
//    case idade >= 18:

//       console.log("Pode entrar");
//       break;

//    case idade < 18:

//       console.log("Pode entrar");
//       break;
   
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let velocidadeCarro = 170

// if (velocidadeCarro > 80){
//    alert("Levou multa")
// } else{
//    ("Não levou multa")
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let idade = prompt("Qual a sua idade?")
// let cnh = prompt("Você possue CNH? S/N")

// if(idade < 18 || cnh == "N"){
//    cnh = false;
//    alert("Não pode dirigir")
//    console.log("CNH é false")
// } else {
//    cnh = true;
//    alert("Pode dirigir")
//    console.log("CNH é true")
// }

// for(let i = 0; i <= 50; i++){

//    if(i % 2 == 0){
//       console.log(i + " é par")
//    } else {
//       console.log(i + " é impar")      
//    }
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let num = 5
// let divisoes = 0

// for(let i = 1; i <= num; i++){

//    if(num % 2 == 0){
//       divisoes++;
//    }
// }

// if(divisoes == 2){
//    console.log(`O número ${num} é primo`)
// } else {
//    console.log(`O número ${num} não é primo`)
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function multiplicarNumeros(dias, ida, volta){
//    const idaEvolta = (ida + volta);

//    console.log(ida)
//    console.log(volta)
//    console.log(idaEvolta)

//    return dias * idaEvolta;
// };

// dias = parseInt(prompt("Quantos dias você vai pra empresa esse mês?"))
// ida = parseFloat(prompt("Quantos R$ você gasta para ir para a empresa?"))
// volta = parseFloat(prompt("Quantos R$ você gasta para voltar pra casa?"))

// alert("Você precisa de R$" + multiplicarNumeros(dias, ida, volta) + " de Vale Transporte para esse mês") 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let x = 10;

// if(true){
//    let x = 50;
//    console.log(x); //escopo if
// }

// console.log(x)  //escopo global

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let y = 5; 

// const multiplicar = function(a,b){

//    let y = a * 2;
   
//    console.log(y) //escopo function

//    if(y > 10){
      
//       let y = 0;
      
//       y++

//       console.log(y) //escopo if dentro do escopo function
//    }
// }

// console.log(y); //escopo global

// multiplicar(7,3)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const parOuImpar = (n) => {
//    let condicao = n % 2;

//    if(condicao == 0){
//       console.log("é par")
//    }else{
//       console.log("é impar")
//    }
// };

// parOuImpar(5)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function repetirFrase(frase, n=2){
//    for(let i = 1; i <= n; i++){
//       console.log(frase + " " + i);
//    }
// }

// repetirFrase("TESTE FRASE", 5)
// repetirFrase("Só duas vezes agora")

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function contador (i){
//    let cont = i;

//    let somarContador = function(){
//       console.log(cont);
//       cont++;
//    }

//    return somarContador;
// }

// let meuContador = contador(5);
// meuContador();
// meuContador();
// meuContador();
// meuContador();

// let meuContador2 = contador(1);
// meuContador2();
// meuContador2();
// meuContador2();
// meuContador2();
// meuContador2();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let numeros = [1, 2, 3, 4, 8, 12, 34];
let informacoes = ["Filipe", 38, "Ret", "DEUS DO RAP", 6];

console.log(numeros)
console.log(informacoes)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let monstro = {
   nome: "Filpe",
   idade: "38",
   profissao: "Deus do Rap Nacional",
   relacionamento: "casado com a Anna Estrela",
   cantar: function(){
      console.log("ela é rica pai...")
   }
}

console.log(monstro)
console.log(monstro.nome)
monstro.segundoNome = "Ret"
console.log(monstro.segundoNome)
console.log(monstro.profissao)
console.log(monstro.relacionamento)
console.log(monstro.cantar())

delete monstro.relacionamento;

console.log("O RET AINDA NAMORA?? " +  monstro.relacionamento)
console.log(monstro)