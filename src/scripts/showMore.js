export function showMore(divId) {
    var info = document.getElementById(divId + "information");
    var button = document.getElementById(divId + "showButton");
    var chevron = document.getElementById(divId + "chevron");
    if (info.classList.contains("block")){
        info.classList.add("hidden");
        info.classList.remove("block");
        button.innerText = "show description";
        chevron.classList.remove("rotate-180");
    }
    else {
        info.classList.add("block");
        info.classList.remove("hidden");
        button.innerText = "hide description";
        chevron.classList.add("rotate-180");
    }
}