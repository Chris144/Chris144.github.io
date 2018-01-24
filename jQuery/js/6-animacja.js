 'use strict';
$(function(){
   

    function animacja(){
        console.log("No i dotarliśmy do końca animaji! Tu sie wywoluje funkja callback");
        $("h3").animate({"font-size":"1rem","margin-left":"0px"},3000);
    }
    $("h3").animate({"font-size": "1em", "margin-left": "100px"},4000, animacja);
});