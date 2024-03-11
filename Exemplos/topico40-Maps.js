const mapa = new Map()
const jeison = new Map()

mapa.set("Idade","20")
mapa.set("Idade2",30)
mapa.set(30,"Idade")
mapa.set(100,105)
mapa.set([0,1,2],"pedra")
mapa.set("Idades",[4,5,6])

jeison.set("Mapa",mapa)

console.log(mapa)
console.log(jeison)

console.log("---")
console.log(mapa.get("Idade"))

console.log("---")
mapa.delete(100)
console.log(mapa)

console.log("---")
console.log(mapa.has("Idades"))

console.log("---")
mapa.forEach((valor, chave, colecao)=>{
    console.log("Chave: " + valor)
    console.log("Valor: " + chave)
    console.log(colecao)
})

console.log("---")
console.log(mapa.keys())
console.log(mapa.values())

console.log("---")
console.log(mapa.size)

console.log("---")
mapa.clear()
console.log(mapa)

console.log("---")
let mapa2 = new Map()
mapa2.set("Nome", "Leonardo")
console.log(mapa2)