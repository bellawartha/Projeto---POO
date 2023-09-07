"use strict";
// OBJETO
class ArtObject extends MuseumObject {
    constructor(name, id, artist, year, technique) {
        super();
        this.type_ = 'Artístico';
        this.name = name;
        this.id = id;
        this.artist = artist;
        this.year = year;
        this.technique = technique;
    }
    ;
    getName() {
        return this.name;
    }
    ;
    setName(value) {
        this.name = value;
    }
    ;
    getId() {
        return this.id;
    }
    ;
    setId(value) {
        this.id = value;
    }
    ;
    getArtist() {
        return this.artist;
    }
    ;
    setArtist(value) {
        this.artist = value;
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
    getTechnique() {
        return this.technique;
    }
    ;
    setTechnique(value) {
        this.technique = value;
    }
    ;
    getInfos() {
        console.log(`Nome: ${this.getName()} Artista: ${this.getArtist()} Ano: ${this.getYear()} Técnica: ${this.getTechnique()} Tipo: ${this.type_}`);
    }
    ;
}
;
// EXPOSIÇÃO
class ArtExhibition {
    constructor(name, date) {
        this.type_ = "art";
        this.name = name;
        this.date = date;
        this.objects = [];
    }
    ;
    addObject(object) {
        this.objects.push(object);
    }
    ;
    addObjects(object) {
        this.objects.push(...object);
    }
    ;
    removeObject(name) {
        for (let obj of this.objects) {
            if (obj.name == name) {
                const index = this.objects.indexOf(obj);
                if (index > -1) {
                    this.objects.splice(index, 1);
                    console.log(`O objeto ${obj.name} foi removido da exposição`);
                }
                ;
            }
            ;
        }
        ;
    }
    ;
    getInfos() {
        console.log(`Nome da exposição: ${this.name} Data: ${this.date}`);
    }
    ;
}
;
