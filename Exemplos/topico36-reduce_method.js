const p_array = document.querySelector("#array")
const btnReduzir = document.querySelector("#btnReduzir")
const resultado = document.querySelector("#resultado")

const elementos_array=[1,2,3,4,5]
let anterior=[]
let atual=[]
let indice=[]
let _array=[]

p_array.innerHTML="[" + elementos_array + "]"

btnReduzir.addEventListener("click",(evt)=>{
    resultado.innerHTML = elementos_array.reduce((ant, atu, ind, arr)=>{
        anterior.push(ant)
        atual.push(atu)
        indice.push(ind)
        _array.push(arr)
        return ant + atu
    })
    console.log(anterior)
    console.log(atual)
    console.log(indice)
    console.log(_array)
})
