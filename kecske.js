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
    hoverEsTombbeIr()
    kepekEltuntetEsAtTesz()

}
function footer() {
    $1("footer p").innerHTML = "Rohácsi Dana és Vitay Zalán"
    $1("footer p").style.textAlign = "center"
    $1("footer p").style.fontSize = "20px"
}
function tombKiir() {
    tombSrc.push(event.target.src)
    console.log(tombSrc)
}
function hoverEsTombbeIr() {
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
var csonakTele = false
var balrolVagyJobbrol = "bal"
function kepekEltuntetEsAtTesz() {
    var balKepek = $("#bal img")

    for (let i = 0; i < balKepek.length; i++) {
        balKepek[i].addEventListener("click", eltuntet)
        balKepek[i].addEventListener("click", csonakbaTesz)
    }
    
}
function eltuntet() {
    event.target.className = "displaynone"
    event.target.removeEventListener("mouseout", hoverOff)
    event.target.addEventListener("click", csonakbaTesz)
}

function csonakbaTesz() {
    console.log(csonakTele)
    if (csonakTele == false) {
        console.log("belep")
        ID("csonak").innerHTML += "<img src=" + event.target.src + " alt=" + event.target.alt + ">"
        csonakTele = true
        event.target.removeEventListener("click", eltuntet)
        $("#csonak img")[0].addEventListener("mouseover", hover)
        $("#csonak img")[0].addEventListener("mouseout", hoverOff)
        if(balrolVagyJobbrol == "bal"){
            $("#csonak img")[0].addEventListener("click", jobbraTesz)
        }else{
            $("#csonak img")[0].addEventListener("click", balraTesz)
        }
    }
    else {
        alert("TELE A CSÓNAK")
        event.target.className = ""
    }
}
function jobbraTesz() {
    ID("jobb").innerHTML += "<img src=" + event.target.src + " alt=" + event.target.alt + ">"
    balrolVagyJobbrol = "jobb"
    ID("csonak").innerHTML = ""
    csonakTele = false  
    var jobbKepek = $("#jobb img") 
    for (let i = 0; i < jobbKepek.length; i++) {
        jobbKepek[i].addEventListener("click", eltuntet)
        jobbKepek[i].addEventListener("click", csonakbaTesz)
    }
    hoverEsTombbeIr()  
    csonakbaJobbrol()  
}

function balraTesz() {
    ID("bal").innerHTML += "<img src=" + event.target.src + " alt=" + event.target.alt + ">"
    balrolVagyJobbrol = "bal"
    ID("csonak").innerHTML = ""
    csonakTele = false  
    var balKepek = $("#bal img") 
    for (let i = 0; i < balKepek.length; i++) {
        balKepek[i].addEventListener("click", eltuntet)
        balKepek[i].addEventListener("click", csonakbaTesz)
    }
    hoverEsTombbeIr()  
    csonakbaJobbrol()  
}

function csonakbaJobbrol(){
    var jobbKepek = $("#jobb img")
    for (let i = 0; i < jobbKepek.length; i++) {
        jobbKepek[i].addEventListener("click",eltuntet)        
    }
}