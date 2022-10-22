

alert("Bem vindo, iremos realizar algumas operações!")

let name = prompt("Qual o seu nome?")

let numberOne = prompt(`Olá ${name}, escreva um número`)
let numberTwo = prompt(`Escreva mais um número`)

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

let sum = (numberOne + numberTwo).toFixed(2);
let sub = (numberOne - numberTwo).toFixed(2);
let mult = (numberOne * numberTwo).toFixed(2);
let div = (numberOne / numberTwo).toFixed(2);
let restDiv = (numberOne % numberTwo).toFixed(2);

alert(`A soma dos dois números é ${sum}`);
alert(`A subtração dos dois números é ${sub}`);
alert(`A multiplicação dos dois números é ${mult}`);
alert(`A divisão dos dois números é ${div}`);
alert(`O resto da divisão dos dois números é ${restDiv}`);

if ( numberOne != numberTwo) {
    alert("O primeiro número é diferente do segundo número")
} else {
    alert("O primeiro número é igual ao segundo número")
}

if (sum % 2 == 0) {
    alert(`O resultado da soma é ${sum}, e é par`)
} else {
    alert(`O resultado da soma é ${sum}, e é impar`)
}
