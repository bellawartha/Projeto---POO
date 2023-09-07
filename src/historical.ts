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
    };
    public setMaterial(value: string) {
        this.material = value;
    };

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

    removeObject(name: string) {
        for (let obj of this.objects) {
            if (obj.name == name) {
                const index = this.objects.indexOf(obj);
                if (index > -1) {
                    this.objects.splice(index, 1);
                    console.log(`O objeto ${obj.name} foi removido da exposição`)
                };
            };
        };
    };

    getInfos() {
        console.log(`Nome da exposição: ${this.name} Data: ${this.date}`);
    };
};
