import Animal from './animal.js'

export default class Reptil extends Animal{
    private tipoEscama: string;
    private qtdcomer: number;
    private movimentar: string;

    constructor(
        nome: string,
        idade: number,
        peso: number,
        tipoEscama: string,
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

        if (qtdcomer > 1) {
            throw new Error("A quantidade a ser comida não pode ser maior que 1!");
        }

        super(nome,idade,peso,'reptil');
        this.tipoEscama = tipoEscama;
        this.qtdcomer = qtdcomer;
        this.movimentar = movimentar;
    }

    imprimeinfo(): void{
        console.log(`Tipo: ${this.getTipo()}`);
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Idade: ${this.getIdade()}`);
        console.log(`Peso: ${this.getPeso()}`);
        console.log(`Tipo de escama: ${this.tipoEscama}`);
        console.log(`Quantidade a ser comido: ${this.qtdcomer}`);
        console.log(`Movimentação: ${this.movimentar}`);
    }
}