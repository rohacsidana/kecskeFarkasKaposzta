window.addEventListener("load", init)
function ID(elem) {
    return document.getElementById(elem)
}
function $(elem) {
    return document.querySelectorAll(elem)
}
function $1(elem) {
    return document.querySelector(elem)
}
var tombSrc = []
function init() {
    ID("csonak").innerHTML += `<img src="kepek/csonak.png" alt="csonak">`
    footer()
    harmadikFl()
    baloldaliKepek()

}
function footer() {
    $1("footer p").innerHTML = "Rohácsi Dana"
    $1("footer p").style.textAlign = "center"
    $1("footer p").style.fontSize = "20px"
}
function tombKiir() {
    tombSrc.push(event.target.src)
    console.log(tombSrc)
}
function harmadikFl() {
    var tombImg = $("img")
    for (let i = 0; i < tombImg.length; i++) {
        tombImg[i].addEventListener("click", tombKiir)
        tombImg[i].addEventListener("mouseover", hover)
        tombImg[i].addEventListener("mouseout", hoverOff)
    }

}
function hover() {
    event.target.className += " kiemel"
}
function hoverOff() {
    event.target.className = ""
}
function baloldaliKepek() {
    var balKepek = $("#bal img")
    for (let i = 0; i < balKepek.length; i++) {

        balKepek[i].addEventListener("click", eltuntet)

    }
}
function eltuntet() {
    event.target.className = "displaynone"
    event.target.removeEventListener("click", tombKiir)
    event.target.removeEventListener("mouseover", hover)
    event.target.removeEventListener("mouseout", hoverOff)

}
function csonakbaTesz() {
    $1("article").innerHTML += event.target
}