export default class Animal {
    nome;
    idade;
    peso;
    tipo;
    constructor(nome, idade, peso, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.tipo = tipo;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getIdade() {
        return this.idade;
    }
    getPeso() {
        return this.peso;
    }
    getTipo() {
        return this.tipo;
    }
}
//# sourceMappingURL=animal.js.map