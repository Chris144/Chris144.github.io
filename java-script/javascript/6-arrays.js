'use strict'

var imiona =['Monika', 'Krytian','Łukasz'];

imiona[3] = 'Tania';

imiona.push('Geralt');

imiona.pop();
imiona.pop();


console.log(imiona.unshift('Robert'));
console.log(imiona.shift());

console.log(imiona.reverse());

var stringZTablicy = imiona.join(" ! ");
console.log(stringZTablicy);

var tablicaImiona =[3 ,67,1,600,34,99,80];

var posortowanaTablica = imiona.sort();
console.log(posortowanaTablica);
