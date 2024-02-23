//Example of "this" operator
function aluno(nome, nota){
    this.nome=nome
    this.nota=nota

    console.log(this.nome)
    console.log(this.nota)
}
aluno('Leonardo', 100)

console.log('---')
//Example that shows an error cause by misuse of "this" operator
function aluno2(nome, nota){
    this.nome=nome
    this.nota=nota

    this.funcao_anonima = function(){
        setTimeout(function(){
            console.log(this.nome) //the variable this.nome is from function aluno2, not from setTimeout
            console.log(this.nota) //the variable this.nota is from function aluno2, not from setTimeout
            console.log('###')
        }, 3000)
    
    }
    
    this.funcao_anonima2 = function(){
        setTimeout(function(){
            this.nome = 'Lucia'
            this.nota = 101
            console.log(this.nome) //the variable this.nome is now set on setTimeout function
            console.log(this.nota) //the variable this.nota is now set on setTimeout function
            console.log(nome)
            console.log(nota)
            console.log('###')
        }, 3000)
    }

    this.funcao_arrow = function(){
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        }, 3000)
    }
}

let obj_aluno = new aluno2('Leonardo', 100)
obj_aluno.funcao_anonima()
console.log('...') //This console.log() will be show on console before the functions are called. This behavior is cause by setTimeout internal function.
obj_aluno.funcao_anonima2()

//Example how to bypass the context this from father function to son function. In this case, from function aluno2 to setTimeout internal function.
//This new behavior is caused by arrow function, that's not affected by internal context but the fathers/external context.
obj_aluno.funcao_arrow() 