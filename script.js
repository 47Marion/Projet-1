function openCloseNav(x) {
    
    let menu = document.querySelector(".menu-main");
    if (menu.style.width === "100%") {
        x.classList.remove("change");
        menu.style.width = "0";
    } else {
        x.classList.add("change");
        menu.style.width = "100%";
    }
}


const message = "Bien reçu ! Je ne pars pas dans une aventure ennuyeuse !";
const form = document.getElementById("contactForm");
if (form != undefined){  
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert(message);
    });
}
