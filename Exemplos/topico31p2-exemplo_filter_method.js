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

const CriarNovoCurso = (curso)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id","c"+indice)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=curso

    const comandos=document.createElement("div")
    comandos.setAttribute("class","comandos")

    const rb=document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

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

function radioSelecionado(){
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    const rs = todosRadios.filter((ele, ind, arr)=>{
        return ele.checked
    })
    return rs[0]
}

btnCursoSelecionado.addEventListener("click",(evt)=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    let rs = todosRadios.filter((ele, ind, arr)=>{
        return ele.checked
    })
    rs = rs[0]

    // Example with try/catch error handler
    try{
        // const cursoSelecionado = rs.parentNode.parentNode.firstChild.textContent
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert("Curso selecionado: " + cursoSelecionado)
        // console.log(rs)
        // console.log(cursoSelecionado)
    }catch(exp){
        alert("Por favor, selecione um curso.")
    }
})

btnRemoverCurso.addEventListener("click",(evt)=>{
    const rs = radioSelecionado()
    // Example with if/else conditional test
    if(rs!=undefined){
        const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()
    }else{
        alert("Por favor, selecione um curso.")
    }
})

btnAdicionarNovoCursoAntes.addEventListener("click",(evt)=>{
    const rs = radioSelecionado()
    
    try{
        if(nomeCurso.value!=""){
            const cursoSelecionado = rs.parentNode.parentNode
            const novoCurso = CriarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado)
        }else{
            alert("Por favor, digite o nome do curso.")
        }
    }catch(expt){
        alert("Por favor, selecione um curso.")
    }
})

btnAdicionarNovoCursoDepois.addEventListener("click",(evt)=>{
    const rs = radioSelecionado()

    try{
        if(nomeCurso.value!=""){
            const cursoSelecionado = rs.parentNode.parentNode
            const novoCurso = CriarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling)
        }else{
            alert("Por favor, digite o nome do curso.")
        }
    }catch(expt){
        alert("Por favor, selecione um curso.")
    }
})