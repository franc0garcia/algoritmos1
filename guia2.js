function mostrarOperaciones (num1,num2) {
   console.log("suma :", num1 + num2);
   console.log("resta:", num1-num2);
   console.log("multiplicacion:", num1*num2);
   console.log("division:", num1/num2 )
}
mostrarOperaciones(2,2)

//------------------------------------------------------ ejercicio b

function imprimirTablaMultiplicar(numero) {
    for (let i = 10; i >= 1; i--) {
       console.log( `${numero} X ${i} = ${i * numero}` )

    }

}
imprimirTablaMultiplicar(5)
//---------------------------------------------------- ejercicio 7.

function pedirNombre() {
    const palabra = prompt("ingrese una palabra")
    let resultado = '';
    for (let i = 0; i < 10; i++) {
        resultado += `${palabra} `;
    }
    console.log(resultado)
}
pedirNombre()