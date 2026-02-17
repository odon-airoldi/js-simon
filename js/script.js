/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
*/


const number_list_el = document.getElementById('numbers-list');
const answers_form_el = document.getElementById('answers-form');
const countdown_el = document.getElementById('countdown');
const instructions_el = document.getElementById('instructions');
const message_el = document.getElementById('message');
const answers_form_control_el = document.querySelectorAll('.form-control')

let array_random_numbers = [];
let array_matching_numbers = [];



// 5 numeri random
function get_random_numbers() {

   for(let i = 0; i < 5; i++) {
    // Return a random integer between 1 and 10 (both included):
        let random_number = Math.floor(Math.random() * 50) + 1;        
        number_list_el.innerHTML += '<li>' + random_number + '</li>'
        array_random_numbers.push(random_number);
    }

}
get_random_numbers();



// timer di 30 secondi
// poi scompaiono i numeri
// compaiono 5 input per inserire numeri

let seconds = 3; // da cambiare a 30
countdown_el.innerText = seconds

const timer = setInterval(function() {

    seconds--
    countdown_el.innerText = seconds

    if(seconds === 0) {
        clearInterval(timer)
        number_list_el.classList.add('d-none');
        answers_form_el.classList.remove('d-none');
        instructions_el.innerText = 'Inserisci i numeri che hai visualizzato nell\'ordine che preferisci'
    }

}, 1000)



// verificare quali corrispondono ai numeri random

answers_form_el.addEventListener('submit', function(e) {

    e.preventDefault()

    number_list_el.classList.remove('d-none');

    for(let i = 0; i < 5; i++) {

        let input_value = answers_form_control_el[i].value

        for(let j = 0; j < 5; j++) {

            if(array_random_numbers[j] == input_value) {
                array_matching_numbers.push(input_value)
                message_el.innerText = `${array_matching_numbers.length} numeri corrispondenti (${array_matching_numbers.join(', ')})`;
            }
        }

    }

});











/*
BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array
*/