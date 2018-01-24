'use strict';
$('#btn').click(function () {
    $.ajax({
        url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
        dataType: "json",
        success: function (resultJSON) {

            var jsonStr = JSON.stringify(resultJSON);
            var div = document.createElement("div");
            div.id = 'dane-programisty';
            var pobierz = document.createTextNode(resultJSON.imie + ' ' + resultJSON.nazwisko + ' ' + resultJSON.zawod + ' ' + resultJSON.firma);
            div.appendChild(pobierz);
            document.body.appendChild(div);



        }

    });
});