'use strict';

var przycisk = document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault();
    console.log('alert');
});


var imie=document.querySelector('#imie').value
var name=document.querySelector("#name").value;

function pobierzImie(event){
    console.log(imie);
    console.log(name);
    
}
 pobierzImie();