// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente
//  nell’html. Questa card serve solo come timbro del markup necessario per ottenere il 
// risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. 
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente
//  nell'html, stampare dinamicamente una card per ogni membro del team.
// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri
//  del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito 
//  nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Scriviamo prima la logica in italiano e poi traduciamo in codice.
// console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.


// 1) definire un array di oggetti che rappresentano i membri del team. 
// 2) // Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// 3) stampare dinamicamente una card per ogni membro del team. 


// VARIABILI GLOBALI 
let img = document.querySelector(".card-image img");
let namePerson = document.querySelector(".card-text h3");
let ruoloPerson = document.querySelector(".card-text p");


// console.log(ruoloPerson);



// 1) definire un array di oggetti che rappresentano i membri del team. 

let team = [
    {
        Barnett: {
            immagine:"img/wayne-barnett-founder-ceo.jpg",
            nome: "Wayne ",
            cognome: "Barnett",
            ruolo: "Founder & CEO",
        },
        Caroll: {
            immagine:"img/angela-caroll-chief-editor.jpg",
            nome: "Angela",
            cognome: "Caroll",
            ruolo: "Chief Editor",
        },
        Gordon: {
            immagine:"img/walter-gordon-office-manager.jpg",
            nome: "Walter",
            cognome: "Gordon",
            ruolo: "Office Manager",
        },
        Lopez: {
            immagine: " ",
            nome: "Angela",
            cognome: "Lopez",
            ruolo: "img/angela-lopez-social-media-manager.jpg",
        },
        Estrada: {
            immagine:"img/scott-estrada-developer.jpg",
            nome: "Scott",
            cognome: "Estrada",
            ruolo: "Developer",
        },
        Ramos:{
            immagine:"img/barbara-ramos-graphic-designer.jpg",
            nome: "Barbara",
            cognome: "Ramos",
            ruolo: "Graphic Designer",
        },
    }
];
console.log(team)



person = document.querySelector(".team-card");
console.log(person);

