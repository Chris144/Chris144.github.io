'use strict';
var istniejacyWezel = document.getElementById("parFirst").children[2];
//console.log(istniejacyWezel);



//var nowyTekst=document.createTextNode("To jest nowy akapit, który dodaliśmy na stronę");

//nowyElement.appendChild(nowyTekst);
//istniejacyWezel.appendChild(nowyElement);

//istniejacyWezel.removeChild(nowyElement);

//var nowyElement = document.createElement("p");

//var link = document.getElementsByClassName("link")[2];
//console.log(link);
//link.parentElement.insertBefore(nowyElement,link);

/* dodaj znacznik<br> po kazdm linku i usun z nich klasy*/


var wszystkieLinki = document.querrySelectorAll("a");

for ( var i=0; i<wszystkieLinki.length; i++);{
    var br = document.createElement("br");
    wszystkieLinki[i].parentElement.insertBefore(br, wszystkieLinki[i].nextSibling);
     wszystkieLinki[i].removeAttribute("class");
}