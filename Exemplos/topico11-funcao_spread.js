let n1=[10,20,30]
let n2=[11,22,33,44,55]
let n3,n4,n5,n6

n3=n1
n4=[...n1]

n5=[n1,n2]
n6=[...n1,...n2]

console.log("O valor de n1 é: " + n1)
console.log("O valor de n2 é: " + n2)
console.log("O valor de n3 é: " + n3)
console.log("O valor de n4 é: " + n4)
console.log("O valor de n5 é: " + n5)
console.log("O valor de n6 é: " + n6)
//---------------------------------------------------------------------------
console.log("---------------------------------------------------------------------------")
let player1={Nome:"Leonardo", Idade:37, Energia:100, Vidas:3, Classe:"Mago"}
let player2={Nome:"Lucia", Idade:36, Energia:100, Vidas:5, Classe:"Cozinheira"}
let player3={...player1, ...player2}

let player4={Nome: "Isis", Idade:4, Energia:1000, vidas:1, Classe:"SRD", Velocidade:150}
let MasterPlayer={Velocidade:1000, Classe:"Master", Destresa: 1000, Magia: 1000, Energia: 1000, Vidas: 100, Carga: 1000}
let player5={...player1, ...player2, ...player4, ...MasterPlayer}

// console.log("Player 3: " + player3)
// console.log("Player 5: " + player5)
console.log(player3)
console.log(player5)
//---------------------------------------------------------------------------
console.log("---------------------------------------------------------------------------")
const soma=(v1,v2,v3)=>{
    return v1+v2+v3
}
console.log(soma(1,2,3))

let valores=[1,2,3]
console.log(soma(valores))
console.log(soma(...valores))
//---------------------------------------------------------------------------
console.log("---------------------------------------------------------------------------")
const objs1=document.getElementsByTagName("div")
const objs2=[...document.getElementsByTagName("div")]

console.log(objs1)
console.log(objs2)

objs2.forEach(element => {
    console.log(element)
});

objs1.forEach(element => {
    console.log(element)
});

// Uncaught TypeError TypeError: objs1.forEach is not a function
//     at <anonymous> (c:\GitLab_RDSL\JavaScriptStudies\Exemplos\topico11-funcao_spread.js:53:7)    topico11-funcao_spread.js:53
// <anonymous> @ c:\GitLab_RDSL\JavaScriptStudies\Exemplos\topico11-funcao_spread.js:53:7

// this error occurred because objs1 is not an array, so this function dont belong to it.