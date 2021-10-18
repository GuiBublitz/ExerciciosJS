//Trocando valor entre variáveis
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
//Fim trocando valor entre variáveis

//Máximo entre 2 valores
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
//Fim Máximo entre 2 valores

//FizzBuzz
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
//Fim do FizzBuzz

//Medidor de velocidade
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
//Fim Medidor de velocidade
