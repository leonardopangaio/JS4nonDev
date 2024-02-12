"use strict"

var var1 = 'Variável Global';

function MinhaPrimeiraFuncao(){
    console.log('Iniciando a função:')
    let var2 = 'Variavel da função com let.'
    if (var1){
        console.log('Iniciando a validação:')
        console.log('A variavel var1 antes de ser alterada é: ' + var1)
        var1 = 'Variavel Global sendo alterada dentro da função.'
        let var3 = 'Variável dentro do IF.'
        var var4 = 'Variável elevada dentro do IF.'
        console.log(var1)
        console.log(var2)
        console.log(var3)
    } else {
        console.log('Validação "senão" do bloco IF.')
        console.log('Error.')
    }
    console.log('Bloco após validação.')
    console.log(var1)
    console.log(var2)
    //se tentarmos usar a var3 aqui, teremos uma exceção sendo exibida no console.
    console.log('A variável var4 é: ' + var4 + ' e está sendo usada fora do seu escopo inicial.')
};

const TesteChamaFuncao = MinhaPrimeiraFuncao();
//se tentarmos usar a var4 aqui, teremos uma exceção sendo exibida no console.
console.log('Após a execução da função a variável var1 ficou desta forma: ' + var1)