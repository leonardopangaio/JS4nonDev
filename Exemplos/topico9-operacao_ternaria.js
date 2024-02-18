let num = 10
let res = num%2

//standard way to check
if(res==0){
    console.log("Par")
}else{
    console.log("Impar")
}

resTern = (!(num%2) ? "Par" : "Impar") // In this case was necessary to change the result (using NOT !), because the result of num%2 is 0, and zero is considered as False.
