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
}
document.getElementById('nomi').innerHTML = testo;

//Creare un array di oggetti di studenti.
/* testo += studente[key] + ' ';
    document.getElementById('nomi').innerHTML = testo */;

/* var studenti = [
    
    
    {
        'nome': 'mario',
        cognome: 'draghi',
        eta: 2021 - 1947,
    },
    {
        'nome': 'matteo',
        cognome: 'renzie',
        eta: 2021 - 1975,
    },
    {
        'nome': 'Matteo',
        cognome: 'Renzie',
        eta: 2021 - 1975,
    },
    {
        'nome': 'Beppe',
        cognome: 'Fiorello',
        eta: 2021 - 1969,
    },
    document.getElementById('nomi').innerHTML = testo 
 
]
 */
var studenti = [
    studente1 = {
        'nome': 'mario',
        cognome: 'draghi',
        eta: 2021 - 1947,
    },
    studente2 = {
        'nome': 'matteo',
        cognome: 'renzie',
        eta: 2021 - 1975,
    },
    studente3 = {
        'nome': 'Beppe',
        cognome: 'Fiorello',
        eta: 2021 - 1969,
    }
  ];
  console.log(studenti);
  
 
  
console.log(studenti);

//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.


//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.