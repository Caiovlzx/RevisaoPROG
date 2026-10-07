import Animal from './animal.js'

export default class Mamifero extends Animal{
    private tipoPelo: string;
    private qtdcomer: number;
    private movimentar: string;

    constructor(
        nome: string,
        idade: number,
        peso: number,
        tipoPElo: string,
        qtdcomer: number,
        movimentar: string
    ){
        if (idade <= 0) {
            throw new Error("A idade não pode ser negativa!");
        }

        if (peso <= 0) {
            throw new Error("O peso não pode ser negativo!");
        }

        if (nome === "") {
            throw new Error("O nome não pode ser vazio!");
        }

        super(nome,idade,peso,'mamifero');
        this.tipoPelo = tipoPElo;
        this.qtdcomer = qtdcomer;
        this.movimentar = movimentar;
    }

    imprimeinfo(): void{
        console.log(`Tipo: ${this.getTipo()}`);
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Idade: ${this.getIdade()}`);
        console.log(`Peso: ${this.getPeso()}`);
        console.log(`Tipo de pelo: ${this.tipoPelo}`);
        console.log(`Quantidade a ser comido: ${this.qtdcomer}`);
        console.log(`Movimentação: ${this.movimentar}`);
    }
}