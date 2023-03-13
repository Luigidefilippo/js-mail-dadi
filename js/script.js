// Chiediamo all'utente la sua email
// Una volta inserita l'email controlliamo se fa parte della lista di appartenenti al sito quindi avente il persmesso puo accedere al sito in caso contrario viene cacciato 
const email =["mariorossi@gmail.com" , "pincopallino@gmail.com" , "alicemeraviglia@gmail.com" , "napoleon@gmail.com"];

const userEmail = prompt("Inserisci la tua email");
// SE l'email fa parte della lista utente si logga
// altrimenti viene cacciato

let isFound = false;

for(let i = 0; i < email.length ; i++){
    const insertEmail = email[i];
    if (insertEmail.toLowerCase()=== userEmail.toLowerCase()){
        isFound = true;
    }
}
if (isFound === true){
    console.log("Accesso consentito puoi procedere al login");

}else{
    console.log("Access Denied")
}

