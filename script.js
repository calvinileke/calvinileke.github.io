alert("Bienvenue sur le site de Calvin !");
function saluer() {
    alert("Merci de votre message !");
}

function afficherCompetences() {
    let liste = document.getElementById("listeCompetences");

    if (liste.style.display === "none") {
        liste.style.display = "block";
    } else {
        liste.style.display = "none";
    }
}

function verifierFormulaire() {
    let nom = document.querySelector("input[type='text']").value;
    let email = document.querySelector("input[type='email']").value;
    let message = document.querySelector("textarea").value;

    if (nom === "" || email === "" || message === "") {
        alert("Veuillez remplir tous les champs.");
        return false;
    }

    alert("Merci " + nom + ", votre message a été envoyé !");
    return true;
}

if (boutonSombre) {
    boutonSombre.onclick = function () {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            boutonSombre.innerHTML = "☀️ Mode clair";
        } else {
            boutonSombre.innerHTML = "🌙 Mode sombre";
        }
    };
}
let compteur = document.getElementById("compteur");

let nombreVisites = 1250;

compteur.innerHTML = "👥 Nombre de visiteurs : " + nombreVisites;
let date = document.getElementById("date");

let aujourdHui = new Date();

date.innerHTML = "📅 Date du jour : " + aujourdHui.toLocaleDateString();

boutonHaut.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const modeSombre = document.getElementById("modeSombre");

modeSombre.addEventListener("click", function() {
    document.body.classList.toggle("sombre");
});
const formulaire = document.querySelector("form");

formulaire.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Merci pour votre message ! Je vous répondrai bientôt.");
});
formulaire.reset();
const texteAnime = document.getElementById("texteAnime");

if (texteAnime) {
    texteAnime.style.opacity = "0";

    setTimeout(() => {
        texteAnime.style.transition = "1s";
        texteAnime.style.opacity = "1";
    }, 500);
}
setTimeout(() => {
    texteAnime.style.transition = "1s";
    texteAnime.style.opacity = "1";
}, 500);
const boutonHaut = document.getElementById("haut");

boutonHaut.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
let visites = localStorage.getItem("visites");

if (visites === null) {
    visites = 1;
} else {
    visites++;
}

localStorage.setItem("visites", visites);

document.getElementById("compteur").innerHTML =
    "Nombre de visites sur ce navigateur : " + visites;
    const dateActuelle = new Date();

document.getElementById("date").innerHTML =
    "Nous sommes le " + dateActuelle.toLocaleDateString() +
    " à " + dateActuelle.toLocaleTimeString();
    function afficherDate() {
    let maintenant = new Date();

    let date = maintenant.toLocaleDateString();
    let heure = maintenant.toLocaleTimeString();

    document.getElementById("date").innerHTML =
        "📅 Date : " + date + "<br>⏰ Heure : " + heure;
}

afficherDate();

setInterval(afficherDate, 1000);