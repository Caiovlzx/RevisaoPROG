export default abstract class Animal {
    private nome;
    private idade;
    private peso;
    private tipo;
    constructor(nome: string, idade: number, peso: number, tipo: string);
    getNome(): string;
    setNome(nome: string): void;
    getIdade(): number;
    getPeso(): number;
    getTipo(): string;
    abstract imprimeinfo(): void;
}
//# sourceMappingURL=animal.d.ts.map