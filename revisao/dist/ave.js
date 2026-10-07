import Animal from './animal.js';
export default class Ave extends Animal {
    envergadura;
    qtdcomer;
    movimentar;
    constructor(nome, idade, peso, envergadura, qtdcomer, movimentar) {
        if (idade <= 0) {
            throw new Error("A idade não pode ser negativa!");
        }
        if (peso <= 0) {
            throw new Error("O peso não pode ser negativo!");
        }
        if (envergadura <= 0) {
            throw new Error("A envergadura não pode ser negativa!");
        }
        if (nome === "") {
            throw new Error("O nome não pode ser vazio!");
        }
        super(nome, idade, peso, 'ave');
        this.envergadura = envergadura;
        this.qtdcomer = qtdcomer;
        this.movimentar = movimentar;
    }
    imprimeinfo() {
        console.log(`Tipo: ${this.getTipo()}`);
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Idade: ${this.getIdade()}`);
        console.log(`Peso: ${this.getPeso()}`);
        console.log(`Envergadura: ${this.envergadura}`);
        console.log(`Quantidade a ser comido: ${this.qtdcomer}`);
        console.log(`Movimentação: ${this.movimentar}`);
    }
}
//# sourceMappingURL=ave.js.map