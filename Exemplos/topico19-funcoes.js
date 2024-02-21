//Basic function example
function olaMundo(){
    console.log('Olá Mundo!')
}

//Function olaMundo call
olaMundo()

//Function called by DOM
function mudaTexto(){
    let d1=document.getElementById("d1")
    let d2=document.getElementById("d2")
    let d3=document.getElementById("d3")

    d1.innerHTML=('Texto alterado')
    d2.innerHTML=('Texto alterado')
    d3.innerHTML=('Texto alterado')
}

console.log('---')
//Function with return
function calcula(){
    let n1 = 10
    let n2 = 2
    let res = n1 * n2
    if(res%2 == 0){
        return "Par."
    }else{
        return "Ímpar."
    }
}

console.log(calcula())

console.log('---')
//Function with parameters and multiple data returned
function tipoNumero(numero){
    let res = numero%2
    if(res == 0){
        let response = {Numero: numero, Tipo: "O número é par."}
        return response
    }else{
        let response = {Numero: numero, Tipo: "O número é ímpar."}
        return response
    }
}

let retornoTipo = tipoNumero(12)
console.log(retornoTipo.Numero)
console.log(retornoTipo.Tipo)

console.log('---')
//Function with default values for parameters
function somaDoisNumeros(n1=0, n2=0){
    let res = n1 + n2
    console.log(res)
}

somaDoisNumeros(10,3)
somaDoisNumeros(15) //this call don't raise an error because the function parameters are with default values

console.log('---')
//Example of a function parameter default value set by a variable
const def=0
function somatorio(n1=def, n2=def){
    console.log("O somatório de " + n1 + " e " + n2 + " é: " + (n1+n2)) //if the calculate is not isolated by parenthesis, JS makes a concatenation of values
}
somatorio(10)
somatorio(10,20)

console.log('---')
//Exemple of a function interacting with an external variable
let valor=0
function add(v1=0){
    return valor += v1
}
console.log(add(1))
console.log(add(3))
console.log(add(5))
console.log(add(10))

console.log('---')
//Example of a function with rest parameters
function somatorio2(...valores){
    let tam = valores.length
    let res = 0
    for(let i=0; i<tam; i++){
        res += valores[i]
    }
    return res
}
let resultadoSomatorio = somatorio2(2,3,5,10,35)
console.log("O resultado foi: " + resultadoSomatorio)

console.log('---')
function somatorio3(...valores){
        let res = 0
    for(v of valores){
        res += v
    }
    return res
}
let resultadoSomatorio3 = somatorio2(10,2)
console.log("O resultado foi: " + resultadoSomatorio3)

console.log('---')
//Examples of anonymous function declaration
const fun1 = function(v1,v2){return v1+v2} //This declaration is the most recommended to ensure that the function will not be changed
console.log(fun1(22,23))

var fun2 = function(v1,v2){return v1+v2}
console.log(fun2(22,23))

let fun3 = function(v1,v2){return v1+v2}
console.log(fun3(22,23))

console.log('---')
//Example of anonymous constructor funcdion declaration
const co = new Function("v1","v2","return v1+v2")
console.log(co(1,2))

console.log('---')
//Example of an arrow function
const arrow = (v1,v2)=>{return v1+v2}
console.log(arrow(30,45))

console.log('---')
//Example of an arrow function with one parameter
const a1 = v1=>{return v1++}
console.log(a1(2))

console.log('---')
//Example of an arrow function without return
const a2 = v1=>v1+10
console.log(a2(2))

console.log('---')
//Example of a little complex arrow function
const a3 = (...valores)=>{
    let soma = 0
    for(v of valores){
        soma+=v
    }
    console.log(soma)
}
a3(2,3,4,5,6)