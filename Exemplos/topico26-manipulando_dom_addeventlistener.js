function mensagem(){
    alert("Você clicou no botão usando uma função javascript")
}

const msg = (pMsg) => {
    alert("Você utilizou uma arrow function para disparar esta mensagem: " + pMsg)
}

const c3 = document.querySelector("#c3")
const c4 = document.querySelector("#c4")
const c5 = document.querySelector("#c5")

// Example of event onClick of element c3 using the mensagem function
c3.addEventListener("click", mensagem)

// Example of event onClick of element c4 using an arrow fuction to log the event by it self
c4.addEventListener("click", (evt) => {
    console.log(evt)
})

// Example of event onClick of element c5 changing the class
c5.addEventListener("click",(evt)=>{
    const el = evt.target
    el.classList.add("destaque")
})

// Example how to add a classe on all html elements that has class familia
const familia = [...document.querySelectorAll(".nome")]

familia.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const el_evt = evt.target
        el_evt.classList.add("destaque")
    })
})