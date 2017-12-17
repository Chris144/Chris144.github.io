
'use strict';

for (var i=10 ; i>0 ; i--){
   console.log(i);
}


var tablica=["Krystian", "Monika","Danuta"];
tablica.forEach(function(element,index){
    console.log("Element z Indexem:" + index + "ma wartość" + element);
});

for (var i=0; i<tablica.lenght; i++){
    console.log("Element z Indexem:" + i + "ma wartość" + tablica[i]);
}

var it = 0;
while (it <tablica.length){
    console.log(tablica[it]);
    it++;
}

var iter=2;
do {
   
    iter++;
    console.log(iter);
}
while (iter<5)

var a=0;
while(a <10){
    console.log(++a);
    
    if (a == 5){
        break;
    }
}



for (var b = 0; b<5 ;++b){
    if (b ==2){
        continue;
    }else {
        console.log(b);
    }
}