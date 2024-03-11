class Carro{
    curso="Javascript"
    constructor(pNome, pTipo){
        // this.curso="Python"
        this.name=pNome
        if(pTipo == 1){
            this.tipo="Esportivo"
            this.velmax=300
        }else if(pTipo == 2){
            this.tipo="Utilitário"
            this.velmax=100
        }else if(pTipo == 3){
            this.tipo="Passeio"
            this.velmax=160
        }else{
            this.tipo="Militar"
            this.velmax=200
        }
    }
    getNome(){
        return this.name
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velmax
    }
    getInfo(){
        return [this.name, this.tipo, this.velmax]
    }

    setNome(pNome){
        this.name=pNome
    }
    setTipo(pTipo){
        if(pTipo == 1){
            this.tipo="Esportivo"
            this.velmax=300
        }else if(pTipo == 2){
            this.tipo="Utilitário"
            this.velmax=100
        }else if(pTipo == 3){
            this.tipo="Passeio"
            this.velmax=160
        }else{
            this.tipo="Militar"
            this.velmax=200
        }
    }

    info(){
        console.log(`Nome: ${this.name}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Vel. Max.: ${this.velmax}`)
        console.log(`---`)
    }
}

let c1 = new Carro("gol",3)
c1.info()
console.log(c1.getInfo())
console.log(c1.getNome())
console.log(c1.getTipo())
console.log(c1.getVelMax())

console.log("---")
c1.setTipo(1)
console.log(c1.getInfo())

console.log("---")
console.log(c1.curso)