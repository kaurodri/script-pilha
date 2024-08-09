class Pilha {
    //inicializa a pilha como um array vazio.
    constructor() {
        this.itens = [];
    }

    push(elemento) {
        //adiciona o elemento ao final do array (topo da pilha).
        this.itens.push(elemento);
    }

    //remove e retorna o último elemento do array (topo da pilha).
    pop() {
        if (this.isEmpty()) { //verifica se a pilha está vazia.
            return "A pilha está vazia!";
        }
        return this.itens.pop();
    }

    //método para ver o item do topo da pilha sem removê-lo.
    peek() {
        if (this.isEmpty()) {
            return "A pilha está vazia!";
        }
        return this.itens[this.itens.length - 1];
    }

    isEmpty() {
        //retorna verdadeiro se a pilha não tiver itens.
        return this.itens.length === 0;
    }

    tamanho() {
        return this.itens.length;
    }
    
    clear() { //esvaziar pilha.
        this.itens = [];
    }
}
module.exports = Pilha;