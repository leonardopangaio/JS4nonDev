// Simple for loop example.
for(let i=0; i<=10; i++){
    console.log("Imprimindo o n°: " + i)
}

for(let i=0; i<=100; i++){
    if(i%2==0){
        console.log(i + " é par.")
    }else{
        console.log(i + " é impar.")
    }
}

let familia=["Leonardo", "Lucia", "Isis", "Hera", "Apolo"]
for(let i=0; i < familia.length; i++){
    console.log("Bom dia " + familia[i])
}

console.log('---')
//Example of loop for without courly braces
for(let u=0; u<2; u++)
    console.log(u)