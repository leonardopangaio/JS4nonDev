let familia=["Leonardo", "Lucia", "Isis", "Hera", "Apolo"]

//Default example of loop for
for(let i=0; i < familia.length; i++){
    console.log("Bom dia " + familia[i])
}

//Example of for in utilization
for(pessoa in familia){
    console.log("Bom dia " + familia[pessoa])
}

//Example of for of utilization
for(pessoa of familia){
    console.log("Bom dia " + pessoa)
}

console.log("---")

const objs = document.getElementsByTagName("div")

for(o in objs){
    console.log(o)
}

for(o of objs){
    console.log(o)
}