// 1) Escribir una función que reciba una cantidad de pesos, una tasa de interés y un
//número de años y devuelva el monto final a obtener. La fórmula a utilizar es: c*(1+ x/100)**n
// Donde C es el capital inicial, x es la tasa de interés y n es el número de años a calcular.

// function calcularInteres(pesos, interes, anios) {
//     return pesos*(1+ interes/100)**anios
// }
// console.log(calcularInteres(400000, 100, 10))

//--------------------------------------------------------------- 2)
//Utilizando la función del ejercicio anterior, escribir un programa que le pregunte
//al usuario la cantidad de pesos inicial, la tasa de interés y el número de años y muestre el monto
//final a obtener.
// const num1 = prompt("ingrese su dinero")
// const num2 = prompt("ingrese el interes")
// const num3 = prompt("ingrese el numero de anios")
// console.log(calcularInteres(num1, num2, num3))

//--------------------------------------------------------------- 3)
//Escribir una función que convierta un valor dado en grados Fahrenheit a grados
//Celsius. Recordar que la fórmula para la conversión es => 9/5* c + 32

// function convertirGrados(Fahrenheit) {
//     return 5 / 9 * (Fahrenheit - 32)
// }
// console.log(convertirGrados(37))
//------------------------------------------------------ 4)
// Escribir un programa que utilice la función anterior para generar una tabla de
// conversión de temperaturas, desde 0 °F hasta 120 °F, de 10 en 10.

// for (let i = 0; i <= 12; i++) {
//     console.log(`${i * 10} °F, equivalen a ${convertirGrados(i * 10).toFixed(1)} °C`)
// }

// for (let i = 0; i <= 120; i++) {
//     if (i % 10 === 0) {
//         console.log(`${i * 10} °F, equivalen a ${convertirGrados(i * 10)} °C`)
//     }
// }

//---------------------------------------------------- 5) a.
// Escribir una función que dado un número entero devuelva 1 si el mismo
// es impar y 0 si fuera par.
// function entero(numero) {

//     if (numero %2 === 0)
//     return 0;
// else
//     return 1;

// }
// console.log(entero(3))

//--------------------------------------------------------- b.
// Escribir una función que dado un número entero devuelva el dígito de las unidades. Por
// ejemplo, para 153 debe devolver 3.
function separarUnidades(numero) {
     console.log(numero.toString().length)

}

console.log(separarUnidades(2344))