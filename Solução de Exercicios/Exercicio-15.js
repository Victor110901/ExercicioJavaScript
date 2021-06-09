/*Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.*/

function receberSomenteOsParesDeIndicesPares(numeros) {
    let array = []
    for(let i = 0; i < numeros.length; i += 2){
        const numeroPar = numeros[i] % 2 === 0
    if(numeroPar)
        array.push(numeros[i])
    }
    console.log(array)
}

receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])