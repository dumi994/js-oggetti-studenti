//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome età.

var studente = {
    'nome': 'paolo',
    cognome: 'rossi',
    eta: 2021 - 1993,  
}
var key;
var testo = '';
console.log(studente);
//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (key in studente){
    console.log(studente[key]);
    testo += studente[key] + ' ';
    document.getElementById('nomi').innerHTML = testo;
}
/* document.getElementById('nomi').innerHTML = studente[key]; */

//Creare un array di oggetti di studenti.


//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.


//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.