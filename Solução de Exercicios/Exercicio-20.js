/*Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário.*/

function areaDoTriangulo(base, altura) {
    area = (base * altura) /2
    console.log(area.toFixed(2))
}

areaDoTriangulo(10, 15)
areaDoTriangulo(7, 9)