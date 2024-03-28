const objetos=document.getElementById("objetos")

const computador={
    cpu: "i9",
    ram: "64gb",
    hd: "2tb",
    info:function(){
        console.log(`CPU:${this.cpu}`)
        console.log(`RAM:${this.ram}`)
        console.log(`HD.:${this.hd}`)
    }
}

computador["monitor"]="22pol"
computador.placaVideo="rtx3060ti"
console.log(computador)
console.log(computador["monitor"])
console.log(computador.placaVideo)
console.log("---")

computador.info()
console.log("---")

const computadores=[
    {
        cpu: "i9",
        ram: "64gb",
        hd: "2tb"
    },
    {
        cpu: "i7",
        ram: "32gb",
        hd: "2tb"
    },
    {
        cpu: "i5",
        ram: "16gb",
        hd: "1tb"
    }
]

console.log(computadores)
console.log("---")
// objetos.innerHTML=JSON.stringify(computadores)

computadores.forEach((c)=>{
    console.log(c)
    const div=document.createElement("div")
    div.innerHTML=`${c.cpu}<br>${c.ram}<br>${c.hd}`
    div.setAttribute("class","computador")
    objetos.appendChild(div)
})
console.log("---")

// Example of a literal object clone
const c1=Object.assign({},computador)
console.log(c1)
console.log("---")

// Example of a merge of literal objects into a new one
const obj1={t1:"teste1"}
const obj2={t2:"teste2"}
const obj3={t3:"teste3"}
const obj_merge=Object.assign(obj1,obj2,obj3)
console.log(obj_merge)
console.log("---")

// Removing an object property
delete(computador.hd)
computador.info()
console.log("---")

//Creating a new object based on another object
const carro={
    modelo: "",
    portas: 0,
    cambio: "",
    tipo: "",
    ligado: false,
    ligar: function(){
        this.ligado=true
    },
    info: function(){
        console.log(`Modelo: ${this.modelo}`)
        console.log(`Portas: ${this.portas}`)
        console.log(`Cambio: ${this.cambio}`)
        console.log(`Tipo..: ${this.tipo}`)
        console.log(`ligado: ${this.ligado}`)
    }
}

const carro1=Object.create(carro)
carro1.modelo="corsa"
carro1.portas=4
carro1.cambio="manual"
carro1.tipo="popular"
carro1.ligar()
carro1.info()
console.log("---")