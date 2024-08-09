const Pilha = require('./script.js');
const testePilha = new Pilha();

//adiciona itens ao topo.
testePilha.push('João');
testePilha.push('Maria');
testePilha.push('Pedro');

//retorna o tamanho da pilha.
testePilha.tamanho();

//retorna o item do topo da pilha.
testePilha.peek()

//remove o item do topo.
testePilha.pop();

//esvazia a pilha.
testePilha.clear();

//retorna com true se a pilha estiver vazia.
testePilha.isEmpty();