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
    startDate: Date;
    endDate: Date;
    objects: ArtObject[];

    constructor(name: string) {
        this.name = name;
    };

    addObject(object: ArtObject) {
        this.objects.push(object);
    };

    removeObject() {

    };

    exhibitionSetup() {

    };

    exhibitionAssembly() {

    };

    getInfos() {
        console.log(`Nome da exposição: ${this.name} Objetos: ${this.objects}`)
    };

};