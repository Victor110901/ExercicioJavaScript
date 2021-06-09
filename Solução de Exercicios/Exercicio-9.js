/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.*/

function repetidor(valor, repetidor) {
    array = []
    for(let i = 0; i < repetidor; i++) {
        array.push(valor)
    }
    console.log(array)
}

repetidor("Codigo", 2)
repetidor(7, 3)