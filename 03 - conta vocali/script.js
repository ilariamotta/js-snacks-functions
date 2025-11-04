/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function contaVocali(parola) {
    let vocali = ["a", "e", "i", "o", "u"];
    let numeroVocali = 0;
    for (let i = 0; i < parola.length; i++) {
        for (let j = 0; j < vocali.length; j++)
            if (parola.charAt(i) === vocali[j]) {
                numeroVocali++;
            }
    }
    return numeroVocali;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(contaVocali(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)