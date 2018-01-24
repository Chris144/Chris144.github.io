   'use strict';
class Ogloszenie{
 
    constructor(tytul,cena ,opis){
        this.tytul=tytul;
        this.cena=cena;
        this.opis=opis;
        
    }
    
    pobierzTytul(){
        return this.tytul;
    }
    ustawCena(nowaCena){
        this.cena = nowaCena;
        
    }
}
var ogloszenie1 = new Ogloszenie("Rama łózka", 500, "Dobra rama łózka");

ogloszenie1.ustawCena(1500);
console.log(ogloszenie1);


var ogloszenie2 = new Ogloszenie("Sweter", 50, "Cieply sweter");
console.log(ogloszenie2);


var tytul = ogloszenie1.pobierzTytul();
console.log(tytul);


