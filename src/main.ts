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
    name:string;

    exhibitionSetup ():void;
    exhibitionAssembly ():void;
};

class HistoricalObject extends MuseumObject {
    type: string;
    constructor (name:string, id:number, type:string) {
        super();
        this.type = type;
    };
};

class ArtObject extends MuseumObject {
    type: string;
    constructor (name:string, id:number, type:string) {
        super();
        this.type = type;
    };
};

class HistoricalExhibition implements Exhibition {
    type:string = "historical";
    name: string;

    constructor (name:string) {
        this.name = name;
    };

    exhibitionSetup(): void {
        
    };

    exhibitionAssembly(): void {
        
    };
};

class ArtExhibition implements Exhibition {
    type: string = "art";
    name: string;

    constructor (name:string) {
        this.name = name;
    }

    exhibitionSetup(): void {
        
    };

    exhibitionAssembly(): void {
        
    };
};

class Museum {
    exhibitions: HistoricalExhibition[] | ArtExhibition[];
    objects: HistoricalObject[] | ArtObject[];
};