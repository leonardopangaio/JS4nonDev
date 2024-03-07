const cores=["Azul","Amarelo","Verde","Vermelho",["Claro","Escuro","Tonalizado"]]
const cursos=["SQL","Python","Javascript","HTML","CSS","Git",cores]

console.log(cursos) // It'll show all the collection
console.log("---")
console.log(cursos[1]) // It'll show Python
console.log("---")
console.log(cursos[6]) // It'll show cores collection
console.log("---")
console.log(cursos[6][2]) // It'll show Verde
console.log("---")
console.log(cursos[6][4]) // It'll show the inner cores collection
console.log("---")
console.log(cursos[6][4][0]) // It'll show Claro

console.log("---")
const colecao=["Leonardo", 2023, [1,2,3], "1986", 122.5]
console.log(colecao)
console.log("---")
colecao.pop() // This will remove the last item on array
colecao.push("Lucia") // This will add Lucia on the last position of array
console.log(colecao)
console.log("---")
colecao.shift() // This will remove the first item on array
colecao.unshift("Apolo") // This will add Apolo on first position of array
console.log(colecao)
console.log("---")
colecao[1]="2024/07/17" // This will add 2024/07/17 on position 1 (2nd position) of array
console.log(colecao)
console.log("---")
colecao[5]="Isis e Hera" // This will add "Isis e Hera" on the 5 position
console.log(colecao)

console.log("---")
let numeros=[0,1,2,3,4,5,6]
console.log(numeros[-1])

console.log("---")
let valores=[1,2,3]
const op=[
    (val)=>{
        let res=0
        for(v of val){
            res+=v
        }
        return res
    },
    (val)=>{
        let res=1
        for(v of val){
            res*=v
        }
        return res
    },
    (val)=>{
        for(v of val){
            console.log(v)
        }
    }
]

console.log(op[0](valores))
console.log("...")
console.log(op[1](valores))
console.log("...")
op[2](valores)
console.log("...")