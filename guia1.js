// ejercico 4. Escribir una función que, dado un número entero n, permita calcular su factorial.

function factorial(numero) {
    if (numero === 0) {
        return 1
    }
    let resultado = 1
    for (let i = numero; i >= 1; i--) {
        resultado *= i
    }
    return resultado
}



console.log(factorial(5))