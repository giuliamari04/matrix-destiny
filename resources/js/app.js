import "./bootstrap";
import "~resources/scss/app.scss";
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

document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita il comportamento predefinito del modulo
    var inputDate = document.getElementById('date').value; // Ottieni il valore della data
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
    var talentoGiorno = day;
    var talentoMese = month;
    var debitoKarmico = day + month + parseInt(yearShort);
    var soulTask = totalYearSum;
    var total = day + month + year; // Somma il giorno, il mese e l'anno
    document.getElementById('talentoGiorno').innerText = talentoGiorno; // Visualizza il valore del giorno
    document.getElementById('talentoMese').innerText = talentoMese; // Visualizza il valore del mese
    document.getElementById('debitoKarmico').innerText = debitoKarmico; // Visualizza il valore dell'anno
    document.getElementById('soulTask').innerText = soulTask; // Visualizza la somma
});
