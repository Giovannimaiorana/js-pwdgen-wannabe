let myName = prompt("Qual'è il tuo nome ?  ")
let mySurname = prompt(" Qual'è il tuo cognome ? ")
let myFavoriteColor = prompt(" Qual'è il tuo colore preferito? ")
const yourWelcome = myName + mySurname + myFavoriteColor;

document.getElementById('ms_welcomeToMySite').innerHTML = yourWelcome + "23";