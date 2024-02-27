//Declara uma constante chamada "variavel1" e atribui a ela o valor inicial "valor somente leitura". Como é uma constante, seu valor não pode ser alterado posteriormente.//
const variavel1 = "valor somente leitura";
//Declara uma variável chamada "variavel2" usando a palavra-chave var e atribui a ela o valor inicial "valor editável". Essa variável pode ser modificada posteriormente.//
var variavel2 = "valor editavel";
//Inicia um bloco de código a ser testado para erros.//
try {
// Tenta atribuir um novo valor à constante "variavel1". No entanto, como é uma constante, isso resultará em um erro.//
    variavel1 = "valor não permitido";
//Se a atribuição acima fosse bem-sucedida, essa linha imprimiria a mensagem de log informando sobre a alteração da variável1. No entanto, como há um erro, esta linha não será executada.//
    console.log("A variavel1 foi alterada para: ", variavel1);
//Inicia um bloco de código a ser executado caso ocorra um erro dentro do bloco try.//
} catch (e) {
// Se ocorrer um erro durante a tentativa de modificar a variável1, esta linha imprimirá uma mensagem de erro no console, indicando que houve um erro e exibindo o próprio erro (e).//
    console.error("ops! Ocorreu o erro: ", e);
}
//Inicia um bloco de código a ser testado para erros.//
try {
//Tenta atribuir um novo valor à variável2.//
    variavel2 = "valor permitido";
//Se a atribuição acima for bem-sucedida, esta linha imprimirá a mensagem de log informando sobre a alteração da variável2.//
    console.log("A variavel2 foi alterada para: ", variavel2);
//Inicia um bloco de código a ser executado caso ocorra um erro dentro do bloco try. Neste caso, como a atribuição à variável2 é permitida, esse bloco não será executado.//
} catch (e) {
//Se ocorrer um erro durante a tentativa de modificar a variável2, esta linha imprimirá uma mensagem de erro no console, indicando que houve um erro e exibindo o próprio erro (e). No entanto, como a modificação é permitida, esta linha não será executada.//
    console.error("ops! Ocorreu o erro: ", e);

}
