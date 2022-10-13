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

