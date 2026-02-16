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
let array_random_numbers = [];
let array_answers_numbers = [];
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



// input numeri
const answers_form_control_el_1 = document.querySelector('.form-control:nth-child(1)')
const answers_form_control_el_2 = document.querySelector('.form-control:nth-child(2)')
const answers_form_control_el_3 = document.querySelector('.form-control:nth-child(3)')
const answers_form_control_el_4 = document.querySelector('.form-control:nth-child(4)')
const answers_form_control_el_5 = document.querySelector('.form-control:nth-child(5)')



// verificare quali corrispondono ai numeri random

answers_form_el.addEventListener('submit', function(e) {

    e.preventDefault()

    number_list_el.classList.remove('d-none');

    const answers_form_control_el_1_value = answers_form_control_el_1.value;
    const answers_form_control_el_2_value = answers_form_control_el_2.value;
    const answers_form_control_el_3_value = answers_form_control_el_3.value;
    const answers_form_control_el_4_value = answers_form_control_el_4.value;
    const answers_form_control_el_5_value = answers_form_control_el_5.value;
    array_answers_numbers.push(answers_form_control_el_1_value);
    array_answers_numbers.push(answers_form_control_el_2_value);
    array_answers_numbers.push(answers_form_control_el_3_value);
    array_answers_numbers.push(answers_form_control_el_4_value);
    array_answers_numbers.push(answers_form_control_el_5_value);

    for(let i = 0; i < 5; i++) {

        for(let j = 0; j < 5; j++) {

            if(array_random_numbers[i] == array_answers_numbers[j]) {
                
                array_matching_numbers.push(array_answers_numbers[j])

            }
        }

    }

    message_el.innerText = `${array_matching_numbers.length} numeri corrispondenti (${array_matching_numbers.join(', ')})`;

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