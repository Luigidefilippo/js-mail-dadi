// Genera un numero random da 1 a 6 per il giocatore e per il computer
const giocatore = Math.floor(Math.random() * 6) + 1;
const computer = Math.floor(Math.random() * 6) + 1;

// Stampa il punteggio del giocatore e del computer
console.log(`Il giocatore ha fatto ${giocatore}`);
console.log(`Il computer ha fatto ${computer}`);

// Determina il vincitore in base al punteggio più alto
if (giocatore > computer) {
  console.log("Il giocatore vince!");
} else if (computer > giocatore) {
  console.log("Il computer vince!");
} else {
  console.log("Pareggio!");
}