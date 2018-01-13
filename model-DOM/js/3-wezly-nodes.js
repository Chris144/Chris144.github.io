'use strict';
var pierwszyDiv = document.getElementById("parFirst");


//var dzieciDiva = pierwszyDiv.firstChild;
//console.log(dzieciDiva);


//var rodzenstwoNastepne = pierwszyDiv.previousElementSibling;
//console.log(rodzenstwoNastepne);

var dzieciElementu = pierwszyDiv.childNodes;

dzieciElementu.forEach(function(element,){
    console.log(element + "  "+ element.nodeType);
})

//var dzieciElementu2 = pierwszyDiv.children;

//for(var i=0; i<dzieciElementu2.length; i++)
//{
 //   console.log(dzieciElementu2[i]);
//}