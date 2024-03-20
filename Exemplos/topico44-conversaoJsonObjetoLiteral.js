const pessoa={
    nome:"Bruno",
    canal:"CFB Cursos",
    curso:"Javascript",
    aulas:{
        aula1:"Introdução",
        aula2:"Variáveis",
        aula3:"Condicional"
    }
}

const pessoa_json=JSON.stringify(pessoa) //Converts object to string
const pessoa_string='{"nome":"Bruno","canal":"CFB Cursos","curso":"Javascript","aulas":{"aula1":"Introdução","aula2":"Variáveis","aula3":"Condicional"}}'

const pessoa_json2=JSON.parse(pessoa_string) //Converts string to object

console.log(pessoa)
console.log(pessoa_json)
console.log(pessoa_string)
console.log(pessoa_json2)
console.log("---")
console.log(typeof(pessoa))
console.log(typeof(pessoa_json))
console.log(typeof(pessoa_string))
console.log(typeof(pessoa_json2))