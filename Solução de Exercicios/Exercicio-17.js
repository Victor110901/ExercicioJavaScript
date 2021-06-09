/*Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.*/

function somarNumeros(numeros) {
    let resultado = 0
    numeros.forEach(numeros => resultado += numeros)        

    console.log(resultado)
}

somarNumeros([10, 10, 10])
somarNumeros([15, 15, 15, 15])