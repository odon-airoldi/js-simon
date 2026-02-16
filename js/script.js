/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
*/


const number_list_el = document.getElementById('numbers-list');
const input_numbers_el = document.getElementById('answers-form');
const countdown_el = document.getElementById('countdown');
const instructions_el = document.getElementById('instructions');

let array_random_numbers = [];

// 5 numeri random
function get_random_numbers() {

   for(let i = 0; i < 5; i++) {
        let random_numbers = Math.floor(Math.random() * 100);        
        number_list_el.innerHTML += '<li>' + random_numbers + '</li>'
        array_random_numbers.push(random_numbers)
    }

}

get_random_numbers();

console.log(array_random_numbers)

// timer di 30 secondi poi scompaiono i numeri

let seconds = 5;
countdown_el.innerText = seconds



const timer = setInterval(function() {

    seconds--
    countdown_el.innerText = seconds

    if(seconds === 0) {
        clearInterval(timer)
        number_list_el.classList.add('d-none');
        input_numbers_el.classList.remove('d-none');
        instructions_el.innerText = 'Inserisci i numeri che hai visualizzato nell\'ordine che preferisci'
    }

}, 1000)



// compaiono 5 input per inserire numeri
// verificare quali corrispondono ai numeri random











/*
BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"
*/