// This example will be used to show how to manipulate the DOM with the knowledge until topic 31 
const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML","CSS","Javascript","PHP","React","MySQL","React"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso = document.getElementById("nomeCurso")

let indice = 0

const tirarSelecao=()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        el.classList.remove("selecionado")
    })
}

const CriarNovoCurso = (curso)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id","c"+indice)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=curso
    novoElemento.addEventListener("click",(evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })

    return novoElemento
}

cursos.map((el,chave)=>{
    const novoElemento=CriarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

// cursos.map((el,chave)=>{
//     const novoElemento = document.createElement("div")
//     novoElemento.setAttribute("id","c"+chave)
//     novoElemento.setAttribute("class","curso c1")
//     novoElemento.innerHTML=el

//     const comandos=document.createElement("div")
//     comandos.setAttribute("class","comandos")

//     const rb=document.createElement("input")
//     rb.setAttribute("type","radio")
//     rb.setAttribute("name", "rb_curso")

//     comandos.appendChild(rb)

//     novoElemento.appendChild(comandos)

//     caixaCursos.appendChild(novoElemento)
// })

function cursoSelecionado(){
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    return cursosSelecionados[0]
}

btnCursoSelecionado.addEventListener("click",(evt)=>{
    try{
        alert("Curso selecionado: " + cursoSelecionado().innerHTML)
    }catch(exp){
        alert("Por favor, selecione um curso.")
    }
})

btnRemoverCurso.addEventListener("click",(evt)=>{
    const rs = cursoSelecionado()
    // Example with if/else conditional test
    if(rs!=undefined){
        rs.remove()
    }else{
        alert("Por favor, selecione um curso.")
    }
})

btnAdicionarNovoCursoAntes.addEventListener("click",(evt)=>{
    try{
        if(nomeCurso.value!=""){
            const novoCurso = CriarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado())
        }else{
            alert("Por favor, digite o nome do curso.")
        }
    }catch(expt){
        alert("Por favor, selecione um curso.")
    }
})

btnAdicionarNovoCursoDepois.addEventListener("click",(evt)=>{
    try{
        if(nomeCurso.value!=""){
            const novoCurso = CriarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling)
        }else{
            alert("Por favor, digite o nome do curso.")
        }
    }catch(expt){
        alert("Por favor, selecione um curso.")
    }
})