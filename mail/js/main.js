'use strict';

// Dichiarazione e assegnazione di variabili
const emailUtente = prompt('Inserire la prorpia email');
const arrayEmail = ['luca@pino.it', 'antonio@pino.it', 'andrea@pino.it', 'mattia@pino.it', 'sofia@pino.it', 'simona@pino.it'];
let check = false;

// Ciclo per iterare l'array di email
for (let i = 0; i < arrayEmail.length; i++) {
    // Controllo se l'email inserita dall'utente è presente 
    if (emailUtente.toLowerCase === arrayEmail[i].toLowerCase){
        check = true;
    }
}

// Se l'email è presente stampa di un messaggio , altrimenti stampa di un un'altro messaggio
if(check === true){
    alert("La tua email è presente");
    console.log('La tue email è presente')
}else {
    alert("La tua email non è presente " + emailUtente);
    console.log("La tua email non è presente");
}