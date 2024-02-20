# ESTUDOS SOBRE JAVASCRIPT

Esse documento visa a ser um caderno de estudos sobre javascript.

## ÍNDICE
1. [Instalando o Node.js no Windows;](#1-instalando-o-nodejs-no-windows)
2. [Modo restrito;](#2-modo-restrito)
3. [Declaração de variáveis (let, var const);](#3-declara%C3%A7%C3%A3o-de-vari%C3%A1veis-let-var-const)
4. [Operadores matemáticos;](#4-operadores-matem%C3%A1ticos)
5. [Operadores relacionais;](#5-operadores-relacionais)
6. [Operadores lógicos;](#6-operadores-l%C3%B3gicos)
7. [Operadores bitwise;](#7-operadores-bitwise)
8. [Pré e Pós incremento;](#8-pr%C3%A9-e-p%C3%B3s-incremento)
9. [Operação ternária;](#9-opera%C3%A7%C3%A3o-tern%C3%A1ria)
10. [Typeoff function;](#10-typeoff-function)
11. [Spread functon;](#11-spread-functon)
12. [Condicional com IF e ELSE;](#12-condicional-com-if-e-else)
13. [Condicional com Switch Case;](#13-condicional-com-switch-case)
14. [Loop com FOR;](#14-loop-com-for)
15. [FOR IN e FOR OF;](#15-varia%C3%A7%C3%B5es-do-loop-for-for-in-e-for-of)
16. [Loop WHILE;](#16-Loop-WHILE)
17. [Loop DO WHILE;](#17-Loop-DO-WHILE)
18. [Declarações CONTINUE e BREAK;](#18-Declarações-CONTINUE-e-BREAK)
19. [Funções;](#19-Funções)
---

### 1. Instalando o Node.js no Windows;
1. Acessar o site do [Node.js](https://nodejs.org/en);
2. Baixar a versão LTS mais atualizada;
3. Instalar no computador;
4. Validar que o Node.js foi instalado com o comando `node -v` no console;

Para executar o código, como por exemplo um "Hello World", devemos criar um arquivo e rodar com o comando node.

Sintaxe básica do comando node:

````sh
node arquivo.js
````

> :memo: **Note:** NODE.js é server side, portanto ele não tem acesso aos elementos do DOM. </br> Para se ter acesso aos elementos do DOM, o script deverá ser chamado por uma página HTML dentro do navegador.

Exemplo prático em ./Exemplos/topico1-hello_world.js

URL de referência:
https://youtu.be/E4DBTqgxHGM?si=RpCIPW4Xj8Yg5QEX

### 2. Modo restrito;

O modo restrito server para forçar que o dev escreva um código mais simples e mais fortemente tipado.

Para ativar o modo restrito, ou o _strict mode_, no código basta inicializarmos o script com `"use strict"`.

URL de referência:
https://youtu.be/HFOzef8k9GE?si=SfKV9rWqsBDb98YO

### 3. Declaração de variáveis (let, var const);

No JavaScript temos 3 formas de declarar uma variável, são elas: var, let e const.

1. var
    - Quando declaramos uma variável com `var`, ela será elevada ao maior nível do escopo;
    - Por exemplo, se ela for declarada dentro de uma classe ou função, ela poderá ser utilizada pela classe/função como um todo.

2. let
    - Quando declaramos uma variável com `let`, ela será utilizada somente dentro do escopo ou contexto que foi declarada;
    - Por exemplo, se ela for declarada dentro de uma validação, ela será utilizada somente dentro daquela validação e não em toda a função ou classe a qual aquela validação pertence;
3. const
    - A declaração de variável usando `const` é semelhante a declaração com `var`, porém ela não poderá sofrer alteração posterior;
    - Comumente é utilizada para instanciar um objeto ou chamar uma função;

Existe um exemplo prático em ./Exemplos/topico3-variaveis.js

URL de referência:
https://youtu.be/zRA8RkDUqH0?si=41z3TICmffqoSdoX

### 4. Operadores matemáticos;

Os operadores matemáticos ou aritméticos são os operadores para realização de calculos matemáticos:
1. Soma (`+`)
2. Subtração (`-`)
3. Multiplicação (`*`)
4. Divisão (`/`)
5. Resto ou mod (`%`)

Existe um exemplo prático em ./Exemplos/topico4-operadores_matematicos.js

URL de referência:
https://youtu.be/eDVUmGnQJ_c?si=suSyU3-whupB6adT

### 5. Operadores relacionais;
1. Maior que (`>`)
2. Maior ou igual (`>=`)
3. Menor que (`<`)
4. Menor ou igual (`<=`)
5. Igual (`==`)
    - Quando utilizamos somente o '=' ele é reconhecido como uma atribuição e não uma comparação.
6. Estritamente igual (`===`)
    - A diferença entre o '===' e o '==' é que o primeiro valida o valor, tipo e endereço de memória, e o segundo só valida o valor contido na variável.
    - Fica evidente em comparação de tipos de variáveis básicas, quando for comparado json, arrays e outros, ele considera que são itens diferentes. Objetos são considerados endereço de memória.
7. Diferente (`!=`)

O resultado final das operações de comparação (relacionais) é o retorno verdadeiro ou falso (True ou False). Com base nesse retorno é que o código vai continuar a operação.

Vale dizer também que os operadores relacionais são afetados também pelo operador de negação '!'.

Existe um exemplo prático em ./Exemplos/topico5-operadores_relacionais.js

URL de referência:
https://youtu.be/5ESHpHXFa4M?si=avK4n4iDcSbYdRcE

### 6. Operadores lógicos;
1. AND (`&&`)
    - Retorna Verdadeiro ou Falso dependendo das condições testadas.
2. OR (`||`)
    - Retorna Verdadeiro ou Falso dependendo das condições testadas;
    - Vale ressaltar que este ou, conforme é visto na tabela verdade, ele é um OU inclusivo, e não exclusivo.
3. NOT (`!`)
    - O NOT inverte o valor do que foi retornado.

**Tabela Verdade**
![alt text](.\Imagens\tabela_verdade.png)

Existe um exemplo prático em ./Exemplos/topico6-operadores_logicos.js

URL de referência: https://youtu.be/0-dgk6u9WBE?si=_VH0VJLATnBe4LLu

### 7. Operadores bitwise;
Também conhecidos como operadores "bit a bit".
1. AND (`&`)
    - Este operador realiza a comparação bit a bit dos valores apresentados, seguindo a mesma regra do operador AND da tabela verdade apresentada nos operadores lógicos.
2. OR (`|`)
    - Este operador realiza a comparação bit a bit dos valores apresentados, seguindo a mesma regra do operador OR da tabela verdade apresentada nos operadores lógicos.
3. XOR (`^`)
    - Este operador realiza a comparação bit a bit dos valores apresentados, seguindo a mesma regra do operador XOR da tabela verdade apresentada nos operadores lógicos.
4. Deslocamento para a esquerda (`<<`)
    - Este operador realiza o deslocamento dos bits para a esquerda;
    - Esta operação faz com que o valor seja dobrado o número de vezes que for declarado;
    - É possível deslocar quantos bits forem necessários.
5. Deslocamento para a direita (`>>`)
    - Este operador realiza o deslocamento dos bits para a direita;
    - Esta operação faz com que o valor seja dividido ao meio o número de vezes que for declarado;
    - É possível deslocar quantos bits forem necessários.

Existe um arquivo excel explicando a lógica dos operadores bitwise em ./Exemplos/operadores_bitwise.xlsx

Também existe um exemplo prático em ./Exemplos/topico7-operadores_bitwise.js

URL de referência: https://youtu.be/JbGf_hd6g_Q?si=qb7BHaJ9nrN3xky-

### 8. Incremento, decremento e inversão de valor;

Consideremos os operadores de infremento, ou decremento, como `++` junto a variável. O que definirá se será pré ou pós será a localização do operador a variável.
1. Incremento (`++` ou `+=X`)
    - Vai incrementar 1 ou X na variável.
2. Decremento (`--` ou `-=X`)
    - Vao decrementar 1 ou X na variável.
3. Inversão (`-X`)
    - Assim como na matemática ao multiplicar um número por -1, e o sinal do número é trocado, o mesmo ocorre com o operador de inversão.
4. Pré incremento, ou decremento (`X++` ou `X--`)
    - Neste caso o incremento será realizado antes da operação realizada.
5. Pós incremento, ou decremento (`++X` ou `--X`)
    - Neste caso o incremento será realizado após a operação realizada.

Vale reforçar que as operações de incremento e decremento realmente alteram o valor da variável, e não somente na execução das operações.

Por exemplo, se incrementarmos uma variável que tem valor 10, a variável passará a valer 11.

Obs. Caso tenhamos uma string na operação o operador `+` será considerado um operador de concatenação e não mais um incremento.

Em ambos os casos, fica mais visivel com o exemplo prático.

URL de referência: https://youtu.be/lz03-62owNY?si=oN6O3kLb7OKDRv1c

### 9. Operação ternária;

Também são conhecidos como "IF Ternários" ou "Condições Ternárias".

Ele geralmente é utilizado para simplificar um teste, uma condição.

O símbolo utilizado para realizar a operação ternária é o `?`.

A sintaxe de uma operação ternária é dividida em 3 partes `(teste lógico ? retorno se verdadeiro : retorno se falso)`.

Exemplo prático em ./Exemplos/topico9-operacao_ternaria.js

URL de referência: https://youtu.be/5JPfbLGqzXA?si=mbl5yAKNS8kxrQer

### 10. Typeof function;

Também conhecido como "Operador Unário Typeof".

Ele á uma função nativa do Javascript que retorna o tipo da variável que ele vai testar. Muito semelhante ao `type` do Python.

Em Javascript temos 4 tipos de variáveis, são elas: Number, String, Object e Boolean.

Exemplo prático em ./Exemplos/topico10-funcao_typeof.js

URL de referência: https://youtu.be/K2U22waWKGo?si=khIcUPV6sj7NpBTq

### 11. Spread functon;

Também conhecido como "Operador Spread".

O Spread é realizado utilizando os `...` (3 pontos ou reticências) e ele serve para "quebrar" um array.

Comumente é utilizado para converter HTML collections para um array, possibilitando maior controle sobre os valores dentro do array.

Um dos exemplos que será explicado é caso seja utilizado o spread em objetos iguais, nesse caso, ele considerará o último objeto declarado.

Exemplos práticos em ./Exemplos/topico11-funcao_spread.js

URL de referência: https://youtu.be/_qgObfmqokw?si=hb_Zn3ibD8l-OgEP

### 12. Condicional com IF e ELSE;

A validação de condicionais determinará qual fluxo o sistema vai trabalhar. A declaração if/else sempre fará uma validação de condições com o que for passado para ela, caso verdadeiro, executará um bloco de código, caso falso, executará outro bloco de código.

Em geral os testes das condições são utilizando as [operações relacionais](#6-operadores-l%C3%B3gicos) e [operadores lógicos](#6-operadores-l%C3%B3gicos).

**Diagramas de Exemplos**

````mermaid
---
title: Simple IF conditional test.
---
flowchart LR
    subgraph " "
    direction LR
        ns(("Start"))-->nt1["Do something"]
        nt1 --> ni1{"if(x==10)"}
        ni1 --True--> nt2["print(X = 10)"]
        nt2 --> ne(("End"))
        ni1 --False--> ne
    end
````

````mermaid
---
title: Simple IF/ELSE conditional test.
---
flowchart LR
    subgraph " "
    direction LR
        ns(("Start"))-->nt1["Do something"]
        nt1 --> ni{"if (x>y)"}
        ni --True--> nt2["Print(True)"]
        ni --False--> nt3["Print(False)"]
        nt2 --> ne(("End"))
        nt3 --> ne
    end
````

````mermaid
---
title: Simple chained IF/ELSE conditional test.
---
flowchart LR
    subgraph " "
    direction LR
        ns(("Start"))-->nt1["Do something"]
        nt1 --> ni1{"if(x>y)"}
        ni1 --True--> nt2["print(X > Y)"]
        ni1 --False--> ni2{"if(x==y)"}
        ni2 --True--> nt3["print(X = Y)"]
        ni2 --False--> nt4["print(X < Y)"]
        nt2 --> ne((End))
        nt3 --> ne((End))
        nt4 --> ne((End))
    end
````

A sintaxe padrão do IF/ELSE é desta forma:
````js
if(condição){
    Se verdadeiro, este bloco será executado.
}else{
    Se falso, este bloco será executado.
}
````

Exemplos práticos em ./Exemplos/topico12-validacao_condicoes.js

URL de referência: https://youtu.be/lDTKpamdXzc?si=rCMrTDnE_hV9IBv_

### 13. Condicional com Switch Case;

A utilização do Switch Case para validação das condicionais é semelhante ao do IF/ELSE, onde ele fará a validação da expressão que lhe for passada e encaminhará para os casos que estão declarados nele.

Será passado para o Switch a declaração que será testada e os casos que esta declaração será testada e seus blocos de código.

A sintaxe padrão do Switch/Case é desta forma:

````js
switch(declaração){
    case teste lógico:
        bloco de código
        break
    case teste lógico:
        bloco de código
        break
    default:
        blóco de código padrão
        break
}
````

**Diagrama de exemplo**
````mermaid
---
title: Simple Switch Case example
---
flowchart LR
    subgraph " "
    direction LR
    ns(("Start"))-->nt1["Do something"]
    nt1 --> nsc1{"Switch(expression)"}
    nsc1 --> nc1["Case 1"] --> ne(("End"))
    nsc1 --> nc2["Case 2"] --> ne(("End"))
    nsc1 --> nc3["Case 3"] --> ne(("End"))
    nsc1 --> nc4["Case 4"] --> ne(("End"))
    nsc1 --> ncd["Default Case"] --> ne(("End"))
    end
````

Exemplo prático em ./Exemplos/topico13-switch_case.js

URL de referência: https://youtu.be/L4dpMM3MVWY?si=P9LFYMIyp3E6hWWo

### 14. Loop com FOR;

Estruturas de loop são estruturas de repetições. Elas são utilizadas que é necessário a repetição de determinadas ações. Cada repetição é chamada de iteração.

Temos duas classificações de loop, as definidas e indefinidas.

**Definidas:** As estruturas de repetições definidas são utilizadas quando se é conhecido a quantidade de vezes que aquele loop deverá ser executado. Neste caso utiliza-se a estrutura `FOR`.

**Indefinidas:** As estruturas de repetições indefinidas são utilizadas quando não se é conhecido a quantidade de vezes que aquele loop deverá ser executado. Nestes casos pode ser utilizado tanto o `WHILE` quando o `DO WHILE`.

A sintaxe básica do loop FOR é:
````js
for(inicializador; condição; controle){
    bloco de código que será iterado
}
````

O loop FOR será executado enquanto sua condição for verdadeira, caso ela seja falsa, o loop será interrompido.

> :warning: **Warning:** É necessário se ter cuidado com a validação/condição do loop FOR para que não se tenha um loop infinito.

Exemplo prático em ./Exemplos/topico14-loop_for.js

URL de referência: https://youtu.be/qBSB5H7mCGo?si=hNfN1_TBv4NW4DDl

### 15. Variações do loop FOR (FOR IN e FOR OF);

FOR IN e FOR OF são variações do loop FOR.

**FOR IN:** O FOR IN é utilizado para percorrer objetos e arrays de uma forma simplificada. Ele fará a iteração e retornará o índice para o valor definido.

Sintaxe básica do loop FOR IN:
````js
for(valor in objeto){
    bloco de código que será iterado, onde valor é o índice da iteração.
}
````

**FOR OF:** O FOR OF também é utilizado para percorrer objetos e arrays, contudo ele retorna o valor que está localizado no índice iterado e não o índice em si como o FOR ou o FOR IN.

Sintaxe básica do loop FOR OF:
````js
for(valor of objeto){
    bloco de código que será iterado, onde valor é o item dentro do objeto.
}
````

Ambos funcionam também para coleções HTML.

Exemplo prático em ./Exemplos/topico15-for_in_for_of.js

URL de referência: https://youtu.be/WLLCmepsG6Y?si=Xe-AI_yDr18157ZZ

### 16. Loop WHILE

O loop WHILE é considerado um loop indefinido, pois é utilizado quando não se sabe a quantidade de vezes que ele deverá ser executado.

Ao contrário do loop FOR, e suas variações, o loop WHILE não realiza o incremento de forma automática. Caso seja desejado um loop finito, o incremento até chegar a sua condição deverá ser realizado dentro do bloco de código desejado.

O WHILE realiza o teste lógico e então realiza o bloco de código que está dentro dele.

````mermaid
---
title: Simple while loop diagram
---
flowchart LR
    subgraph " "
    direction TB
        ns(("Start"))
        tk1["Task"]
        tk2["Task"]
        lw{"While(Condition)"}
        wt["While Loop Task"]
        ne(("End"))

        ns --> tk1
        tk1 --> lw
        subgraph "While"
            lw --True--> wt --> lw
        end
        lw --False--> tk2
        tk2 --> ne
    end
````

A sintaxe básica do loop WHILE é:

````js
while(condição){
    bloco de código que será iterado
}
````

> :warning: **Warning:** É necessário se ter cuidado com incremento ou alteração dos dados da condição do loop WHILE para que não se tenha um loop infinito indesejado.

Exemplos práticos em ./Exemplos/topico16-loop_while.js

URL de referência: https://youtu.be/Nm6vfrLrGs8?si=tEOiqIG9aRUSaYbI

### 17. Loop DO WHILE

O loop DO WHILE também é considerado um loop indefinido, assim como o WHILE, contudo a diferença entre eles é que, o WHILE realiza o teste lógico e então realiza a atividade, já o DO WHILE realiza a atividade e então o teste lógico. Portanto no loop WHILE não se tem a garantia de que o bloco de código será executado ao menos uma vez, já no DO WHILE sim, pois ele será executado e depois o loop fará o teste da condição.

Sintaxe básica do loop DO WHILE:
````js
do{
    bloco de código que será executado
}while(condição)
````

Exemplos práticos em ./Exemplos/topico17-loop_do_while.js

URL de referência: https://youtu.be/nAS21yLt2-Q?si=v3_XG4KvDsEMhVn5

### 18. Declarações CONTINUE e BREAK

**CONTINUE:** Ao encontrar o comando CONTINUE, o loop vai pular somente aquela iteração.

**BREAK:** Ao encontrar o comando BREAK, o loop será interrompido imediatamente.

Exemplos práticos em ./Exemplos/topico18-continue_break.js

URL de referência: https://youtu.be/KRojULEQx24?si=vrMVkrI-_cSsMf6I

### 19. Funções

As funções numa linguagem de programação podem ser entendidas como blocos de código que podem ser utilizados quando necessário e por mais de uma vez.

Quando escrevemos um código, comando a comando, ele será executado do início ao fim, respeitando a ordem e as condições. Quando criamos uma função, esse bloco só será executado caso ele seja requisitado.

Tipos de função:
1. Basic function
    - Sintaxe:
    ````js
    function funcao(){ //declaração da função
        bloco de código que será executado
    }

    funcao() //chamada da função
    ````
2. Arrow function

Exemplos práticos em ./Exemplos/topico19-funcoes.js

URL de referência #1: https://youtu.be/Ig1nVMDLXns?si=DRTIdCTqZ1DGxSW-