let musicas = new Set(["m1","m2","m3","m4","m5"])

console.log(musicas)
console.log(musicas.entries())
console.log(musicas.keys())
console.log(musicas.values())
console.log(musicas.size)

console.log("---")
musicas.add("m6")
console.log(musicas)

console.log("---")
console.log(musicas.has("m1"))

console.log("---")
musicas.delete("m2")
console.log(musicas)

console.log("---")
musicas.forEach((el)=>{
    console.log(el)
})

console.log("---")
musicas.clear()
console.log(musicas)

console.log("---")
const musicas2 = new Set()
musicas2.add("Musica1")
console.log(musicas2)