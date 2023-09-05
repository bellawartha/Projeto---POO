"use strict";
// Sistema de Museu Virtual:
// Crie classes para representar diferentes exposições em um museu virtual, abrangendo arte, história e ciência.
// Use herança para representar diferentes categorias de exposições.
// Implemente interfaces para permitir que os visitantes naveguem pelas exposições e aprendam mais sobre os itens exibidos.
// Utilize polimorfismo para exibir informações detalhadas sobre cada item da exposição.
class MuseumObject {
}
;
;
;
class HistoricalObject extends MuseumObject {
    constructor(name, id, type) {
        super();
        this.type = type;
    }
    ;
}
;
class ArtObject extends MuseumObject {
    constructor(name, id, type) {
        super();
        this.type = type;
    }
    ;
}
;
class HistoricalExhibition {
    constructor(name) {
        this.type = "historical";
        this.name = name;
    }
    ;
    exhibitionSetup() {
    }
    ;
    exhibitionAssembly() {
    }
    ;
}
;
class ArtExhibition {
    constructor(name) {
        this.type = "art";
        this.name = name;
    }
    exhibitionSetup() {
    }
    ;
    exhibitionAssembly() {
    }
    ;
}
;
class Museum {
}
;
