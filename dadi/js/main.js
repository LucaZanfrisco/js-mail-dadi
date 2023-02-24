'use strict';

// Dichiarazione e assegnazione di variabili
const numUtente = Math.floor(Math.random()*6 + 1);
const numComputer = Math.floor(Math.random()*6 + 1);
let text = '';

// Stampa a video dei numeri randomi in base all'utente
console.log('Numero utente: ' + numUtente);
console.log('Numero computer: ' + numComputer);

// Confronto tra i numeri
if(numUtente > numComputer){
    text = 'Hai vinto';
}else if(numUtente < numComputer){
    text = 'Hai Perso';
}else{
    text = 'Pareggio';
}

// Stampa del risultato
console.log(text);