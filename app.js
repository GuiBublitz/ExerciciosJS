//////////////////////////////////////////////////////////////////////////Trocando valor entre variáveis
let a;
let b;
let c;
function trocaVar(a,b){
    console.log('Você digitou o 1° parâmetro com o seguinte valor: "'+a+'"');
    console.log('Você digitou o 2° parâmetro com o seguinte valor: "'+b+'"');
    console.log(" ");
    c = a;
    a = b;
    b = c;
    console.log("Valores trocados: ")
    console.log("valor do 1° parâmetro: "+a);
    console.log("valor do 2° parâmetro: "+b);
}
///////////////////////////////////////////////////////////////////////Fim trocando valor entre variáveis

/////////////////////////////////////////////////////////////////////////Máximo entre 2 valores
function retornaMaior(a,b){
    if(typeof(a) === "number" && typeof(b) == "number"){
        if(a > b){
            console.log("1° número, de valor "+a+", é maior do que o segundo, de valor "+b+"!");
        }else if(b > a){
            console.log("2° número, de valor "+b+", é maior do que o primeiro, de valor "+a+"!");
        }else{
            console.log("Os numeros são iguais bocó.");
        }
    }else if(typeof(a) === "string" && typeof(b) === "string" ){
        if(a > b){
            console.log("'"+a+"' tem mais letras do que '"+b+"'!");
        }else if(b > a){
            console.log("'"+b+"' tem mais letras do que '"+a+"'!");
        }else{
            console.log("As strings inseridas tem a mesma quantidade de caracteres!");
        }
    }else{
        console.log("Isto não faz sentido!! Tenta de novo.");
    }
}
//////////////////////////////////////////////////////////////////Fim Máximo entre 2 valores

////////////////////////////////////////////////////////////////////////////////////FizzBuzz
/* 
    Divisível por 3 retorna "Fizz"
    Divisível por 5 retorna "Buzz"
    Divisível por 3 e 5 retorna "FizzBuzz"
    Não divisível por 3 ou 5 retorna Entrada
    Não é um número retorna "Não é um número"
*/ 
function fizzBuzz(a){
    if(typeof(a) !== "number"){
        return("Não é um número!");
    }else if(a%3 === 0 && a%5 != 0){
        return "Fizz";
    }else if(a%5 === 0 && a%3 != 0){
        return "Buzz";
    }else if(a%3 === 0 && a%5 === 0){
        return "FizzBuzz";
    }else{
        return a;
    }
}
////////////////////////////////////////////////////////////////////////////Fim do FizzBuzz

///////////////////////////////////////////////////////////////////////Medidor de velocidade
/*
    velocidade Máxima: 70km
    a cada 5km acima do limite vc ganha 1 ponto na carteira
    Math.Floor() arredonda número
    caso pontos maior que 12 -> "Carteira suspendida"
*/
const velocidadeMáxima = 70;
function medidor(velocidade){if(velocidade <= 70 ) return "Okay";
    else if(typeof(velocidade) === "number"){
        let pontos = Math.floor((velocidade -= velocidadeMáxima) / 5 );
        if(pontos > 12) return "Carteira suspendida!";
        else return ("Você levou " + pontos + " Pontos na carteira.");
    }else return "Valor incoerente ou nulo";}
///////////////////////////////////////////////////////////////////Fim Medidor de velocidade

////////////////////////////////////////////////////////////////////////Impar ou Par
/*
    Receber uma quantidade de valores para avaliar 
    função exibe se cada valor é par ou impar 
*/ 
function imparPar(valor){
    for (i = 0 ;i <= valor; i++){
        if((i%2) === 0){
           console.log(i+" 'PAR'");
        }else{
            console.log(i+" 'IMPAR'");
        }
    }
}

function imparOuPar(type,value){
    if(type == "impar"){
        for(i=0; i <= value; i++){
            if(i%2 != 0){
                console.log(i," IMPAR");
            }
        }
    }else if(type == "par"){
        for(i=0; i <= value; i++){
            if(i%2 === 0){
                console.log(i," PAR");
            }
        }
    }else return "oq??";
}
///////////////////////////////////////////////////////////////////////Fim Impar ou Par

/////////////////////////////////////////////////////////////////////Encontre o String
/*
    Criar um método para ler propriedades de um objeto e
    exibir somente as propriedades do tipo string que estão neste objeto
*/
const filmes = {
    titulo: "Os mequetrfes",
    duracao: 230,
    qualidadeVideo: "zuada",
    qualidadeAudio: "aceitável",
    nota: 6.5,
    critica: "Filme agradável"
} 
function retornaString (obj){
    for(itens in obj){
        if(typeof(obj[itens]) === "string"){
            console.log(itens+": "+obj[itens]);
        }
    }
}
/////////////////////////////////////////////////////////////////////Fim encontre o String

///////////////////////////////////////////////////////////////////////multiplos de 3 e 5
/*
    Criar função somar que retorna a soma de todos os múltiplos de 3 e 5
    m = n * k
*/
function somaMultiplos(m){
    const n3 = 3;
    const n5 = 5;
    let contadorN = 0;
    for(i = 0; i <= m; i++){
        for(k = 0;k <= m; k++){
            if(((n3*k) <= m)){
                if(i === (n3 * k)){
                    contadorN += i;
                }
                if(i === (n5 * k)) {
                    contadorN += i;
                }
            }else break;
        }
    }
    console.log("A soma dos multiplos de 3 e 5 é de: " +contadorN);
}
function showOddNumbers(number){
    for(i = 1; i <= number; i++){
        if (i%2 === 0){
            continue;
        }
        if( i%15 === 0 ){
            console.log(i);
        }
    }
}
///////////////////////////////////////////////////////////////////Fim multiplos de 3 e 5

////////////////////////////////////////////////////////////////Exercício de média escolar
/*
Obter a média a partir de um array
0-59: F
60-69: D
70-79: C
80-89: B
90-100: A
*/ 
const arrayNotas = [08,16,94,96,92,90];
function mediaAluno(notas){
    const media = calculaMedia(notas);
    if(media <= 59)return "F";
    if(media <= 69)return "D";
    if(media <= 79)return "C";
    if(media <= 89)return "B"
    return "A";
}
function calculaMedia(array){
    let media = 0;
    for(let valor of array ){
        media += valor;
    }
    return media / (array.length);
}
/////////////////////////////////////////////////////////Fim exercício médias escolar

 /////////////////////////////////////////////////////////////////////////Astericos 
function asterisco (value){
    let contador = "";
    for (i= 0 ; i < value; i++){
        contador += "*";
        console.log(contador);
    }
}

function asteriscos2(value){
    for (i=0; i < value; i++){
        let contador = "";
        for(x=0; x <= i; x++){
            contador += "*";
        }
        console.log(contador)
    }
}
///////////////////////////////////////////////////////////////////Fim asteriscos 

///////////////////////////////////////////////////////////////////Números primos
function primos(valor){
    for(i=0; i <= valor; i++){
        let contador = 0;
        for(y=0; y <= i;y++){
            if(i%y === 0){
                contador += 1;
            }
        }
        if (contador == 2)
        console.log(i +" é um número primo!");
    }
}
function primos2(valor){
    for(let numero = 2; numero < valor; numero++){
        if (NumeroPrimo(numero))console.log(numero);
    }
}
function NumeroPrimo(numero){
    for(let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor === 0){
            return false;
        }
    }
    return true;
}
///////////////////////////////////////////////////////////////Fim Números primos

/////////////////////////////////////////////////////////////Factory functions 
/*ANTES*/
const celular = {
    marcaCelular : 'ASUS',
    tamanhoTela : {
        vertical: 155,
        horizontal : 75
    },
    capacidadeBateria : 5500,
    liga : function(){
        console.log("Fazendo ligação...");
    }
}
/*DEPOIS*/
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria ){
    return{
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("Fazendo ligação...")
        }
    }
}
const celular1 = criarCelular('Iphone', 5.5, 4500);
//////////////////////////////////////////////////Fim factory functions

////////////////////////////////////////////Constructor functions
function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log("Fazendo ligação!")
    }
}
const celular2 = new Celular('Iphone',6.0,4300);

/*Exercicio*///Faça vc mesmo sua constructor function
function Guitar(marca,cordas,material,preco){
    this.marca = marca,
    this.cordas = cordas,
    this.material = material,
    this.preco = preco,
    this.tocar = function(){
        console.log("Estou tocando Guitarra :)")
    }
}
let guitarra = new Guitar('fender',12,'madeira','5.450,00')
/////////////////////////////////Fim constructor functions

//////////////////////////////////////////Natureza dinâmica de objetos
/*Voce pode inserir itens nos objetos*/ 
const obj = {
    nome : 'Guilherme',
    idade : 21
}
obj.altura = 188;
obj.verPerfil = function(){
    console.log('Vc está vendo meu perfil');
}
/**E podemos deletar parâmetros também**/
delete obj.altura;
delete obj.nome;

//////////////////////////////////////Fim Natureza dinâmica de objetos
 
//////////////////////////////////////////Clonando objetos
const objClone = {
    nome : 'Guilherme',
    idade : 21,
    altura : 188,
    peso : '80kg',
    perfil : function(){
        console.log("Vendo perfil");
    }
}
const novoObj = Object.assign({
    feio : true
}, objClone); // Clonando objClone para novoObj// No primeiro parâmetro você pode adicionar novos atributos para o objeto clonado


/** Ou podemos também clonar usando spread, que são os 3 pontos. Por Exemplo: **/
const objNovo2 = {...novoObj};

// criando e clonando meu próprio obj
const carro = {
    marca : 'parati',
    cor : 'marrom',
    preco : 'baratin'
}
const novoCarro = Object.assign({
    velho : true
},carro);

///////////////////////////////////////Fim clonando objetos

/////////////////////////////////////////////////////////////////////////////////////Math
/*
 Math.random(); cria numeros aleatorios entre zero e um
*/
//o código a baixo é disponibilizado na documentação da mozilla e retorna um valor aleatorio entre o primeiro parâmetro e o segundo parâmetro
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  Math.max(5,9,7,3); //me retorna o maior valor :)
  Math.min()// É bem óbvio né

////////////////////////////////////////////////////////////////////////////////////////Fim do Math

/////////////////////////////////////////////////////////////////String

////////////////////////////////////////////////////////////////Fim String