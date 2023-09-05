abstract class MuseumObject {
    name: string;
    id: number;
};

interface Objects {
    addObject(object: HistoricalObject | ArtObject): void;
    removeObject(object: HistoricalObject | ArtObject): void;
};

interface Infos {
    getInfos(): void;
};

interface Exhibition {
    type_: string;
    name: string;
    startDate: Date;
    endDate: Date;
    objects: HistoricalObject[] | ArtObject [];

    exhibitionSetup(): void;
    exhibitionAssembly(): void;
};
