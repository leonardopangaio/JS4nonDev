const f_tipoMilitar=document.querySelector("#f_tipoMilitar")
const f_tipoNormal=document.querySelector("#f_tipoNormal")
const f_blindagem=document.querySelector("#f_blindagem")
const f_municao=document.querySelector("#f_municao")
const carros=document.querySelector("#carros")
const btn_addCarro=document.querySelector("#btn_addCarro")

const f_nome=document.querySelector("#f_nome")
const f_portas=document.querySelector("#f_portas")

let a_carros=[]

const removerCarro=(quem)=>{
    a_carros=a_carros.filter((el)=>{
        return el.nome!=quem
    })
}

f_tipoMilitar.addEventListener("click",(evt)=>{
    f_blindagem.value=0
    f_municao.value=0
    f_nome.value=""
    f_portas.value=0
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})

f_tipoNormal.addEventListener("click",(evt)=>{
    f_blindagem.value=0
    f_municao.value=0
    f_nome.value=""
    f_portas.value=0
    f_blindagem.setAttribute("disabled","disabled")
    f_municao.setAttribute("disabled","disabled")
})

const gerenciarExibicaoCarros=()=>{
    carros.innerHTML=""
    a_carros.forEach((c)=>{
        const div=document.createElement("div")
        const btn=document.createElement("button")
        
        div.setAttribute("class","carro")
        div.setAttribute("data-nome",c.nome)
        div.innerHTML=`Nome: ${c.nome} <br/>Portas: ${c.portas}`
        if(f_tipoMilitar.checked){
            div.innerHTML=`Nome: ${c.nome} <br/>Portas: ${c.portas}<br/> Blindagem: ${c.blindagem}<br/> Munição: ${c.municao}`
            div.innerHTML+=`<br/>Cor: ${c.cor}`
        }
        
        btn.innerHTML="Remover"
        btn.addEventListener("click",(evt)=>{
            const quemRemover=evt.target.parentNode.dataset.nome
            removerCarro(quemRemover)
            gerenciarExibicaoCarros()
        })

        carros.appendChild(div)
        div.appendChild(btn)
    })
}

btn_addCarro.addEventListener("click",(evt)=>{
    if(f_nome.value=="" || f_portas==""){
        alert("Por favor, preencha ao menos um nome e a quantidade de portas.")
    }else{
        if(f_tipoNormal.checked){
            const c=new Carro(f_nome.value,f_portas.value)
            a_carros.push(c)
        }
        if(f_tipoMilitar.checked){
            const c=new Militar(f_nome.value,f_portas.value,f_blindagem.value,f_municao.value)
            a_carros.push(c)
        }
        gerenciarExibicaoCarros()
    }
})

class Carro{
    constructor(nome,portas){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setCor=function(cor){
        this.cor=cor
    }
}

class Militar extends Carro{
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem=blindagem
        this.municao=municao
        this.setCor("Verde")
    }
    atirar=function(){
        if(this.municao>0){
            this.municao--
        }
    }
}

