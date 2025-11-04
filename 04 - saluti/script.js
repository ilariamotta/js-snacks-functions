/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';

// Dichiara la funzione qui.

function salutaNome (nome) {
    let saluto = "Ciao ";
    let salutoCompleto = saluto + nome;
    return salutoCompleto;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(salutaNome(name));

//Risultato atteso se si passa 'Mario': // ciao Mario
