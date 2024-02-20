let num=0
let max=20

//Example of break statement
while(num<max){
    console.log(num)
    if(num>15){
        break
    }
    num++
}
console.log('Fim do programa WHILE com BREAK.')

console.log('---')

//Example of continue statement
for(let i=0; i<max; i++){
    if(i==10){
        continue
    }
    console.log(i)
}
console.log('Fim do programa FOR com CONTINUE.')

console.log('---')

let n=0
//Example of break statement
while(n<max){
    n++
    if(n==15){
        continue
    }
    console.log(n)
}
console.log('Fim do programa WHILE com CONTINUE.')