const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const btnMap = document.querySelector("#btnMap")
const btnSome = document.querySelector("#btnSome")
const resultado = document.querySelector("#resultado")

// const elementos_array=[10,5,8,2,9,15,20,10,41,10] // Array nonconforming with every but conforming with some
// const elementos_array=[21,22,25,32,36,37,38,60,61,65] // array conforming with every and some
const elementos_array=[10,5,8,2,9,15,10,10] // Array nonconforming with every and some
p_array.innerHTML="[" + elementos_array + "]"

btnVerificar.addEventListener("click",(evt)=>{
    const result = elementos_array.every((e,i,a)=>{
        if(e < 18){
            resultado.innerHTML = "Array não conforme na posição " + (i+1)
        }
        return e >= 18
    })
    console.log(result)
    if(result){
        resultado.innerHTML = "Array em conformidade com a regra aplicada."
    }
})

btnMap.addEventListener("click",(evt)=>{
    const result = elementos_array.map((e,i,a)=>{
        if(e < 18){
            resultado.innerHTML = "Array não conforme na posição " + (i+1)
        }
        return e >= 18
    })
    console.log(result)
    if(result){
        resultado.innerHTML = "Array em conformidade com a regra aplicada."
    }
})

btnSome.addEventListener("click",(evt)=>{
    const result = elementos_array.some((e,i,a)=>{
        if(e < 18){
            resultado.innerHTML = "Array não conforme na posição " + (i+1)
        }
        return e >= 18
    })
    console.log(result)
    if(result){
        resultado.innerHTML = "Array em conformidade com a regra aplicada."
    }
})