"use strict"

class Osoba{
    
    constructor(imie, nazwisko, plec ) {
        this.imie =imie;
        this.nazwisko =nazwisko;
        this.plec = plec;
    }
    
    wyswietlDetale() {
        console.log("Imie:" + this.imie + " ,Nazwisko" + this.nazwisko + ",Płeć" + this.plec);
    }
    
}
    var ewa = new Osoba ("Ewa", "Rogulska", "Kobieta"); 
    ewa.wyswietlDetale();
    
    var damian = new Osoba ("Damian", "Pawelec", "Mezczyzna"); 
    damian.wyswietlDetale();

    var tablica =[ewa,damian];
  
    console.log(tablica);

    console.log(ewa);