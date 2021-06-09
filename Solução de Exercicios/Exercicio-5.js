//Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

function maiorOuIgual(a, b) {
    if(typeof a != typeof b) {console.log('false')}
    console.log(`${a >= b}`)
}

maiorOuIgual(0, 0)
maiorOuIgual(0, "0")
maiorOuIgual(5, 1)