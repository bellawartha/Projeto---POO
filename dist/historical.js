"use strict";
// OBJETO
class HistoricalObject extends MuseumObject {
    constructor(name, id, material, year) {
        super();
        this.type_ = 'histórico';
        this.name = name;
        this.id = id;
        this.material = material;
        this.year = year;
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
    getMaterial() {
        return this.material;
    }
    ;
    setMaterial(value) {
        this.material = value;
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
    getInfos() {
        console.log(`Nome: ${this.getName()} Ano: ${this.getYear()} Material: ${this.getMaterial()}  Tipo: ${this.type_}`);
    }
    ;
}
;
// EXPOSIÇÃO
class HistoricalExhibition {
    constructor(name, date) {
        this.type_ = "historical";
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
