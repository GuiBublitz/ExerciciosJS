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
/*Tipo Primitivo*/ 
const mensagem = "Bom dia!";
/*Tipo objeto*/
const outraMensagem = new String('Bom dia!');

mensagem.length;
mensagem.includes('Bom');//Se encontrar a palvra ou frase que vc escrever na variavel mensagem ele me retorna true, se não, retorna false.
mensagem.startsWith('Bo');//Se a string começar com o 'Bo' ele retorna true
mensagem.endsWith('');//Faz a mesma coisa q a de cima porém ele avalia o final da string
mensagem.replace('Bom', 'Péssimo');//Ele deleta a string bom, e adiciona pessimo
// Você pode verificar tudo oq vc imaginar em uma simples string, vc vai encontrar tudo na documentação mozilla
////////////////////////////////////////////////////////////////Fim String

///////////////////////////////////////////////////////////////////////////////////Templete Literal scape sequences
const msm = `isto é minha 'primeira' mensagem!!`;

/*Exercicio*/ 
function m(nome,idade){
const minhaMensagem =
`Ola ${nome}!! Tudo bom?

Sei que você ja tem ${idade} anos!! Mass queria te pedir um favor:

Nós aqui da sua casa, adorariamos que você ajudasse
na louça após a janta e o almoço :)

Fica o recado, atenciosamente, nós da sua casa!
`
return minhaMensagem;
}
/////////////////////////////////////////////////////////////////////////////////Fim templete literal

////////////////////////////////////////////////////////////////////////////////Montador de endereço
/*
Criar um objeto endereço que contem:
Rua
Estado
Cidade
CEP
ExibirEndereço(endereco)
*/ 
//jeito q eu fiz 
function MontadorEndereco (rua, estado, cidade, cep){
    this.rua = rua,
    this.estado = estado,
    this.cidade = cidade,
    this.cep = cep,
    this.exibirEndereco = function(){
        console.log(`${rua}\n${estado} \n${cidade} \n${cep}`);
    }
}
const endereco = new MontadorEndereco('Margareth Bennertz','Santa Catarina','Blumenau','808-5456-5');
// jeito professor
let endereco2 = {
    rua : 'a',
    cidade : 'b',
    cep : 'c'
}
function exibirEndereco (obj){
    for(let chave in obj){
        console.log(chave,obj[chave]);
    }
}
///////////////////////////////////////////////////////////////////////////Fim Montador de endereço

////////////////////////////////////////////////////////////////////////////////Encontre a igualdade
function MontadorCelular(marca,tela,qualidade,cor){
    this.marca = marca,
    this.tela = tela,
    this.qualidade = qualidade,
    this.cor = cor
}
let celu1 = new MontadorCelular('Motorola',7.0,true,'cinza');
let celu2 = new MontadorCelular('Sansung',5.6,false,'branco');
let celu3 = new MontadorCelular('Sansung',5.6,false,'branco');
let celu4 = new MontadorCelular('Xiaomi',6.0,true,'vermelho');
let celu5 = new MontadorCelular('Sansung',5.6,false,'branco');
delete celu5.cor;
celu5.recomendo = 'sim';
function saoIguais(cel1,cel2){
    if (!mesmoTamanho(cel1,cel2)) return false;
    for (item in cel1){
        if(cel1[item] != cel2[item]){
            return false;
        }
    }
    return true;
}
function atributosSaoIguais(cel1,cel2){
    if (!mesmoTamanho(cel1,cel2)) return false;
    let cell1 = Object.keys(cel1);
    let cell2 = Object.keys(cel2);
    for(i=0; i <= cell1.length; i++){
        if(cell1[i] != cell2[i]){
            return false;
        }
    }
    return true;
}
function mesmoTamanho (cel1, cel2){
    if (Object.keys(cel1).length != Object.keys(cel2).length) {
        return false;
    }else return true;
}
//////////////////////////////////////////////////////////////////////////////Fim encontre a igualdade

/////////////////////////////////////////////////////////////////////////////Objeto postagem de blog
let postagem = {
    titulo : 'Flamengo encerra o primeiro tempo com derrota para o Fluminese :(, até quando, Renato?',
    mensagem : 
    `
    Depois de um primeiro tempo lamentável, o flamengo de renato vem com tudo para 
    buscar a virada contra o time tricolor!! #VamosFlamengo!
    `,
    autor : 'Guilherme Eduardo Bublitz',
    visualizações : 9563,
    comentarios : [
    {
        autor : 'GabiGol',
        mensagem : 'Futebol brasileiro é um varzeaa'  
    },
    {
        autor: 'cleitin',
        mensagem : 'crênDeusPai'
    }
    ],
    estaAoVivo : true
}
/////////////////////////////////////////////////////////////////////////////Fim objeto postagem de blog

//////////////////////////////////////////////////////////////////////////////Constructor function (Exercício)
function Postagem (titulo,mensagem,autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizações = 0,
    this.comentarios = [],
    this.aovivo = false
}
let postagem2 = new Postagem('Flamengo perde de novo!','Torcedores do flamengo começam a perder a paciência com Renato Gaúcho','Guilherme Eduardo Bublitz');
/////////////////////////////////////////////////////////////////////////////Fim constructor function

//////////////////////////////////////////////////////////////////////////////////Faixa de preço
let faixas = [
    {
        tooltip : 'Até R$700',
        minimo : 0,
        maximo : 700
    },
    {
        tooltip : 'De R$700 à R$1200',
        minimo : 700,
        maximo : 1200
    },
    {
        tooltip : 'R$1000 ou mais',
        minimo : 1000,
        maximo : 999999
    }
]
/*OUUU*/ 
function criarFaixaPreco (tooltip,minimo,maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}
let faixas2 = [
    criarFaixaPreco('Até R$700',0,700),
    criarFaixaPreco('Até R$1200',0,1200),
    criarFaixaPreco('Até R$2000',0,2000)
]

/*OUUU*/ 
function CriarToolTips(tootip,minimo,maximo){
    this.tooltip = tootip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new CriarToolTips('a',0,700),
    new CriarToolTips('a',0,1200),
    new CriarToolTips('a',0,2000)
]


/////////////////////////////////////////////////////////////////////////////////Fim faixa de preço

///////////////////////////////////////////////////////////////////////Manipilação avançada de arrays no Java Script
/** Adicionando um elemento dentro de um array / No inicio / no meio e no final **/
const array = [1,2,3];
array.unshift('olá');//Adiciona o elemento 'olá' no indice 0 do meu array e empurra todos os outros elementos para o proximo indice
array.splice(2,0,'hello'); ///Primeiro parâmetro é o indice,
                          // o segundo parâmetro é oq eu quero deletar, no caso o zero significa que nao queremos deletar nada
                          // e o terceiro parâmetro é oq eu vou inserir.
array.push('eu sou o ultimo');// Adiciona na ultima posição do array um novo elemento 'eu sou oultimo'
                              //, aumentando assim nosso array

/*Montar um array com os 3 metodos de manipulação*/ 
const minhaFamilia = [];
minhaFamilia.push(
    {
       pais : {
           mae: 'Gisele',
           pai : 'Egon'
        }
    },
    {
       irmas : {
          1 : 'Bianca',
          2 : 'Ana',
          3 : 'Julia'
        }
    });
    minhaFamilia.unshift({eu:'Guilherme'});
    minhaFamilia.splice(2,0,{
            pets : {
                gatos : {
                    1 : 'myah'
                }
            }
    });

/* Encontrando elementos(primitivos) dentro de um array*/ 
let casas = [1,2,3,4,'a',1,3,'Gui'];
casas.indexOf(3);//me retorna o indice do elemento que eu passar, no caso retorna o indice do elemento 3, que é 2.
                // se eu colocasse um elemento inexistente no array, ele me retornaria -1, lembrando que o indexof 
                // leva em consideração o tipo também(string number etc etc)
casas.lastIndexOf(3); // Mas e se tivermos 2 tipos ou mais de elemento 3 em nosso array?, Bom vc pode usar o lastindexof
                      // para pegar o indice do ultimo elemento 3 do nosso array, neste caso retornaria 6
let elementoQqueroVerificarSeTem = 'Gui';
casas.includes(elementoQqueroVerificarSeTem);// includes verifica se à o elemento e retorna true ou false 

/*Encontrando elementos do tipo referência dentro de um array*/ 
const marcas = [
    {id:1,nome: 'a'},
    {id:2,nome: 'b'},
    {id:3,nome: 'c'}
];
let marca = marcas.find(function(marca){
    return marca.nome === 'b';
});

/*exercicio achar tipo de referencia*/ 
const nomes = [
    {nome:'Guilherme'},
    {nome:'Eduarda',pet: {gato: {1:'myah'}}},
    {nome:'Sara'},
    {nome:'Lucas'},
    {nome:'Cleitin'}
]
let guardaNome =  nomes.find(function (obj){
    return obj.nome === 'Eduarda';
});
/**Removendo elementos do array */
const penal = ['lapis','caneta','borracha','apontador','Marca texto'];
penal.pop();// remove o ultimo item
penal.shift();//Remove o primeiro item
penal.splice(1,0,'Olá');
let penal2 = penal;
/**Esvaziando um array */
penal.length = 0; //Apaga todo nosso array e incllusive as copias desse array são deletadas


/**Cobinando e cortanto arrays */
const numbers1 = [1,2,3];
const numbers2 = [4,5,6];
let combinado = numbers1.concat(numbers2);
let cortado = combinado.slice(2,5); // Já se deixarmos apenas um parâmetro ele retorna do parâmetro passado em diante
                                    //se nao for adicionado nenhum parâmetro, ele simplismente clona

/**clonando e combinando array utilizando spread */
combinado = [];
combinado = [...numbers1]; // ele clona o numbers1 para dentro do combinado
combinado = [...numbers1,...numbers2]//Ele clona os 2 arrays para dentro do meu combinando, um seguido do outro
                                    //combinando assim, os dois
combinado = [...numbers1,'ola mundo',2,4,...numbers2, 'eita'];//vc pode inclusive adicionar itens normalmente

///////////////////////////////////////////////////////////////////////FIM Manipilação avançada de arrays no Java Script

///////////////////////////////////////////////////////////////////////////////////Arrow functions
/*Antes*/ 
function ola(mensagem){
    console.log(mensagem);
}
/**Depois */
nomes.find(obj => obj.nome === 'Eduarda');
//////////////////////////////////////////////////////////////////////////////////////Fim arrow Functions

//////////////////////////////////////////////////////////////////////////////////////////////////Foreach

const numbers99 = [1,2,3,4,5,6,7];
//numbers99.forEach((num,ind)=>console.log(num,ind));

//////////////////////////////////////////////////////////////////////////////////////////////////fim forech

///////////////////////////////////////////////////////////////////////////////////////////////////join/split

let frase = ['ola','seu','mequetrefe'];
frase = frase.join(' ');
frase = frase.split(' ');
frase = frase.join('-');



///////////////////////////////////////////////////////////////////////////////////////////////fim join/split

////////////////////////////////////////////////////////////////////////////////Como receber dados do usuario
// const idadeUser = prompt('Qual tua idade?');
// if(idadeUser >= 18){
//     alert('VC é maior de idade!');
// }else alert('vc é de menor');
//////////////////////////////////////////////////////////////////////////////fim como receber dados do usuario

////////////////////////////////////////////////////////////////////////////Intro manipulação DOM

// document.getElementById('pororoca').innerHtml = '<div><h1>Eu sou rei, que delicia!</h1></div>';
// document.getElementsByClass('pororoca').innerHtml = '<div><h1>Eu sou rei, que delicia!</h1></div>';

let listas = [
    {
        nome : 'Guilherme',
        convidados : [
            {nome: 'a'},
            {nome: 'b'},
            {nome: 'c'}
        ]
    },
    {
        nome : 'Lucas',
        convidados : [
            {nome: 'd'},
            {nome: 'e'},
            {nome: 'f'}
        ]
    },
    {
        nome : 'Matheus',
        convidados : [
            {nome: 'g'},
            {nome: 'h'},
            {nome: 'i'}
        ]
    }
]

let btn = document.getElementById('btn-verifica');
let p = document.getElementById('label-permissao');
let inputName = document.getElementById('nome-convidado');
let inputDono = document.getElementById('nome-dono');

btn.addEventListener('click', ()=>{
    for (a in listas){
        let lista = listas[a];
        if(inputDono.value != lista.nome){
            p.innerText = `Lista convidados de ' ${inputDono.value} ' não existe.`; 
            continue;
        }
        return nomeNaLista(lista,inputName.value);
    }
});
function nomeNaLista (lista,nome){
    for(b in lista.convidados){
        if(nome != lista.convidados[b].nome){
            p.innerText = 'Não está na lista!';        
            continue;
        }
        return p.innerText = 'Está na lista'; 
    }
}

////////////////////////////////////////////////////////////////////////Fim intro manipulação DOM