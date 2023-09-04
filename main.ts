// 1. Sistema de Gerenciamento de Biblioteca:

// Objetivo:
// Desenvolver um sistema de gerenciamento de biblioteca onde os usuários podem adicionar, pesquisar e verificar informações sobre livros.

// Conceitos de Programação Orientada a Objetos para aplicar:

// Classes para representar livros e a biblioteca.
// Encapsulamento para proteger informações dos livros.
// Interfaces para definir métodos como adicionarLivro(), pesquisarLivro(), listarLivros() etc.
// Uso de Módulos para organizar o código.
// Tratamento de exceções para lidar com situações como a tentativa de adicionar um livro já existente na biblioteca. 

class Book {
    private title: string;
    private author: string;
    private year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    };

    public getTitle(): string {
        return this.title;
    };
    public setTitle(value: string) {
        this.title = value;
    };
    public getAuthor(): string {
        return this.author;
    };
    public setAuthor(value: string) {
        this.author = value;
    };
    public getYear(): number {
        return this.year;
    };
    public setYear(value: number) {
        this.year = value;
    };
};

interface Infos {
    getInfo(): void;
}

class Section {

}

class Library{    
}

class TechnicalBook extends Book implements Infos {

    area: string;

    constructor(title: string, author: string, year: number, area: string) {
        super(title, author, year);
        this.area = area;
    };

    getInfo(): void {
        console.log(`Título: ${this.getTitle()} Autor: ${this.getAuthor()} Ano: ${this.getYear()} Area: ${this.area}`);
    }
};

class FictionBook extends Book implements Infos {

    genre: string;

    constructor(title: string, author: string, year: number, genre: string) {
        super(title, author, year);
        this.genre = genre;
    };

    getInfo(): void {
        console.log(`Título: ${this.getTitle()} Autor: ${this.getAuthor()} Ano: ${this.getYear()} Gênero: ${this.genre}`);
    }
};

const livroFiccao = new FictionBook("1984", "George Orwell", 1949, "Distopia");
const livroTecnico = new TechnicalBook("Clean Code", "Robert C. Martin", 2008, "Programação");

console.log(livroFiccao.getInfo());
console.log(livroTecnico.getInfo());

