let colocacao = 7

switch(colocacao){
    case 1:
        console.log("Primeiro lugar, ganhador de medalha de ouro.")
        break
    case 2:
        console.log("Segundo lugar, ganhador de medalha de prata.")
        break
    case 3:
        console.log("Terceiro lugar, ganhador de medalha de bronze.")
        break
    case 4: case 5: case 6:
        console.log("Não subiu ao pódio, porém ganhou um prêmio de participação.")
        break
    default:
        if(colocacao > 6 && colocacao <= 10){
            console.log("Menção Honrosa.")
        }else{
            console.log("Não subiu ao pódio.")
        }
        break
}