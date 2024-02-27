// Cria uma matriz (ou array) chamada "matriz" contendo cinco elementos de strings: "vetor1", "vetor2", "vetor3", "vetor4" e "vetor5". 
var matriz = ["vetor1","vetor2","vetor3","vetor4","vetor5",]
// Declara e inicializa uma variável chamada "posicao" com o valor 0.
var posicao = 0;
// Inicia um loop while que continua enquanto a variável "posicao" for menor do que o comprimento da matriz.
while (posicao < matriz.length) {
// Imprime o elemento atual da matriz, localizado na posição atual especificada pela variável "posicao", no console.
    console.log(matriz[posicao]);
// Incrementa a variável "posicao" em 1 após cada iteração do loop, permitindo que o loop percorra todos os elementos da matriz.
    posicao++;

}