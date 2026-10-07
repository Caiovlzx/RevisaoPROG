import Animal from './animal.js'

export default class Ave extends Animal{
    private envergadura: number;
    private qtdcomer: number;
    private movimentar: string;

    constructor(
        nome: string,
        idade: number,
        peso: number,
        envergadura: number,
        qtdcomer: number,
        movimentar: string
    ){
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

        super(nome,idade,peso,'ave');
        this.envergadura = envergadura;
        this.qtdcomer = qtdcomer;
        this.movimentar = movimentar;
    }

    imprimeinfo(): void{
        console.log(`Tipo: ${this.getTipo()}`);
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Idade: ${this.getIdade()}`);
        console.log(`Peso: ${this.getPeso()}`);
        console.log(`Envergadura: ${this.envergadura}`);
        console.log(`Quantidade a ser comido: ${this.qtdcomer}`);
        console.log(`Movimentação: ${this.movimentar}`);
    }
}
