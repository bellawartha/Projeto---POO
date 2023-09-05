// Sistema de Museu Virtual:

// Crie classes para representar diferentes exposições em um museu virtual, abrangendo arte, história e ciência.
// Use herança para representar diferentes categorias de exposições.
// Implemente interfaces para permitir que os visitantes naveguem pelas exposições e aprendam mais sobre os itens exibidos.
// Utilize polimorfismo para exibir informações detalhadas sobre cada item da exposição.

abstract class MuseumObject {
    name: string;
    id: number;
};

interface InfosObject {
    infosObject () : void;
};

interface Exhibition {
    type:string;

    exhibitionSetup ():void;
    exhibitionAssembly ():void;
};

class HistoricalObject extends MuseumObject {
    constructor (name:string, id:number, type:string) {
        super();

    };
};

class ArtObject extends MuseumObject {
    constructor (name:string, id:number, type:string) {
        super();

    };
};

class HistoricalExhibition implements Exhibition {
    type:string = "historical";

    exhibitionSetup(): void {
        
    };

    exhibitionAssembly(): void {
        
    };
};

class ArtExhibition implements Exhibition {
    type: string = "art";

    exhibitionSetup(): void {
        
    };

    exhibitionAssembly(): void {
        
    };
};

class Museum {
    exhibitions: HistoricalExhibition[] | ArtExhibition[];
    objects: HistoricalObject[] | ArtObject[];

};