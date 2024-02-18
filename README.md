# ESTUDOS SOBRE JAVASCRIPT

## ÍNDICE
1. [Instalando o Node.js no Windows;](https://github.com/leonardopangaio/JavaScriptStudies?tab=readme-ov-file#1-instalando-o-nodejs-no-windows)
2. [Modo restrito;](https://github.com/leonardopangaio/JavaScriptStudies?tab=readme-ov-file#2-modo-restrito)
3. [Declaração de variáveis (let, var const);](https://github.com/leonardopangaio/JavaScriptStudies?tab=readme-ov-file#3-declara%C3%A7%C3%A3o-de-vari%C3%A1veis-let-var-const)
4. [Operadores matemáticos;](https://github.com/leonardopangaio/JavaScriptStudies?tab=readme-ov-file#4-operadores-matem%C3%A1ticos)
5. [Operadores relacionais;](https://github.com/leonardopangaio/JavaScriptStudies?tab=readme-ov-file#5-operadores-relacionais)
6. [Operadores lógicos;](https://github.com/leonardopangaio/JavaScriptStudies?tab=readme-ov-file#6-operadores-l%C3%B3gicos)
7. [Operadores bitwise;](https://github.com/leonardopangaio/JavaScriptStudies?tab=readme-ov-file#7-operadores-bitwise)
8. [Pré e Pós incremento;](https://github.com/leonardopangaio/JavaScriptStudies?tab=readme-ov-file#8-pr%C3%A9-e-p%C3%B3s-incremento)
9. [Operação ternária;](https://github.com/leonardopangaio/JavaScriptStudies?tab=readme-ov-file#9-opera%C3%A7%C3%A3o-tern%C3%A1ria)
10. [Typeoff function;](https://github.com/leonardopangaio/JavaScriptStudies?tab=readme-ov-file#10-typeoff-function)
11. [Spread functon;](https://github.com/leonardopangaio/JavaScriptStudies?tab=readme-ov-file#11-spread-functon)
12. [Condicional com IF e Else;](https://github.com/leonardopangaio/JavaScriptStudies?tab=readme-ov-file#12-condicional-com-if-e-else)
13. [Condicional com Switch Case;](https://github.com/leonardopangaio/JavaScriptStudies?tab=readme-ov-file#13-condicional-com-switch-case)
14. [Loop com FOR;](https://github.com/leonardopangaio/JavaScriptStudies?tab=readme-ov-file#14-loop-com-for)

---

### 1. Instalando o Node.js no Windows;
1. Acessar o site do [Node.js](https://nodejs.org/en);
2. Baixar a versão LTS mais atualizada;
3. Instalar no computador;
4. Validar que o Node.js foi instalado com o comando `node -v` no console;

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

URL de referência: https://youtu.be/_qgObfmqokw?si=hb_Zn3ibD8l-OgEP

### 12. Condicional com IF e Else;

### 13. Condicional com Switch Case;

### 14. Loop com FOR;

