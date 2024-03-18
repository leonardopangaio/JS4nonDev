const res=document.querySelector(".res")
const btn_add=document.querySelector("#btn_add")

let pessoas = []

const Pessoa={
    nome:"Leonardo",
    idate:37,
    getNome:function(){
        return this.nome
    },
    setNome:function(pnome){
        this.nome=pnome
    },
    getIdade:function(){
        return this.idade
    },
    setIdade:function(pidade){
        this.idade=pidade
    },
    init: function(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        // return this; // GPT code
    }
}

const p2=Pessoa
const p3=Pessoa

p3.nome="Lucia"
p2["nome"]="Isis"
Pessoa.setNome("Hera")

console.log(Pessoa.nome)
console.log(p2.getNome())
console.log(p3.nome)
console.log(p3)

const addPessoa=()=>{
    res.innerHTML=""
    pessoas.map((i)=>{
        const div=document.createElement("div")
        div.setAttribute("class","pessoa")
        div.innerHTML=`Nome: ${i.getNome()}<br/>Idade: ${i.getIdade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener("click",(evt)=>{
    const f_pessoa=document.querySelector("#f_nome")
    const f_idade=document.querySelector("#f_idade")
    // let pe = Pessoa.init(f_nome.value,f_idade.value) // at this point, the code breake, because the literal object methods doesn't return it-self
    // let novaPessoa = Object.create(Pessoa).init(f_nome.value, f_idade.value) // GPT code
    // let novaPessoa = Pessoa.init(f_nome.value, f_idade.value) // GPT changed code
    Pessoa.init(f_nome.value, f_idade.value)
    let novaPessoa = Pessoa
    pessoas.push(novaPessoa)
    f_nome.value=""
    f_idade.value=""
    f_nome.focus()
    console.log(pessoas)
    addPessoa()
})