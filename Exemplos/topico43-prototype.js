const Nave=function(energia){
    this.energia=energia
    this.disparos=100
}

const n1=new Nave(100)

Nave.prototype.vidas=3
Nave.prototype.disparar=function(){
    if(this.disparos > 0){
        this.disparos--
    }
}
Nave.prototype.carregar=()=>{
    if(this.disparos < 100){
        this.disparos++
    }
}

n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()

n1.carregar()
n1.carregar()

console.log(Nave)
console.log(n1)
console.log(n1.vidas)
console.log(n1.disparos)

//Is more intersting to see this example with the html file, because the browser console shows more important information to explain better