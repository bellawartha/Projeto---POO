"use strict";
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
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    ;
    getTitle() {
        return this.title;
    }
    ;
    setTitle(value) {
        this.title = value;
    }
    ;
    getAuthor() {
        return this.author;
    }
    ;
    setAuthor(value) {
        this.author = value;
    }
    ;
    getYear() {
        return this.year;
    }
    ;
    setYear(value) {
        this.year = value;
    }
    ;
}
;
class Section {
}
class Library {
}
class TechnicalBook extends Book {
    constructor(title, author, year, area) {
        super(title, author, year);
        this.area = area;
    }
    ;
    getInfo() {
        console.log(`Título: ${this.getTitle()} Autor: ${this.getAuthor()} Ano: ${this.getYear()} Area: ${this.area}`);
    }
}
;
class FictionBook extends Book {
    constructor(title, author, year, genre) {
        super(title, author, year);
        this.genre = genre;
    }
    ;
    getInfo() {
        console.log(`Título: ${this.getTitle()} Autor: ${this.getAuthor()} Ano: ${this.getYear()} Gênero: ${this.genre}`);
    }
}
;
const livroFiccao = new FictionBook("1984", "George Orwell", 1949, "Distopia");
const livroTecnico = new TechnicalBook("Clean Code", "Robert C. Martin", 2008, "Programação");
console.log(livroFiccao.getInfo());
console.log(livroTecnico.getInfo());
