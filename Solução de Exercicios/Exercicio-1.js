/*Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.*/

const ola = 'Ola, '
const exclamacao = ' !'
function cumprimentar(nome) {
    console.log(ola.concat(nome, exclamacao))
}

cumprimentar('Leonardo')
cumprimentar('Maria')