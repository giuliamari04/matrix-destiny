import "./bootstrap";
import "~resources/scss/app.scss";
import "./analisi";
import * as bootstrap from "bootstrap";
import.meta.glob(["../img/**", "../fonts/**"]);

// const deleteSubmitButtons = document.querySelectorAll(".delete-button");

// deleteSubmitButtons.forEach((button) => {
//     button.addEventListener("click", (event) => {
//         event.preventDefault();

//         const dataTitle = button.getAttribute("data-item-title");

//         const modal = document.getElementById("deleteModal");

//         const bootstrapModal = new bootstrap.Modal(modal);
//         bootstrapModal.show();

//         const modalItemTitle = modal.querySelector("#modal-item-title");
//         modalItemTitle.textContent = dataTitle;

//         const buttonDelete = modal.querySelector("button.btn-primary");

//         buttonDelete.addEventListener("click", () => {
//             button.parentElement.submit();
//         });
//     });
// });

// const previewImage = document.getElementById("image");
// previewImage.addEventListener("change", (event) => {
//     var oFReader = new FileReader();
//     // var image  =  previewImage.files[0];
//     // console.log(image);
//     oFReader.readAsDataURL(previewImage.files[0]);

//     oFReader.onload = function (oFREvent) {
//         //console.log(oFREvent);
//         document.getElementById("uploadPreview").src = oFREvent.target.result;
//     };
// });
// Toggle the side navigation

const sidebarToggle = document.body.querySelector("#sidebarToggle");
if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //     document.body.classList.toggle('sb-sidenav-toggled');
    // }
    sidebarToggle.addEventListener("click", (event) => {
        event.preventDefault();

        document.body.classList.toggle("sb-sidenav-toggled");
        localStorage.setItem(
            "sb|sidebar-toggle",
            document.body.classList.contains("sb-sidenav-toggled")
        );
    });
}


document
    .getElementById("dateForm")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Evita il comportamento predefinito del modulo
        var inputDate = document.getElementById("date").value; // Ottieni il valore della data
        console.log(inputDate);
        var analisi = document.getElementById("analisi");

        if (inputDate) {
            analisi.classList.remove("d-none"); // Rimuove la classe "d-none"
            analisi.classList.add("d-block"); // Aggiunge la classe "d-block" per mostrare l'elemento
        } else {
            analisi.classList.remove("d-block"); // Rimuove la classe "d-block"
            analisi.classList.add("d-none"); // Aggiunge la classe "d-none" per nascondere l'elemento
        }

        // dati
        var date = new Date(inputDate); // Crea un oggetto Data dalla stringa di input
        var day = date.getDate(); // Ottieni il giorno
        var month = date.getMonth() + 1; // Ottieni il mese (inizia da 0)
        var year = date.getFullYear(); // Ottieni l'anno
        var yearShort = date.getFullYear().toString().slice(-2); // Ottieni le ultime due cifre dell'anno
        var yearSum = date.getFullYear().toString(); // Ottieni l'anno come stringa
        var totalYearSum = 0; // Inizializza la somma totale
        for (var i = 0; i < yearSum.length; i++) {
            totalYearSum += parseInt(yearSum.charAt(i)); // Converti ogni cifra in un numero e aggiungilo alla somma totale
        }

        function reduce(num) {
            var totnum; // Dichiarazione della variabile totnum all'interno della funzione

            if (parseInt(num) >= 23) {
                var numString = num.toString(); // Converti il numero in una stringa
                totnum = 0; // Inizializza la somma totale
                for (var i = 0; i < numString.length; i++) {
                    totnum += parseInt(numString.charAt(i)); // Converti ogni cifra in un numero e aggiungilo alla somma totale
                }
            } else {
                totnum = num; // Se il debitoKarmico è minore o uguale a 22, lascia il valore originale
            }

            return totnum; // Restituisci il valore calcolato
        }

        function generaSequenzaNumeri(num1, num2) {
            var risultati = [];
            var somma1 = num1 + num2; // 6
            var somma1 = reduce(somma1);
            var somma2 = num1 + somma1; //16
            var somma2 = reduce(somma2);
            var somma3 = num2 + somma1; //20
            var somma3 = reduce(somma3);
            var somma4 = num1 + somma2; //26
            var somma4 = reduce(somma4); //8
            var somma5 = somma1 + somma2; //22
            var somma5 = reduce(somma5); //22
            var somma6 = somma1 + somma3;
            var somma6=reduce(somma6); //8
            var somma7 = somma3 + num2;
            var somma7 = reduce(somma7);

           risultati=[somma4,somma2, somma5, somma1, somma6, somma3, somma7];
           var risultatoStringa = risultati.join('----');

           return risultatoStringa;


        }


        // main
        var talentoGiorno = reduce(day);
        var talentoMese = month;
        var debitoKarmico =
            parseInt(day) + parseInt(month) + parseInt(totalYearSum);
        var totdebitoKarmico = 0;
        var totdebitoKarmico = reduce(debitoKarmico);

        var soulTask = totalYearSum;
        var soulTask = reduce(soulTask);
        var sky = talentoGiorno + soulTask;
        var earth = talentoMese + totdebitoKarmico;
        var arcana = sky + earth;
        var totArcana = 0;
        var totArcana = reduce(arcana);

        var mainFemaleLine = talentoMese + soulTask;
        var totmainFemaleLineTop = 0;
        var totmainFemaleLineTop = reduce(mainFemaleLine);
        var mainMaleLine = talentoGiorno + talentoMese;
        var totmainMaleLineTop = 0;
        var totmainMaleLineTop = reduce(mainMaleLine);
        var mainFemaleLineBot = talentoGiorno + totdebitoKarmico;
        var totmainFemaleLineBot = 0;
        var totmainFemaleLineBot = reduce(mainFemaleLineBot);
        var mainMaleLineBot = totdebitoKarmico + soulTask;
        var totmainMaleLineBot = 0;
        var totmainMaleLineBot = reduce(mainMaleLineBot);

        //terzi
        var talentoGiornoterzi = day + totArcana;
        var tottalentoGiornoterzi = reduce(talentoGiornoterzi);
        var talentoMeseterzi = talentoMese + totArcana;
        var tottalentoMeseterzi = reduce(talentoMeseterzi);
        var debitoKarmicoterzi = totdebitoKarmico + totArcana;
        var totdebitoKarmicoterzi = 0;
        var totdebitoKarmicoterzi = reduce(debitoKarmicoterzi);

        var soulTaskterzi = soulTask + totArcana;
        var totsoulTaskterzi = reduce(soulTaskterzi);

        // secondary
        var talentoGiornoSecondary = tottalentoGiornoterzi + talentoGiorno;
        var tottalentoGiornoSecondary = reduce(talentoGiornoSecondary);
        var talentoMeseSecondary = talentoMese + tottalentoMeseterzi;
        var tottalentoMeseSecondary = reduce(talentoMeseSecondary);
        var debitoKarmicoSecondary = totdebitoKarmicoterzi + totdebitoKarmico;
        var totdebitoKarmicoSecondary = 0;
        var totdebitoKarmicoSecondary = reduce(debitoKarmicoSecondary);

        var soulTaskSecondary = soulTask + totsoulTaskterzi;
        var totsoulTaskSecondary = reduce(soulTaskSecondary);
        var arcanaSecondary =
            totmainFemaleLineBot +
            totmainFemaleLineTop +
            totmainMaleLineBot +
            totmainMaleLineTop;
        var totArcanaSecondary = 0;
        var totArcanaSecondary = reduce(arcanaSecondary);



        // arcana terzi
        var arcanaterzi = totArcana + totArcanaSecondary;
        var totArcanaterzi = 0;
        var totArcanaterzi = reduce(arcanaterzi);

        //female e male terzi
        var mainFemaleLineterzi = totArcanaSecondary + totmainFemaleLineTop;
        var totmainFemaleLineTopterzi = 0;
        var totmainFemaleLineTopterzi = reduce(mainFemaleLineterzi);
        var mainMaleLineterzi = totArcanaSecondary + totmainMaleLineTop;
        var totmainMaleLineTopterzi = 0;
        var totmainMaleLineTopterzi = reduce(mainMaleLineterzi);
        var mainFemaleLineBotterzi = totArcanaSecondary + totmainFemaleLineBot;
        var totmainFemaleLineBotterzi = 0;
        var totmainFemaleLineBotterzi = reduce(mainFemaleLineBotterzi);
        var mainMaleLineBotterzi = totArcanaSecondary + totmainMaleLineBot;
        var totmainMaleLineBotterzi = 0;
        var totmainMaleLineBotterzi = reduce(mainMaleLineBotterzi);

        //female e male secondary
        var mainFemaleLineSecondary =
            totmainFemaleLineTopterzi + totmainFemaleLineTop;
        var totmainFemaleLineTopSecondary = 0;
        var totmainFemaleLineTopSecondary = reduce(mainFemaleLineSecondary);
        var mainMaleLineSecondary =
            totmainMaleLineTopterzi + totmainMaleLineTop;
        var totmainMaleLineTopSecondary = 0;
        var totmainMaleLineTopSecondary = reduce(mainMaleLineSecondary);
        var mainFemaleLineBotSecondary =
            totmainFemaleLineBotterzi + totmainFemaleLineBot;
        var totmainFemaleLineBotSecondary = 0;
        var totmainFemaleLineBotSecondary = reduce(mainFemaleLineBotSecondary);
        var mainMaleLineBotSecondary =
            totmainMaleLineBotterzi + totmainMaleLineBot;
        var totmainMaleLineBotSecondary = 0;
        var totmainMaleLineBotSecondary = reduce(mainMaleLineBotSecondary);

        //amore,mezzo,soldi
        var mezzo = totdebitoKarmicoterzi + totsoulTaskterzi;
        var totMezzo= 0;
        var totMezzo= reduce(mezzo);

        var amore = totMezzo + totdebitoKarmicoterzi;
        var totAmore= 0;
        var totAmore= reduce(amore);

        var soldi =totMezzo + totsoulTaskterzi;
        var totSoldi= 0;
        var totSoldi= reduce(soldi);

        //green

        var green1 = totArcana + tottalentoGiornoterzi;
        var totGreen1= 0;
        var totGreen1= reduce(green1);

        var green2 = totArcana + tottalentoMeseterzi;
        var totGreen2= 0;
        var totGreen2= reduce(green2);

        //predizione numeri
        var primaSezione = generaSequenzaNumeri(talentoGiorno, totmainMaleLineTop);
        var Sezione2 = generaSequenzaNumeri(totmainMaleLineTop, talentoMese);
        var Sezione3 = generaSequenzaNumeri(talentoMese, totmainFemaleLineTop);
        var Sezione4 = generaSequenzaNumeri(totmainMaleLineTop, soulTask);
        var Sezione5 = generaSequenzaNumeri(soulTask, totmainMaleLineBot);
        var Sezione6 = generaSequenzaNumeri(totmainMaleLineBot, totdebitoKarmico);
        var Sezione7 = generaSequenzaNumeri(totdebitoKarmico, totmainFemaleLineBot);
        var Sezione8 = generaSequenzaNumeri(totmainFemaleLineBot, talentoGiorno);


        var total = day + month + year; // Somma il giorno, il mese e l'anno
        // main
        document.getElementById("talentoGiorno").innerText = talentoGiorno;
        // Dati da inviare
    var data = {
        descrtalentoGiorno: talentoGiorno,
        // Altri dati che desideri inviare
    };
    var options = {
        method: 'POST', // Metodo della richiesta
        headers: {
            'Content-Type': 'application/json' // Tipo di contenuto della richiesta
        },
        body: JSON.stringify(data) // Dati da inviare convertiti in formato JSON
    };
     // Effettua la richiesta AJAX
     fetch('/app/Http/Controllers/Admin/PostController.php', options)
     .then(response => {
         if (!response.ok) {
             throw new Error('Errore nella richiesta.');
         }
         return response.json(); // Converte la risposta in formato JSON
     })
     .then(data => {
         // Fai qualcosa con la risposta ricevuta
         console.log(data);
     })
     .catch(error => {
         console.error('Si è verificato un errore:', error);
     });
        document.getElementById("talentoMese").innerText = talentoMese;
        document.getElementById("debitoKarmico").innerText = totdebitoKarmico;
        document.getElementById("soulTask").innerText = soulTask;
        document.getElementById("arcana").innerText = totArcana;
        document.getElementById("femaleLineTop").innerText =
            totmainFemaleLineTop;
        document.getElementById("maleLineTop").innerText = totmainMaleLineTop;
        document.getElementById("femaleLineBot").innerText =
            totmainFemaleLineBot;
        document.getElementById("maleLineBot").innerText = totmainMaleLineBot;

        // secondary
        document.getElementById("talentoGiornoSecondary").innerText =
            tottalentoGiornoSecondary;
        document.getElementById("talentoMeseSecondary").innerText =
            tottalentoMeseSecondary;
        document.getElementById("debitoKarmicoSecondary").innerText =
            totdebitoKarmicoSecondary;
        document.getElementById("soulTaskSecondary").innerText =
            totsoulTaskSecondary;
        document.getElementById("arcanaSecondary").innerText =
            totArcanaSecondary;
        document.getElementById("femaleLineTopSecondary").innerText =
            totmainFemaleLineTopSecondary;
        document.getElementById("maleLineTopSecondary").innerText =
            totmainMaleLineTopSecondary;
        document.getElementById("femaleLineBotSecondary").innerText =
            totmainFemaleLineBotSecondary;
        document.getElementById("maleLineBotSecondary").innerText =
            totmainMaleLineBotSecondary;

        // terzi
        document.getElementById("talentoGiornoterzi").innerText =
            tottalentoGiornoterzi;
        document.getElementById("talentoMeseterzi").innerText =
            tottalentoMeseterzi;
        document.getElementById("debitoKarmicoterzi").innerText =
            totdebitoKarmicoterzi;
        document.getElementById("soulTaskterzi").innerText = totsoulTaskterzi;
        document.getElementById("arcanaterzi").innerText = totArcanaterzi;
        document.getElementById("femaleLineTopterzi").innerText =
            totmainFemaleLineTopterzi;
        document.getElementById("maleLineTopterzi").innerText =
            totmainMaleLineTopterzi;
        document.getElementById("femaleLineBotterzi").innerText =
            totmainFemaleLineBotterzi;
        document.getElementById("maleLineBotterzi").innerText =
            totmainMaleLineBotterzi;

        //amore,mezzo,soldi
        document.getElementById("amore").innerText =
        totAmore;
        document.getElementById("mezzo").innerText =
        totMezzo;
        document.getElementById("soldi").innerText =
        totSoldi;

        //green1 e green2
        document.getElementById("green1").innerText =
        totGreen1;
        document.getElementById("green2").innerText =
        totGreen2;

        //predizione numeri futuro
        document.getElementById("primaSezione").innerText =
        primaSezione;
        document.getElementById("Sezione2").innerText =
        Sezione2;
        document.getElementById("Sezione3").innerText =
        Sezione3;
        document.getElementById("Sezione4").innerText =
        Sezione4;
        document.getElementById("Sezione5").innerText =
        Sezione5;
        document.getElementById("Sezione6").innerText =
        Sezione6;
        document.getElementById("Sezione7").innerText =
        Sezione7;
        document.getElementById("Sezione8").innerText =
        Sezione8;

    });
