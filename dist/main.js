"use strict";
// Sistema de Museu Virtual:
// Crie classes para representar diferentes exposições em um museu virtual, abrangendo arte, história e ciência.
// Use herança para representar diferentes categorias de exposições.
// Implemente interfaces para permitir que os visitantes naveguem pelas exposições e aprendam mais sobre os itens exibidos.
// Utilize polimorfismo para exibir informações detalhadas sobre cada item da exposição.
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
let museu = new Museum();
expoArte.addObjects([obra1, obra2, obra3, obra4, obra5]);
expoHist.addObjects([obj1, obj2, obj3, obj4]);
museu.addObject(obj1);
museu.addObject(obra2);
museu.addObject(obj3);
expoArte.removeObject('Mona Lisa');
museu.removeObject('Coroa de Dom Pedro II');
museu.addExhibitions([expoArte, expoHist]);
museu.getInfos();
expoArte.getInfos();
expoHist.getInfos();
obra1.getInfos();
obj1.getInfos();
console.log(expoArte.objects);
console.log(museu.objects);
