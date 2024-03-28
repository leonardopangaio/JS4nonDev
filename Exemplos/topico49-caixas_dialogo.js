const btn_alert=document.getElementById("btn_alert")
const btn_confirm=document.getElementById("btn_confirm")
const btn_prompt=document.getElementById("btn_prompt")

btn_alert.addEventListener("click",(evt)=>{
    alert("Mensagem de alerta.")
})

btn_confirm.addEventListener("click",(evt)=>{
    const result=confirm("Você concorda?")
    if(result){
        console.log("Você concordou.")
    }else{
        console.log("Você não concordou.")
    }
})

btn_prompt.addEventListener("click",(evt)=>{
    const result=prompt("Qual o seu nome?", "Pangaio")
    if(result==null){
        console.log("Você não disse o seu nome.")
    }else{
        console.log(`Seu nome é ${result}`)
    }
})