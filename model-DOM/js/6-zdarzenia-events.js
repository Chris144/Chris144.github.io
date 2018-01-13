
  'use strict';
var secondlink  = document.getElementsByTagName("a")[1];

function alarm(e){
  

    e.preventDefault();
    console.log("Kliknięto link, hyc"  );
    console.log("typ evenentu"+e.type);
}

//secondlink.onclick = alarm;

//secondlink.addEventListener('click',alarm);
//secondlink.removeEventListener('click',alarm);

var mainHeader = document.getElementById("main-header");

function zmianaRozmiaru(e) {
    if(e.type =="mouseover"){
        mainHeader.style.fontSize = "70px";
    }else{
        mainHeader.style.fontSize = "inherit";
    }
}
mainHeader.addEventListener('mouseover', zmianaRozmiaru);
mainHeader.addEventListener('mouseout', zmianaRozmiaru);


document.getElementById("exampleDiv").addEventListener('click', function(e){
                        e.preventDefault();
                        console.log("Kliknięto DIV")
                        });
document.getElementById("exampleLink").addEventListener('click',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        console.log("Kliknięto LINK");
                        });