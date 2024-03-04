//Aggiungi nome password

const userName =  prompt('Scrivi il tuo nome')

//aggiungi cognome password

const userSurname =  prompt('Scrivi il tuo cognome')

//aggiungi colore preferito password

const favouriteColor = prompt('Scrivi il tuo colore preferito')

//aggiungi numero

const number = 23

const secondNumber = prompt('Scrivi un numero')
//trasforma da stringa in numero
const secondNumberAsNumber = parseInt(secondNumber);
const numberSum = number + secondNumberAsNumber

//somma delle tre variabili+ numero

const userPassword = `La tua nuova password è ${userName}${userSurname}${favouriteColor}${numberSum}`;

//mostra password

document.getElementById('message').innerHTML = userPassword;