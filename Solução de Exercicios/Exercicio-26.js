/*Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.*/

function removerVogais(string) {
    console.log(string.replace(/[aeiou]/ig, ''))
}

removerVogais("Cod3r")
removerVogais("Fundamentos")