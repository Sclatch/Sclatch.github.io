export function expandBurger() {
    var x = document.getElementById("navbar-phone");
    if (x.classList.contains("block")){
        x.classList.add("hidden");
        x.classList.remove("block");
    }
    else {
        x.classList.add("block");
        x.classList.remove("hidden");
    }
}