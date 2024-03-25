const olhos=[...document.getElementsByClassName("olho")]

let posx_mouse=0
let posy_mouse=0

window.addEventListener("mousemove",(evt)=>{
    posx_mouse=evt.clientX
    posy_mouse=evt.clientY

    // console.log(`x:${posx_mouse},y:${posy_mouse}`)

    const rot=Math.atan2(posy_mouse,posx_mouse) * 180/Math.PI
    // console.log(`rot: ${rot}`)

    olhos.map((o)=>{
        o.style.transform=`rotate(${rot}deg)`
    })
})

const aleatorio_padrao=Math.random()
const aleatorio_formatado=Math.round(Math.random()*100)
const raiz_quadrada=Math.sqrt(9)
const potencia=Math.pow(3,3)

console.log(`Aleatório padrão: ${aleatorio_padrao}`)
console.log(`Aleatório formatado: ${aleatorio_formatado}`)
console.log(`Raiz quadrada de 9: ${raiz_quadrada}`)
console.log(`Potencia (3^3): ${potencia}`)