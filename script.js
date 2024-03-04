//Aggiungi nome password
const userName =  prompt('Scrivi il tuo nome')
//aggiungi cognome password
const userSurname =  prompt('Scrivi il tuo cognome')
//aggiungi colore preferito password
const favouriteColor = prompt('Scrivi il tuo colore preferito')
//somma delle tre variabili
const userPassword = `La tua nuova password è ${userName}${userSurname}${favouriteColor}23`;
//mostra password
document.getElementById('message').innerHTML = userPassword;