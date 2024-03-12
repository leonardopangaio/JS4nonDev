const res=document.querySelector(".res")
const btn_add=document.querySelector("#btn_add")

let carros = []

class Carro{
    curso="Javascript"
    constructor(pNome, pTipo){
        // this.curso="Python"
        this.name=pNome
        if(pTipo == 1){
            this.tipo="Esportivo"
            this.velmax=300
        }else if(pTipo == 2){
            this.tipo="Utilitário"
            this.velmax=100
        }else if(pTipo == 3){
            this.tipo="Passeio"
            this.velmax=160
        }else{
            this.tipo="Militar"
            this.velmax=200
        }
    }
    getNome(){
        return this.name
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velmax
    }
    getInfo(){
        return [this.name, this.tipo, this.velmax]
    }

    setNome(pNome){
        this.name=pNome
    }
    setTipo(pTipo){
        if(pTipo == 1){
            this.tipo="Esportivo"
            this.velmax=300
        }else if(pTipo == 2){
            this.tipo="Utilitário"
            this.velmax=100
        }else if(pTipo == 3){
            this.tipo="Passeio"
            this.velmax=160
        }else{
            this.tipo="Militar"
            this.velmax=200
        }
    }

    info(){
        console.log(`Nome: ${this.name}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Vel. Max.: ${this.velmax}`)
        console.log(`---`)
    }
}

let c1 = new Carro("gol",3)
c1.info()
console.log(c1.getInfo())
console.log(c1.getNome())
console.log(c1.getTipo())
console.log(c1.getVelMax())

console.log("---")
c1.setTipo(1)
console.log(c1.getInfo())

console.log("---")
console.log(c1.curso)

const addCarro=()=>{
    res.innerHTML=""
    carros.map((i)=>{
        const div=document.createElement("div")
        div.setAttribute("class","carro")
        div.innerHTML=`Carro: ${i.getNome()}<br/>Tipo: ${i.getTipo()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener("click",(evt)=>{
    const f_carro=document.querySelector("#f_carro")
    const f_tipo=document.querySelector("#f_tipo")
    let c = new Carro(f_carro.value,f_tipo.value)
    carros.push(c)
    f_carro.value=""
    f_tipo.value=""
    f_carro.focus()
    console.log(carros)
    addCarro()
})