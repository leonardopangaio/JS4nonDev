const p_array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

// const elementos_array=[10,5,8,2,9,15,20, 10, 41, 10]
const elementos_array=["leonardo","Lucia", "isis", "HERA", "ApOlO"]
p_array.innerHTML="[" + elementos_array + "]"

btnPesquisar.addEventListener("click",(evt)=>{
    resultado.innerHTML = "Valor não encontrado."
    const retorno = elementos_array.find((e,i,a)=>{
        if(e.toUpperCase()==txt_pesquisar.value.toUpperCase()){ // if the test were done with === condition, would be need to convert the array item to string, because the element value is allways in array type
            resultado.innerHTML = e.toUpperCase() // Example of toUpperCase string method
            return e
        }
    })
})