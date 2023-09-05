// Sistema de Museu Virtual:

// Crie classes para representar diferentes exposições em um museu virtual, abrangendo arte, história e ciência.
// Use herança para representar diferentes categorias de exposições.
// Implemente interfaces para permitir que os visitantes naveguem pelas exposições e aprendam mais sobre os itens exibidos.
// Utilize polimorfismo para exibir informações detalhadas sobre cada item da exposição.


// MUSEU

class Museum implements Infos, Objects {
    exhibitions: HistoricalExhibition[] | ArtExhibition[];
    objects: HistoricalObject[] | ArtObject[];

    addObject(object: HistoricalObject | ArtObject) {
        this.objects.push(object);
    };

    removeObject() {

    };

    addExhibition() {

    };

    getInfos() {

    };
};

//História

let obj = new HistoricalObject('Coroa de Dom Pedro II', 1, 'Metal, pedrarias e tecido', 1841);
let obj1 = new HistoricalObject('Cristo Redentor', 2, 'Estátua monumental', 1931);
let obj2 = new HistoricalObject('Carta de Pero Vaz de Caminha', 3, 'Documento histórico', 1500);
let obj3 = new HistoricalObject('Espada de Duque de Caxias', 4, 'Arma histórica', "Século XIX");

// Arte
let obra1 = new ArtObject('A Última Ceia', 3, 'Leonardo DaVinci', 1498, 'Afresco');
let obra2 = new ArtObject('Mona Lisa', 4, 'Leonardo DaVinci', 1503, 'Óleo sobre tela');
let obra3 = new ArtObject('A Criação de Adão', 5, 'Michelangelo', 1512, 'Afresco');
let obra4 = new ArtObject('O Nascimento de Vênus', 6, 'Sandro Botticelli', 1486, 'Têmpera sobre tela');
let obra5 = new ArtObject('A Escola de Atenas', 7, 'Rafael Sanzio', 1510, 'Afresco');

let expoArte = new ArtExhibition('A arte renascentista');
let expoHistoria = new HistoricalExhibition('A história do Brasil');

expoArte.addObject(obra1);
expoArte.addObject(obra2);
expoArte.addObject(obra3);

console.log (expoArte.objects)


let museuDeArte = new Museum();
let museuDeHistoria = new Museum();