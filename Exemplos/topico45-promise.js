//example without promise
const numero=document.getElementById("numero")

let resultado=false
let tempo=3000

setTimeout(()=>{ //This is an example of callback function
    resultado=true
},tempo)

if(resultado){
    numero.innerHTML="Deu tudo certo."
    numero.classList.remove("erro")
    numero.classList.add("ok")
}else{
    numero.innerHTML="Deu tudo errado."
    numero.classList.add("erro")
    numero.classList.remove("ok")
}

numero.innerHTML="Processando..."
//end of example without promise

//exame with promise
const numero2=document.getElementById("numero2")

let promessa=new Promise((resolved,rejected)=>{
    let resultado=true
    let tempo=3000 //time in milliseconds
    setTimeout(()=>{
        if(resultado){
            resolved("Sucesso.")
        }else{
            rejected("Falha.")
        }
    },tempo)
})

promessa.then( //Using the then() method to handle both of responses of promise
    function(valor){
        numero2.innerHTML=valor
        numero2.classList.remove("erro")
        numero2.classList.add("ok")
    },
    function(erro){
        numero2.innerHTML=erro
        numero2.classList.add("erro")
        numero2.classList.remove("ok")
    }
)
numero2.innerHTML="Processando..."
//end of example with promise

//exame with promise inside a function
const btn_promessa=document.getElementById("btn_promessa")
const numero3=document.getElementById("numero3")

const func_promise=()=>{
    let promi=new Promise((resolved,rejected)=>{
        let resultado=false
        let tempo=3000 //time in milliseconds
        setTimeout(()=>{
            if(resultado){
                resolved("Sucesso.")
            }else{
                rejected("Falha.")
            }
        },tempo)
    })
    return promi
}

btn_promessa.addEventListener("click",(evt)=>{
    numero3.innerHTML="Processando..."
    // console.log(func_promise()) // This can be used to watch the behavior of the promise
    func_promise()
        .then((retorno)=>{ //Using then() method to handle just the success response
            numero3.innerHTML=retorno
            numero3.classList.remove("erro")
            numero3.classList.add("ok")
        })
        .catch((retorno)=>{ //Using catch() method to handle just the failure response
            numero3.innerHTML=retorno
            numero3.classList.add("erro")
            numero3.classList.remove("ok")
        })
})