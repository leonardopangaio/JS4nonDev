const dc1 = document.getElementById("c1")
const dc2 = document.getElementById("c2")
const dc3 = document.getElementById("c3")
const dc4 = document.getElementById("c4")
const dc5 = document.getElementById("c5")

console.log(dc1) //This call will always show the last value of document element
console.log(dc1.id)
console.log(dc1.innerHTML)
dc1.innerHTML = 'Leonardo Pangaio'

const arrayElementos = [dc1, dc2, dc3, dc4, dc5]
console.log(arrayElementos)
for(d of arrayElementos){
    d.innerHTML = 'Família Pangaio'
}

arrayElementos.map((e) => {
    e.innerHTML = 'Família'
    console.log(e)
})