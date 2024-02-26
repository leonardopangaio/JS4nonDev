const caixa1 = document.querySelector("#caixa1")
// const c1 = document.querySelector("#c1")
const c1Array = [...document.querySelectorAll(".c1")]

caixa1.addEventListener("click", (evt)=>{
    console.log(evt)
})

// c1.addEventListener("click", (evt)=>{
//     evt.stopPropagation()
// })

c1Array.map((el)=>{
    el.addEventListener("click", (evt)=>{
        evt.stopPropagation()
    })
})
