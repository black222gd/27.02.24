//Define uma função chamada sortear usando uma função de seta (arrow function).//
const sortear = () => {
//Declara uma matriz (array) chamada nomes contendo 10 elementos de strings.//  
    let nomes = ["NEMO1","NEMO2","NEMO3","NEMO4","NEMO5","NEMO6","NEMO7","NEMO8","NEMO9","NEMO10"];
// Declara uma variável h1Nome que guarda uma referência ao elemento HTML com o id "nome". //   
    let h1Nome = document.getElementById("nome");
// Declara uma variável booleana achouNumero e a inicializa como false.//    
    let achouNumero = false;
//Declara uma variável numeroSorteado sem atribuir um valor inicial.//
    let numeroSorteado;
// Inicia um loop while que continuará enquanto a variável achouNumero for false.//   
    while (achouNumero == false){
//Gera um número aleatório entre 0 e 99 e atribui-o à variável numeroSorteado.//
        numeroSorteado = Math.floor(Math.random() * 100);
//Verifica se o número sorteado é menor que o comprimento da matriz nomes e, se for, muda o valor da variável achouNumero para true, encerrando o loop.//
        if (numeroSorteado < nomes.length) {
            achouNumero = true;
        }
    }
//Inicia uma estrutura switch com base no valor da variável numeroSorteado. //
switch (numeroSorteado) {
// Cada case no switch verifica se numeroSorteado é igual a um determinado número e executa o bloco de código correspondente. Ele atualiza o texto do elemento h1Nome com o nome correspondente na matriz nomes.//
    case 0:
//Este código atribui o valor de um elemento específico da matriz nomes à propriedade innerText do elemento HTML h1Nome. O índice desse elemento é determinado pelo valor da variável numeroSorteado. Em resumo, esta linha exibe o nome correspondente ao número sorteado na interface do usuário.//
        h1Nome.innerText = nomes[numeroSorteado];
//A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente.//
        break;
//A palavra-chave case é usada em uma estrutura switch para especificar um valor ou uma condição a ser comparada com a expressão do switch.//
    case 1:
//Este código atribui o valor de um elemento específico da matriz nomes à propriedade innerText do elemento HTML h1Nome. O índice desse elemento é determinado pelo valor da variável numeroSorteado. Em resumo, esta linha exibe o nome correspondente ao número sorteado na interface do usuário.//
        h1Nome.innerText = nomes[numeroSorteado];
//A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente.//
         break;
//A palavra-chave case é usada em uma estrutura switch para especificar um valor ou uma condição a ser comparada com a expressão do switch.//
    case 2:
//Este código atribui o valor de um elemento específico da matriz nomes à propriedade innerText do elemento HTML h1Nome. O índice desse elemento é determinado pelo valor da variável numeroSorteado. Em resumo, esta linha exibe o nome correspondente ao número sorteado na interface do usuário.//
        h1Nome.innerText = nomes[numeroSorteado];
//A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente.//
        break;
//A palavra-chave case é usada em uma estrutura switch para especificar um valor ou uma condição a ser comparada com a expressão do switch.//
    case 3:
//Este código atribui o valor de um elemento específico da matriz nomes à propriedade innerText do elemento HTML h1Nome. O índice desse elemento é determinado pelo valor da variável numeroSorteado. Em resumo, esta linha exibe o nome correspondente ao número sorteado na interface do usuário.//
        h1Nome.innerText = nomes[numeroSorteado];
//A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente.//
      break;
//A palavra-chave case é usada em uma estrutura switch para especificar um valor ou uma condição a ser comparada com a expressão do switch.//
    case 4:
//Este código atribui o valor de um elemento específico da matriz nomes à propriedade innerText do elemento HTML h1Nome. O índice desse elemento é determinado pelo valor da variável numeroSorteado. Em resumo, esta linha exibe o nome correspondente ao número sorteado na interface do usuário.//
        h1Nome.innerText = nomes[numeroSorteado];
//A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente.//
        break;
//A palavra-chave case é usada em uma estrutura switch para especificar um valor ou uma condição a ser comparada com a expressão do switch.//
    case 5:
//Este código atribui o valor de um elemento específico da matriz nomes à propriedade innerText do elemento HTML h1Nome. O índice desse elemento é determinado pelo valor da variável numeroSorteado. Em resumo, esta linha exibe o nome correspondente ao número sorteado na interface do usuário.//
        h1Nome.innerText = nomes[numeroSorteado];
//A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente.//
        break;
//A palavra-chave case é usada em uma estrutura switch para especificar um valor ou uma condição a ser comparada com a expressão do switch.//
    case 6:
//Este código atribui o valor de um elemento específico da matriz nomes à propriedade innerText do elemento HTML h1Nome. O índice desse elemento é determinado pelo valor da variável numeroSorteado. Em resumo, esta linha exibe o nome correspondente ao número sorteado na interface do usuário.//
        h1Nome.innerText = nomes[numeroSorteado];
//A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente.//
        break;
//A palavra-chave case é usada em uma estrutura switch para especificar um valor ou uma condição a ser comparada com a expressão do switch.//
    case 7:
//Este código atribui o valor de um elemento específico da matriz nomes à propriedade innerText do elemento HTML h1Nome. O índice desse elemento é determinado pelo valor da variável numeroSorteado. Em resumo, esta linha exibe o nome correspondente ao número sorteado na interface do usuário.//
        h1Nome.innerText = nomes[numeroSorteado];
//A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente.//
        break;
//A palavra-chave case é usada em uma estrutura switch para especificar um valor ou uma condição a ser comparada com a expressão do switch.//
    case 8:
//Este código atribui o valor de um elemento específico da matriz nomes à propriedade innerText do elemento HTML h1Nome. O índice desse elemento é determinado pelo valor da variável numeroSorteado. Em resumo, esta linha exibe o nome correspondente ao número sorteado na interface do usuário.//
        h1Nome.innerText = nomes[numeroSorteado]
//A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente. //
        break;
//A palavra-chave case é usada em uma estrutura switch para especificar um valor ou uma condição a ser comparada com a expressão do switch.//
    case 9:
//Este código atribui o valor de um elemento específico da matriz nomes à propriedade innerText do elemento HTML h1Nome. O índice desse elemento é determinado pelo valor da variável numeroSorteado. Em resumo, esta linha exibe o nome correspondente ao número sorteado na interface do usuário.//
        h1Nome.innerText = nomes[numeroSorteado];
//A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente.//
        break;
//A palavra-chave case é usada em uma estrutura switch para especificar um valor ou uma condição a ser comparada com a expressão do switch. //
    case 10:
// Este código atribui o valor de um elemento específico da matriz nomes à propriedade innerText do elemento HTML h1Nome. O índice desse elemento é determinado pelo valor da variável numeroSorteado. Em resumo, esta linha exibe o nome correspondente ao número sorteado na interface do usuário.//
        h1Nome.innerText = nomes[numeroSorteado];
//A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente. //
        break;
// Se numeroSorteado não corresponder a nenhum dos case, esta linha define o texto do elemento h1Nome como "nome nao esta na lista".//        
        default:
//Este código atribui a string "nome nao esta na lista" à propriedade innerText do elemento HTML referenciado pela variável h1Nome. Essa atribuição é feita para informar ao usuário que o nome correspondente ao número sorteado não está presente na lista de nomes fornecida.//            
            h1Nome.innerText = "nome nao esta na lista";
//  A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente.//
            break;
    }
// Atualiza o texto do elemento h1Nome para incluir o número sorteado.//
    h1Nome.innerText += " O NUMERO SORTEADO FOI:" + numeroSorteado;
}


//Resumidamente, este código gera um número aleatório, verifica se está dentro de um intervalo válido, e então atualiza o texto de um elemento HTML com base no número gerado. Se o número não corresponder a nenhum nome na lista, exibe uma mensagem de erro.//