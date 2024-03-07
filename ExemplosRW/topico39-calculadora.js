const btn_soma=document.querySelector("#btn_soma")
const btn_subtracao=document.querySelector("#btn_subtracao")
const btn_multiplicacao=document.querySelector("#btn_multiplicacao")
const btn_divisao=document.querySelector("#btn_divisao")

const res=document.querySelector("#res")

// It's necessary to declare the variables inside the operation, so when the EventListener is activated, it'll get the values that are in the inputs on HTML.
// Otherwise, if the variables were declared outside the funcions, they will be initialized with 0 value, thats the default set on HTML.
const op=[
    ()=>{
        const val1=Number(document.getElementById("valor1").value)
        const val2=Number(document.getElementById("valor2").value)
        const valores=[val1, val2]
        console.log("Somar os valores: " + valores)
        res.value=valores[0]+valores[1]
    },
    ()=>{
        const val1=Number(document.getElementById("valor1").value)
        const val2=Number(document.getElementById("valor2").value)
        const valores=[val1, val2]
        console.log("Subtrair os valores: " + valores)
        res.value=valores[0]-valores[1]
    },
    ()=>{
        const val1=Number(document.getElementById("valor1").value)
        const val2=Number(document.getElementById("valor2").value)
        const valores=[val1, val2]
        console.log("Multiplicar os valores: " + valores)
        res.value=valores[0]*valores[1]
    },
    ()=>{
        const val1=Number(document.getElementById("valor1").value)
        const val2=Number(document.getElementById("valor2").value)
        const valores=[val1, val2]
        console.log("Dividir os valores: " + valores)
        res.value=valores[0]/valores[1]
    }

]

btn_soma.addEventListener("click",op[0])
btn_subtracao.addEventListener("click",op[1])
btn_multiplicacao.addEventListener("click",op[2])
btn_divisao.addEventListener("click",op[3])