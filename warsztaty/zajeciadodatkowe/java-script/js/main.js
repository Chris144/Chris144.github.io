'use strict';
function formatujCzas(czasPrzejazdu){
    
    var sformatowanyCzas;
    var godziny = Math.floor (czasPrzejazdu);
    var minuty = ((czasPrzejazdu - godziny) * 60);
    minuty = Math.floor (minuty);
 
    sformatowanyCzas=godziny + "h" + minuty + "min.";
    
    return sformatowanyCzas;
    
}

function czasPodrozy(v,s){
     if ( v <= 0){
         return("Błąd nie moze byc predkosc ujemna");
     }
    var czas = s/v;
    console.log("jestem tutaj");
    return czas;
}

var czasPrzejazdu = czasPodrozy(200,0);

console.log("Dystans pokonasz w" + formatujCzas( czasPrzejazdu));

