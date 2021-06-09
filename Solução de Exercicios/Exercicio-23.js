/*Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.*/

function contarPalavras(string) {
    const separarPalavras = string.split(" ")

    console.log(separarPalavras.length)
}

contarPalavras("Sou uma frase")
contarPalavras("Me divirto aprendendo a programar")