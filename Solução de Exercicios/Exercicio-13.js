/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.*/

function filtrarNumeros(elementos) {
    const resultado = []
    for(let item of elementos)
    if(typeof item === "number")
    resultado.push(item)
    console.log(resultado)
    }
    

filtrarNumeros(["Javascript", 1, "3", "Web", 20])
filtrarNumeros(["a", "c"])