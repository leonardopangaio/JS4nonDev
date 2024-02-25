const nomesTodos = [...document.getElementsByClassName("nome")]
console.log(nomesTodos)

const nomesPais = [...document.getElementsByClassName("p1")] //This also works with nome p1 class name
console.log(nomesPais)

const nomesFilhos = document.getElementsByClassName("nome f1") //This also works with just p2 class name
console.log(nomesFilhos)

nomesPais.map((e)=>{
    e.classList.add("destaque")
})

const primeiroFilho = document.getElementsByClassName("nome")[2]
console.log(primeiroFilho)