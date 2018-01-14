'use strict';
var body = $("body");


var par = body.find("p");  //zwraca wszystkie znlezione elementy

var par = body.find("p").eq(1);  // zwraca jeden eleemmt po indexie .eq(i);
console.log(par);

$("p").each(function(index){
    console.log($(this));
    $(this).addClass("paragraf-" + index);
    //$(this).css("font-size","2em");
});
