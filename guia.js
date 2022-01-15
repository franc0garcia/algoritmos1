const producto = (a, b) => {
    return a * b;

}

console.log(producto(4, 2))
//-------------------------------------ejercicio 1
 const producto1 = (a, b) => {
     return a * b;

 }
 const num1 = prompt ("ingrese un numero")
 const num2 = prompt ("ingrese otro numero")
 console.log(producto1(num1, num2))
//------------------------------------------ejercicio 2.a

function perimetroRectangulo(base, altura) {
    return 2 * (base + altura);
}

console.log(perimetroRectangulo(6, 4))
console.log(perimetroRectangulo(5, 3))
//----------------------------------------- ejercicio 2.b
function areaRectangulo(base, altura) {
    return base * altura;
}

console.log(areaRectangulo(6, 4))

//------------------------------------------ejercicio 2.c   a = (x2-x1)*(y2-y1)

function areaRectanguloOrigen(x1, x2, y1, y2) {
    return (x2 - x1) * (y2 - y1)
}
console.log(areaRectanguloOrigen(2, 4, 2, 4))

//------------------------------------------ ejercicio 2.d   2. pi.radio

function perimetroCirculo(radio) {
    return 2 * Math.PI * radio
}
console.log(perimetroCirculo(2))

//----------------------------------------- ejercicio 2.e  (A = π r²)

function areaCirculo(radio) {
    return Math.PI * radio ** 2
}
console.log(areaCirculo(1))

//--------------------------------------- ejercicio 2.f  V = 4/3 πr³
function volumenEsfera(radio) {
    return 4 / 3 * Math.PI * radio ** 3
}
console.log(volumenEsfera(2))

//--------------------------------------- ejercicio 2.g

function pitagoras(cateto1, cateto2) {
    return Math.sqrt(cateto1 ** 2 + cateto2 ** 2)
}
console.log(pitagoras(3, 5))







