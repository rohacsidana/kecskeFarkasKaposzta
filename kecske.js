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
    footer()

    tombKiir()

    var tombImg = $("img")
    for (let i = 0; i < tombImg.length; i++) {
        tombImg[i].addEventListener("click", tombKiir(tombImg[i]))
        tombImg[i].addEventListener("mouseover", hover)
        tombImg[i].addEventListener("mouseout", hoverOff)
    }
    for (let i = 0; i < tombSrc.length; i++) {
        console.log(tombSrc[i])
    }

}
function footer() {
    $1("footer p").innerHTML = "Rohácsi Dana"
    $1("footer p").style.textAlign = "center"
}
function tombKiir(elem) {
    tombSrc.push(elem)
}
function hover() {
    event.target.className += " kiemel"
}
function hoverOff() {
    event.target.className = ""
}