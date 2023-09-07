abstract class MuseumObject {
    name: string;
    id: number;
};

interface Objects {
    addObject(object: ArtObject | HistoricalObject): void;
    removeObject(name: string): void;
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
