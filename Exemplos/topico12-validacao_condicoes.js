let n1 = 10
let n2 = 5
let n3 = 2*5

//This is a simple example of if utilization.
if(n1===10){
    console.log("X é 10")
}
console.log("Fim do programa.")

//This is a simple example of if/else conditional test.
if(n1>n2){
    console.log("Verdadeiro")
}else{
    console.log("Falso")
}

//This is a simple example of chained if/else conditional test.
if(n1>n3){
    console.log("N1 maior que N3")
}else if(n1===n3){
    console.log("N1 igual a N3")
}else{
    console.log("N1 menor que N3")
}

//This is a nested IF example.
if(typeof(n1)=="number"){
    console.log("X é um número.")
    if(n1 === 10){
        console.log("X é igual a 10.")
    }
}