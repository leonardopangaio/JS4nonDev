const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c7_1 = document.querySelector("#c7_1")

console.log(caixa1)
console.log(btn_c)
console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)
console.log(btn_c[0].children)

if(btn_c[0].children.length > 0){
    console.log("Elemento possui filhos.")
}else{
    console.log("Elemento NÃO possui filhos.")
}

// Example of how to check if an element has child elements
console.log(caixa1.children.length > 0 ? 'Possui filhos' : "NÃO possui filhos")

// Example of how to manipulate elements using the relation between then
console.log(caixa1.firstElementChild.innerHTML = "Teste")

// Example of how to manipulate elements, using their relation, by the list/HTML collection way
console.log(caixa1.children[2].innerHTML = "Teste")

// Example of how to get the parent node of an element
console.log(c7_1.parentNode.parentNode)