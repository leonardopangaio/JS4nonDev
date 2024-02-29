const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
let novosCursos=["Elastic","Airflow","Grafana","SQL Server","React","Django"]

// Example of single element creation on DOM
const novoElemento = document.createElement("div")
novoElemento.innerHTML = "Novo Curso"
novoElemento.setAttribute("id","c7")
novoElemento.setAttribute("class","curso c1")
caixa1.appendChild(novoElemento)

// Example of mass element creation on DOM
novosCursos.map((el,key)=>{
    const novoElementoDinamico = document.createElement("div")
    novoElementoDinamico.innerHTML = el
    novoElementoDinamico.setAttribute("id","c"+key+1) // in this case, javascript consider that "c"+key+1 is a string concatenation. To bypass this situation, the add part needs to be isolated, for example, "c"+(key+1)
    novoElementoDinamico.setAttribute("class","curso c1")
    
    const btn_lixeira  = document.createElement("img")
    btn_lixeira.setAttribute("src", "../Imagens/lixeira.ico")
    btn_lixeira.setAttribute("class", "btn_lixeira")
    btn_lixeira.addEventListener("click", (evt)=>{
        caixa1.removeChild(evt.target.parentNode)
    })

    novoElementoDinamico.appendChild(btn_lixeira)
    caixa1.appendChild(novoElementoDinamico)
})