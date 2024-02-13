let num1 = 10
let num2 = 5
let num3 = 10

if(num1 > num2){
    console.log('num1 maior que num2.')
}else if(num1 >= num2){
    console.log('num1 maior ou igual a num2.')
}else if (num1 < num2){
    console.log('num1 menor que num2.')
}else if(num1 <= num2){
    console.log('num1 menor ou igual a num2.')
}else if(num1 == num2){
    console.log('o valor de num1 é igual ao valor de num2.')
}else if(num1 === num2){
    console.log('o valor e tipo de num1 é igual ao de num2.')
}else if(num1 != num2){
    console.log('num1 é diferente de num2.')
}else if(!(num1 == num2)){
    console.log('num1 não é igual a num2.')
}

//////////////////////
let var1 = 1
let var2 = '1'

console.log(var1 == var2) //true
console.log(var1 === var2) //false

let json1 = {Nome: 'Leonardo'}
let json2 = {Nome: 'Leonardo'}

console.log(json1 == json2) //false
console.log(json1 === json2) //false

let obj1 = {Nome: 'Leonardo'}
let obj2 = obj1

console.log(obj1 == obj2) //true
console.log(obj1 === obj2) //true