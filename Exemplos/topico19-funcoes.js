//Basic function example
function olaMundo(){
    console.log('Olá Mundo!')
}

function mudaTexto(){
    let d1=document.getElementById("d1")
    let d2=document.getElementById("d2")
    let d3=document.getElementById("d3")

    d1.innerHTML('Texto alterado')
    d2.innerHTML('Texto alterado')
    d3.innerHTML('Texto alterado')
}

olaMundo()
mudaTexto()