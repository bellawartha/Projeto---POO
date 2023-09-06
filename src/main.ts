// Sistema de Museu Virtual:

// Crie classes para representar diferentes exposições em um museu virtual, abrangendo arte, história e ciência.
// Use herança para representar diferentes categorias de exposições.
// Implemente interfaces para permitir que os visitantes naveguem pelas exposições e aprendam mais sobre os itens exibidos.
// Utilize polimorfismo para exibir informações detalhadas sobre cada item da exposição.


abstract class MuseumObject {
    name: string;
    id: number;
};

interface Objects {
    addObject(object: ArtObject | HistoricalObject): void;
    removeObject(name:string): void;
};

interface Infos {
    getInfos(): void;
};

interface Exhibition {
    type_: string;
    name: string;
    date: string;
    objects: ArtObject[] | HistoricalObject[];
};


// OBJETO

class ArtObject extends MuseumObject implements Infos {
    type_: string = 'Artístico';
    private artist: string;
    private year: number | string;
    private technique: string;

    constructor(name: string, id: number, artist: string, year: number | string, technique: string) {
        super();
        this.name = name;
        this.id = id;
        this.artist = artist;
        this.year = year;
        this.technique = technique;
    };

    public getName(): string {
        return this.name;
    };

    public setName(value: string) {
        this.name = value;
    };

    public getId(): number {
        return this.id;
    };

    public setId(value: number) {
        this.id = value;
    };

    public getArtist(): string {
        return this.artist;
    };

    public setArtist(value: string) {
        this.artist = value;
    };

    public getYear(): number | string {
        return this.year;
    };

    public setYear(value: number | string) {
        this.year = value;
    };

    public getTechnique(): string {
        return this.technique;
    }
    public setTechnique(value: string) {
        this.technique = value;
    }

    getInfos() {
        console.log(`Nome: ${this.getName()} Artista: ${this.getArtist()} Ano: ${this.getYear()} Técnica: ${this.getTechnique()} Tipo: ${this.type_}`);
    };

};

// EXPOSIÇÃO

class ArtExhibition implements Exhibition, Infos, Objects {
    type_: string = "art";
    name: string;
    date: string;
    objects: ArtObject[];

    constructor(name: string, date: string) {
        this.name = name;
        this.date = date;
        this.objects = [];
    };

    addObject(object: ArtObject) {
        this.objects.push(object);
    };

    addObjects(object: ArtObject[]) {
        this.objects.push(...object);
    };

    removeObject(name:string) {
        for (let obj of this.objects) {
            if (obj.name == name) {
                const index =  this.objects.indexOf(obj);
                if (index > -1) {
                    this.objects.splice(index, 1);
                    console.log (`O objeto ${obj.name} foi removido da exposição`)
                };
            };
        };
    };

    getInfos() {
        console.log(`Nome da exposição: ${this.name}`)
    };

};

// OBJETO

class HistoricalObject extends MuseumObject implements Infos {
    type_: string = 'histórico';
    private material: string;
    private year: number | string;

    constructor(name: string, id: number, material: string, year: number | string) {
        super();
        this.name = name;
        this.id = id;
        this.material = material;
        this.year = year;
    };

    public getName(): string {
        return this.name;
    };

    public setName(value: string) {
        this.name = value;
    };

    public getId(): number {
        return this.id;
    };

    public setId(value: number) {
        this.id = value;
    };

    public getMaterial(): string {
        return this.material;
    }
    public setMaterial(value: string) {
        this.material = value;
    }

    public getYear(): number | string {
        return this.year;
    };

    public setYear(value: number | string) {
        this.year = value;
    };

    getInfos() {
        console.log(`Nome: ${this.getName()} Ano: ${this.getYear()} Material: ${this.getMaterial()}  Tipo: ${this.type_}`);
    };
};

// EXPOSIÇÃO

class HistoricalExhibition implements Exhibition, Infos, Objects {
    type_: string = "historical";
    name: string;
    date: string;
    objects: HistoricalObject[];

    constructor(name: string, date: string) {
        this.name = name;
        this.date = date;
        this.objects = [];
    };

    addObject(object: HistoricalObject) {
        this.objects.push(object);
    };

    addObjects(object: HistoricalObject[]) {
        this.objects.push(...object);
    };

    removeObject(name:string) {
        for (let obj of this.objects) {
            if (obj.name == name) {
                const index =  this.objects.indexOf(obj);
                if (index > -1) {
                    this.objects.splice(index, 1);
                    console.log (`O objeto ${obj.name} foi removido da exposição`)
                };
            };
        };
    };

    getInfos() {

    };
};

// MUSEU

class Museum implements Infos, Objects {
    exhibitions: (ArtExhibition | HistoricalExhibition)[];
    objects: (ArtObject | HistoricalObject)[];

    constructor() {
        this.exhibitions = [];
        this.objects = [];
    }

    addObject(object: ArtObject | HistoricalObject) {
        this.objects.push(object);
    };

    addObjects(object: (ArtObject | HistoricalObject)[]) {
        this.objects.push(...object);
    };

    removeObject(name:string) {
        for (let obj of this.objects) {
            if (obj.name == name) {
                const index =  this.objects.indexOf(obj);
                if (index > -1) {
                    this.objects.splice(index, 1);
                    console.log (`O objeto ${obj.name} foi removido da coleção do museu`);
                };
            };
        };
    };

    addExhibition(exhibition: ArtExhibition | HistoricalExhibition) {
        this.exhibitions.push(exhibition);
    };

    addExhibitions(exhibitions: (ArtExhibition | HistoricalExhibition)[]) {
        this.exhibitions.push(...exhibitions);
    };

    getInfos() {
        console.log('O museu está com essas exposições em cartaz');
        if (this.exhibitions.length != 0) {
            for (let expo of this.exhibitions) {
                console.log(`${expo.name} ${expo.date}`);
            };
        } else {
            console.log ('Não há exposições em cartaz no momento');
        }

    };
};

// Arte
let obra1 = new ArtObject('A Última Ceia', 1, 'Leonardo DaVinci', 1498, 'Afresco');
let obra2 = new ArtObject('Mona Lisa', 2, 'Leonardo DaVinci', 1503, 'Óleo sobre tela');
let obra3 = new ArtObject('A Criação de Adão', 3, 'Michelangelo', 1512, 'Afresco');
let obra4 = new ArtObject('O Nascimento de Vênus', 4, 'Sandro Botticelli', 1486, 'Têmpera sobre tela');
let obra5 = new ArtObject('A Escola de Atenas', 5, 'Rafael Sanzio', 1510, 'Afresco');

//História

let obj1 = new HistoricalObject('Coroa de Dom Pedro II', 6, 'Metal, pedrarias e tecido', 1841);
let obj2 = new HistoricalObject('Cristo Redentor', 7, 'Estátua monumental', 1931);
let obj3 = new HistoricalObject('Carta de Pero Vaz de Caminha', 8, 'Documento histórico', 1500);
let obj4 = new HistoricalObject('Espada de Duque de Caxias', 9, 'Arma histórica', "Século XIX");

let expoArte = new ArtExhibition('A arte renascentista', 'de 11/09/2023 a 25/11/2023');
let expoHist = new HistoricalExhibition('A história do Brasil', 'de 14/08/2023 a 23/08/2023');

expoArte.addObjects([obra1, obra2, obra3, obra4, obra5]);
expoHist.addObjects([obj1, obj2, obj3, obj4]);

// expoArte.getInfos();



// console.log (expoHist.objects);


let museu = new Museum();
museu.addObject(obj1);
museu.addObject(obra2);
expoArte.removeObject('Mona Lisa');

 console.log(expoArte.objects)
// museu.addExhibitions([expoArte, expoHist]);

// museu.getInfos();

// console.log(museu.objects);