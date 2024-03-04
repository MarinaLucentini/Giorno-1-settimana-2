/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/*I datatype sono il tipo di dato assegnato ad una variabile. I datatype più comuni cosidetti "primitivi" sono 5 e sono:
1)La stringa o string (vedi sotto)
let myName = "Marina";
la stringa è una sequenza di caratteri (lettere, numeri, caratteri speciali (tramite escape) ecc...) dichiarata dopo il segno uguale e con le virgolette ".." o con gli apici '..'
2)numeri o number
let number = 10;
 Il numero è un'altro datatype primitivo ed assegna ad una variabile un valore numerico. Essi possono essere anche valori decimali, ma attenzione che spesso con i valori di tipo decimale javascript potrebbe dare risposte matematicamente scorrette, ma simpatiche.
3)booleani
let veroFalso = true
il datatype booleano accetta per definizione solo due tipi di valori che sono: true o false. 
4)undefined 
let undefined
Undefined è il datatype assegnato a una variabile di default. Significa che quella variabile ha valore indefinito, ossia il suo valore non è stato ancora determinato dal developer e/o dall'utente.
5) null
Null è un tipo di datatype in cui esplicitamente si assegna ad una variabile nessun valore. Nella logica booleana si traduce con false




/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myName = "Marina";
console.log(myName);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let number1 = 12;
let number2 = 20;
let total = number1 + number2;
console.log(total);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;
console.log(x);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
myName = "Lucentini";
console.log(myName);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
total = x - 4;
console.log(total);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john";
let name2 = "John";
name1 === name2;
console.log(name1 === name2);

name1 === name2.toLowerCase();
console.log(name2.toLowerCase());
console.log(name1 === name2.toLowerCase());
/* SCRIVI QUI LA TUA RISPOSTA */
