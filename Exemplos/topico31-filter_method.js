const idades = [10, 55, 48, 12, 8, 2, 18, 19, 26, 7, 32, 49, 5]

// The filter method returns only the match values/indices
const maiorIdade = idades.filter((el)=>{
    if(el >= 18){
        return el
    }
})

// The map method returns all the indices
const menorIdade = idades.map((el)=>{
    if(el < 18){
        return el
    }
})

console.log(idades)
console.log(maiorIdade)
console.log(menorIdade)