/*Criar uma função que receba um array de números e retorne o menor número desse array.*/

function menorNumero(numeros) {
    console.log(Math.min.apply(Math, numeros))
}

menorNumero([10, 5, 35, 65])
menorNumero([5, -15, 50, 3])