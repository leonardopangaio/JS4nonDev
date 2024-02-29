const idades = [10, 55, 48, 12, 8, 2, 18, 19, 26, 7, 32, 49, 5]

const maiorIdade = idades.filter((el)=>{
    if(el >= 18){
        return el
    }
})

const menorIdade = idades.map((el)=>{
    if(el < 18){
        return el
    }
})

console.log(idades)
console.log(maiorIdade)
console.log(menorIdade)