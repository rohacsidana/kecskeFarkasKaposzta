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
    var tombImg = $("img")
    for (let i = 0; i < tombImg.length; i++) {
        tombImg[i].addEventListener("click", tombKiir)
        tombImg[i].addEventListener("mouseover", hover)
        tombImg[i].addEventListener("mouseout", hoverOff)
    }
    console.log(tombSrc)
}
function footer() {
    $1("footer p").innerHTML = "Rohácsi Dana"
    $1("footer p").style.textAlign = "center"
}
function tombKiir() {
    tombSrc.push(event.target.src)
}
function hover() {
    event.target.className += " kiemel"
}
function hoverOff() {
    event.target.className = ""
}