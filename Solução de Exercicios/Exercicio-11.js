/*Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:*/

function receberPrimeiroEUltimoElemento(array) {
    const indiceDoPrimeiroElemento = 0
    const indiceDoUltimoElemento = array.length - 1
    const primeiroElemento = array[indiceDoPrimeiroElemento]
    const ultimoElemento = array[indiceDoUltimoElemento]

    console.log(primeiroElemento, ultimoElemento)
}

receberPrimeiroEUltimoElemento([7, 14, 'Ola'])