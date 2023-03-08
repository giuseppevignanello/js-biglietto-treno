// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


//save price per kilometer in a variable

const pricePerKilometer = 0.21

console.log(pricePerKilometer)


//ask the user for the kilometers with prompt and save them in a variable

const userKilometer = Number(prompt("Quanti chilometri devi percorrere?"))
console.log(userKilometer)

if (userKilometer != Number) {
    alert ("Per favore, inserisci un numero")
}

//ask the user for the age with prompt and save them in a variable 
const userAge = Number(prompt("Quanti anni hai?"))

console.log(userAge)

if (userAge != Number) {
    alert ("Per favore, inserisci un numero")
}



//moltiplicate user's kilometers by price per kilometer 

//check if the user is entitled to a discount with if/els

    //if he is a minor calculate 20 percent of the price and subtract it from the price

    //if he is over 65 calculate 40 percent of the price and subtract it from the price

//round the price to cents with Math.round(UserFinalPrice * 100)/100







//Tools

// - prompt
// - const
// - console.log
// -* multiplication
// - / division 
// if else
//Math.round