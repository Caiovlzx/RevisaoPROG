export default abstract class Animal{
    private nome: string;
    private idade: number;
    private peso: number;
    private tipo: string;

constructor(
    nome: string,
    idade: number,
    peso: number,
    tipo: string
){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.tipo = tipo;
}


getNome(): string{
    return this.nome
}

setNome(nome:string): void{
    this.nome= nome;
}

getIdade(): number{
    return this.idade
}

getPeso(): number{
    return this.peso
}

getTipo(): string{
    return this.tipo

}

abstract imprimeinfo(): void;   

}