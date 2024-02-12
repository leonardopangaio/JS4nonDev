let num1, num2, num3
let num4=5, num5=15
num1 = num2 = num3 = 10

console.log('O valor da variável num1: ' + num1)
console.log('O valor da variável num2: ' + num2)
console.log('O valor da variável num3: ' + num3)
console.log('O valor da variável num4: ' + num4)
console.log('O valor da variável num5: ' + num5)

function soma(valor1, valor2){
    let resultado = valor1 + valor2
    return resultado
};

function subtrai(valor1, valor2){
    let resultado = valor1 - valor2
    return resultado
};

function multiplica(valor1, valor2){
    let resultado = valor1 * valor2
    return resultado
};

function divide(valor1, valor2){
    let resultado = valor1 / valor2
    return resultado
};

function resto(valor1, valor2){
    let resultado = valor1 % valor2
    return resultado
};

function incremento_lite(valor1){
    let resultado = ++valor1 // necessário fazer o pré incremento
    return resultado
};

function incremento_full(valor1, valor2){
    let resultado = valor1 += valor2
    return resultado
};

function decremento_lite(valor1){
    let resultado = --valor1 // necessário fazer o pré decremento
    return resultado
};

function decremento_full(valor1, valor2){
    let resultado = valor1 -= valor2
    return resultado
};

console.log('A soma de 2+2=' + soma(2,2))
console.log('A subtração de 5-3=' + subtrai(5,3))
console.log('A multiplicação de 2*2=' + multiplica(2,2))
console.log('A divisão de 21/2=' + divide(21,2))
console.log('O resto da divisão 15/2=' + resto(15,2))
console.log('O incremento do valor 2 é: ' + incremento_lite(2))
console.log('O incremento do valor 2 com 3 é: ' + incremento_full(2,3))
console.log('O decremento do valor 10 é: ' + decremento_lite(10))
console.log('O decremento do valor 10 com 3 é: ' + decremento_full(10,3))

