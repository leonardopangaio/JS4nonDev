const teclasNum=[...document.querySelectorAll(".num")]
const teclasOp=[...document.querySelectorAll(".op")]
const teclaRes=document.querySelector(".res")
const display=document.getElementById("display")
const clear=document.getElementById("tcl_cl")
const tcl_res=document.getElementById("tcl_res")
const tcl_cpy=document.getElementById("tcl_cpy")
const calc_aba=document.querySelector("#calc_aba")
const calc=document.querySelector("#calc")
const id_img_aba_calc=document.querySelector("#id_img_aba_calc")

let sinal=false
let decimal=false

teclasNum.map((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal=false
        if(display.innerHTML=="0"){
            display.innerHTML=""   
        }
        if(evt.target.innerHTML==","){
            if(!decimal){
                decimal=true
                if(display.innerHTML=="0" || display.innerHTML==""){
                    display.innerHTML="0,"
                }else{
                    display.innerHTML+=evt.target.innerHTML
                }
            }
        }else{
            display.innerHTML+=evt.target.innerHTML
        }
        
    })
})

teclasOp.map((el)=>{
    el.addEventListener("click",(evt)=>{
        if(!sinal){
            sinal=true
            decimal=false
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            if(evt.target.innerHTML=="x"){
                display.innerHTML+="*"
            }else{
                display.innerHTML+=evt.target.innerHTML
            }
        }
    })
})

clear.addEventListener("click",(evt)=>{
    display.innerHTML="0"
    sinal=false
    decimal=false
})

tcl_res.addEventListener("click",(evt)=>{
    sinal=false
    decimal=false
    const res=eval(display.innerHTML)
    display.innerHTML=res
})

tcl_cpy.addEventListener("click",(evt)=>{
    navigator.clipboard.writeText(display.innerHTML)
})

calc_aba.addEventListener("click",(evt)=>{
    calc.classList.toggle("calc_exibir")
    if(calc.classList.contains("calc_exibir")){
        id_img_aba_calc.setAttribute("src","left_arrow.svg")
    }else{
        id_img_aba_calc.setAttribute("src","right_arrow.svg")
    }
})

// References:
// - https://youtu.be/HGZtgQ0isMU?si=bysjOhBr_rnTGVk9
// - https://youtu.be/gMJQnAUVM7U?si=uoibX-yOUibjCQNA
// - https://youtu.be/18kl-p6E2jE?si=lHsAM9YZD7tGXpvn
// - https://youtu.be/rGfwCknE-Q0?si=z3WqQYxDYv_G8MVP
// - https://youtu.be/IaZ6RF--r-E?si=V_EER49fwGULCKCe