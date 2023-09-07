"use strict";
// MUSEU
class Museum {
    constructor() {
        this.exhibitions = [];
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
                    console.log(`O objeto ${obj.name} foi removido da coleção do museu`);
                }
                ;
            }
            ;
        }
        ;
    }
    ;
    addExhibition(exhibition) {
        this.exhibitions.push(exhibition);
    }
    ;
    addExhibitions(exhibitions) {
        this.exhibitions.push(...exhibitions);
    }
    ;
    getInfos() {
        console.log('O museu está com essas exposições em cartaz');
        if (this.exhibitions.length != 0) {
            for (let expo of this.exhibitions) {
                console.log(`${expo.name} ${expo.date}`);
            }
            ;
        }
        else {
            console.log('Não há exposições em cartaz no momento');
        }
        ;
    }
    ;
}
;
