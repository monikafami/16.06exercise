function zmienTlo() {
    document.getElementById("firstP").style.backgroundColor = "white";
    document.getElementById("firstP").style.color = "red";
    document.getElementById("secondP").style.backgroundColor = "white";
    document.getElementById("secondP").style.color = "red";
}

document.getElementById("btn-main").onclick = zmienTlo;


function parAddText() {
    for (let i = 0; 1 < document.getElementsByClassName("par").length; i++) {
        document.getElementsByClassName("par")[i].innerHTML =
            "Jestem" + [i + 1] + "paragrafem";
    }
}

document.getElementById("przycisk").addEventListener("click", parAddText);
