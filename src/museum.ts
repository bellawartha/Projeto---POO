// MUSEU

class Museum implements Infos, Objects {
    exhibitions: (ArtExhibition | HistoricalExhibition)[];
    objects: (ArtObject | HistoricalObject)[];

    constructor() {
        this.exhibitions = [];
        this.objects = [];
    };

    addObject(object: ArtObject | HistoricalObject) {
        this.objects.push(object);
    };

    addObjects(object: (ArtObject | HistoricalObject)[]) {
        this.objects.push(...object);
    };

    removeObject(name: string) {
        for (let obj of this.objects) {
            if (obj.name == name) {
                const index = this.objects.indexOf(obj);
                if (index > -1) {
                    this.objects.splice(index, 1);
                    console.log(`O objeto ${obj.name} foi removido da coleção do museu`);
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
            console.log('Não há exposições em cartaz no momento');
        };

    };
};