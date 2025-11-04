/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function iniziaCon(array, lettera) {
    let letterCap = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(0) === lettera) {
            letterCap.push(array[i]);
        }
    }
    return letterCap;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(iniziaCon(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]