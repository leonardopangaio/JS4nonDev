class Veiculo{ //Example of an abstract class declaration in JS
    constructor(){
        if(this.constructor===Veiculo){ //This is an way to forbid the implementation of this class
            throw new TypeError("Não é possível implementar uma classe abstrata.") 
        }
        if(this.ligar===undefined){ //This is an way to force this method implementation
            throw new TypeError("É obrigatório a implementação do método ligar.")
        }
        if(this.desligar===undefined){
            throw new TypeError("É obrigatório a implementação do método desligar.")
        }
        this.portas=4
        this.rodas=4
        this.freio="ABS"
        this.cambio="CVT"
        this.ligado=false
    }
}

class Carro extends Veiculo{
    constructor(tipo,estagioTurbo){
        super()
        this.turbo=new Turbo(estagioTurbo)
        if(tipo==1){
            this.velMax=120
            this.nome="normal"
        }else if(tipo==2){
            this.velMax=160
            this.nome="esportivo"
        }else if(tipo==3){
            this.velMax=200
            this.nome="super esportivo"
        }
        this.velMax+=this.turbo.pot
    }
    info(){
        console.log(this.nome)
        console.log(this.turbo.pot)
        console.log(this.velMax)
        console.log(this.portas)
        console.log(this.rodas)
        console.log(this.freio)
        console.log(this.cambio)
        console.log(this.ligado)
        console.log('---')
    }
    ligar(){
        this.ligado=true
    }
    desligar(){
        this.ligado=false
    }
}

class Turbo{
    constructor(e){
        if(e==0){
            this.pot=0
        }else if(e==1){
            this.pot=50
        }else if(e==2){
            this.pot=75
        }else if(e==3){
            this.pot=100
        }
    }
}

class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4,estagioTurbo)        
        this.velMax=300+this.turbo.pot
        this.nome="Esportivo Especial"
        this.tipoInfo=2
    }
    info(){ //Polimorphism of method info()
        if(this.tipoInfo==1){
            super.info() //Invoking the parent class method
        }else{
            console.log(`Nome.....: ${this.nome}`)
            console.log(`Potência.: ${this.turbo.pot}`)
            console.log(`Vel. Max.: ${this.velMax}`)
            console.log(`Portas: ${this.portas}`)
            console.log(`Rodas: ${this.rodas}`)
            console.log(`Freios: ${this.freio}`)
            console.log(`Câmbio: ${this.cambio}`)
            console.log(`Ligado: ${this.ligado?"Sim":"Não"}`)
            console.log('---')
        }
    }
}


const c1=new Carro(1,0)
const c2=new Carro(1,1)
const c3=new CarroEspecial(3)

c1.info()
c2.info()
c3.ligar()
c3.info()