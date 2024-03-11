let nome = "Leonardo"
let esposa = "Lucia"
let filhos = ["Isis","Hera","Apolo"]

let familia = "O " + nome + " e " + esposa + " tem os filhos " + filhos
let familia2 = `O ${nome} e ${esposa} tem os filhos ${filhos}`

console.log(familia)
console.log("---")
console.log(familia2)

let familia3 = "O " + nome 
    + " e " + esposa 
        + " tem os filhos " + filhos
let familia4 = `O ${nome} 
    e ${esposa} 
    tem os filhos ${filhos}`

console.log("---")
console.log(familia3)
console.log("---")
console.log(familia4)
console.log("---")
console.log(`Também pode ser usada no console.log para escrever um texto com uma variável ${familia2}`)
console.log("---")
console.log(`Também pode ser usada no console.log 
    para escrever um texto com uma variável 
    ${familia2}`)