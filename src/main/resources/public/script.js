function fadee(time) {
    let BGCONT = document.querySelector(".bgcontainer")
    if(BGCONT.classList.contains("nodisplay")) {
        BGCONT.classList.remove("nodisplay")
        BGCONT.style.transition = time+"ms"
        setTimeout(function() {
            BGCONT.classList.add("bgcontaineractive")
            document.querySelector(".popcont").classList.add("grow")
        },50)
        setTimeout(function() {BGCONT.style.transition = "0ms"},time)
    }
    else {
        BGCONT.style.transition = time+"ms"
        setTimeout(function() {
            BGCONT.classList.remove("bgcontaineractive")
            document.querySelector(".popcont").classList.remove("grow")
    },50)
        setTimeout(function() {BGCONT.classList.add("nodisplay")},time)
    }
}
function betolt(mit) {
    let contcont = document.querySelector(".contcont")
    let cim = contcont.childNodes[1]
    let content = contcont.childNodes[3]
    switch (mit) {
        case "login":
            cim.innerHTML = "Belépés"
            
            break;
        case "info":
            cim.innerHTML = "Szabályok"
            content.innerHTML = `
            <p class="contentp">Találd ki a napi szót 8 tippből! Minden tipp után a négyzetek színe jelzi, hogy mennyire kerültél közel a megoldáshoz.</p>
            <div class="guessescenter">
            <div class="guesses2">
            <div class="row">
            <div class="letterboxyellow">
            <div class="letterbox">
        <div class="letter">H</div>
        </div>
        </div>
        <div class="letterboxcontainer whiteborder">
            <div class="letterbox"><div class="letter">I</div></div>
        </div>
        <div class="letterboxcontainer whiteborder">
            <div class="letterbox"><div class="letter">T</div></div>
        </div>
        <div class="letterboxcontainer whiteborder">
            <div class="letterbox"><div class="letter">E</div></div>
        </div>
        <div class="letterboxcontainer whiteborder">
            <div class="letterbox"><div class="letter">L</div></div>
        </div>
        </div>
        </div>
        </div>
        `;
            break;
        case "settings":
            cim.innerHTML = "Beállítások"
            break;
        case "stats":
            cim.innerHTML = "Statisztika"
            content.innerHTML="Lépj be vándor"
            break;
        default:
            break;
    }
}
function flipto(which, colour) {
    let speed = 350;
    let allbox = document.querySelectorAll(".letterbox")
    let now = allbox[which - 1];
    now.parentElement.classList.remove("letterboxyellow")
    now.parentElement.classList.remove("letterboxgreen")
    now.parentElement.classList.remove("letterboxgrey")
    now.parentElement.style.transitionDuration = speed + "ms";
    now.parentElement.classList.add("flip")
    setTimeout(function () {
        now.parentElement.style.transitionDuration = "10ms";
        now.parentElement.classList.add("letterbox" + colour);
        now.parentElement.style.transitionDuration = speed + "ms";
        setTimeout(function () {
            now.parentElement.classList.remove("letterboxcontainer")
            now.parentElement.classList.remove("flip");
        }, speed)
    }, speed)
}
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
document.querySelector("#menutitle").innerHTML = "Szózat 2.0 - "+day+". nap"
window.addEventListener("load", function () {
   




    let probalkozasok = []
    let mostaniszo = ""
    let hanyadiksor = 1
    let hanyadikbetu = 1
    
    function getszo() {
        let szo = ""
        let kockak = document.querySelectorAll(".letterbox")
        let hanyadik = (hanyadiksor - 1) * 5;
        for(let i = hanyadik;i < hanyadik+5;i++) {
            let betuu = kockak[i].firstChild != null ? kockak[i].firstChild.innerHTML : ""
            szo += betuu
        }
        return szo;
    }

    function doo(mit) {
        if (mit == "do") {
            console.log(getszo())
        }
        else {
            let kockak = document.querySelectorAll(".letterbox")
            let hanyadik = (hanyadiksor - 1) * 5 + hanyadikbetu - 1;
            if (hanyadikbetu > 1) { kockak[hanyadik - 1].innerHTML = ''; kockak[hanyadik - 1].parentNode.classList.remove("whiteborder"); hanyadikbetu-- }
        }
    }
    
   
    
    function write(betu) {
        let speed = 100
        let kockak = document.querySelectorAll(".letterbox")
        let hanyadik = (hanyadiksor - 1) * 5 + hanyadikbetu - 1;
        if (hanyadikbetu <= 6) {
            let elozo = kockak[hanyadik - 1] != null ? kockak[hanyadik - 1].firstChild.innerHTML.toUpperCase() : 0
            let elozoelozo = kockak[hanyadik - 2] != null ? kockak[hanyadik - 2].firstChild.innerHTML.toUpperCase() : 0
            let duplak = ["S", "Z", "L", "N", "T", "D", "DZ", "C", "G"]
            let most = ["Z", "Y", "S"]
            let voltevaltozas = false
            if (elozo != 0 && duplak.includes(elozo) && most.includes(betu)) {
                switch (betu) {
                    case "Z":
                        if (elozo == "D") {
                            if (elozoelozo == "D") {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">DZ</div>'
                                kockak[hanyadik - 2].innerHTML = '<div class="letter">DZ</div>'
                            }
                            else {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">DZ</div>'
                            }
                            hanyadikbetu--
                            hanyadik--
                            voltevaltozas = true
                        }
                        else if (elozo == "S") {
                            if (elozoelozo == "S") {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">SZ</div>'
                                kockak[hanyadik - 2].innerHTML = '<div class="letter">SZ</div>'
                            }
                            else {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">SZ</div>'
                            }
                            hanyadikbetu--
                            hanyadik--
                            voltevaltozas = true
                        }
                        break;
                    case "S":
                        if (elozo == "Z") {
                            if (elozoelozo == "Z") {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">ZS</div>'
                                kockak[hanyadik - 2].innerHTML = '<div class="letter">ZS</div>'
                            }
                            else {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">ZS</div>'
                            }
                            hanyadikbetu--
                            hanyadik--
                            voltevaltozas = true
                        }
                        else if (elozo == "C") {
                            if (elozoelozo == "C") {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">CS</div>'
                                kockak[hanyadik - 2].innerHTML = '<div class="letter">CS</div>'
                            }
                            else {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">CS</div>'
                            }
                            hanyadikbetu--
                            hanyadik--
                            voltevaltozas = true
                        }
                        else if (elozo == "DZ") {
                            if (elozoelozo == "DZ") {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">DZS</div>'
                                kockak[hanyadik - 2].innerHTML = '<div class="letter">DZS</div>'
                            }
                            else {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">DZS</div>'
                            }
                            hanyadikbetu--
                            hanyadik--
                            voltevaltozas = true
                        }
                        break;
                    case "Y":
                        if (elozo == "L") {
                            if (elozoelozo == "L") {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">LY</div>'
                                kockak[hanyadik - 2].innerHTML = '<div class="letter">LY</div>'
                            }
                            else {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">LY</div>'
                            }
                            hanyadikbetu--
                            hanyadik--
                            voltevaltozas = true
                        }
                        else if (elozo == "G") {
                            if (elozoelozo == "G") {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">GY</div>'
                                kockak[hanyadik - 2].innerHTML = '<div class="letter">GY</div>'
                            }
                            else {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">GY</div>'
                            }
                            hanyadikbetu--
                            hanyadik--
                            voltevaltozas = true
                        }
                        else if (elozo == "N") {
                            if (elozoelozo == "N") {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">NY</div>'
                                kockak[hanyadik - 2].innerHTML = '<div class="letter">NY</div>'
                            }
                            else {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">NY</div>'
                            }
                            hanyadikbetu--
                            hanyadik--
                            voltevaltozas = true
                        }
                        else if (elozo == "T") {
                            if (elozoelozo == "T") {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">TY</div>'
                                kockak[hanyadik - 2].innerHTML = '<div class="letter">TY</div>'
                            }
                            else {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">TY</div>'
                            }
                            hanyadikbetu--
                            hanyadik--
                            voltevaltozas = true
                        }
                        break;
                    default:
                    return 0
                }
                
            }
            if (!voltevaltozas && hanyadikbetu <= 5) {
                kockak[hanyadik].innerHTML = '<div class="letter">' + betu + '</div>'
                kockak[hanyadik].parentNode.classList.add('whiteborder')
                kockak[hanyadik].parentNode.style.transitionDuration = speed + "ms";
                kockak[hanyadik].parentNode.classList.add('boom')
                setTimeout(function () {
                    kockak[hanyadik].parentNode.classList.remove('boom')
                }, speed)
            }
            if(hanyadikbetu <= 5) {mostaniszo += betu}
            if(!voltevaltozas && hanyadikbetu == 6) {hanyadikbetu = 5}
            
            hanyadikbetu++;
        }
    }

    let betuk = ["Cs", "Dz", "Dzs", "Gy", "Ly", "Ny", "Sz", "Ty", "Zs", "Ö", "Ü", "Ó", "Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "Ő", "Ú", "A", "S",
        "D", "F", "G", "H", "J", "K", "L", "É", "Á", "Ű", "Í", "Y", "X", "C", "V", "B", "N", "M"]
    let gombok = document.querySelectorAll(".normalbtn")
    for (let i = 0; i < betuk.length; i++) {
        gombok[i].setAttribute("data-betu", betuk[i])
    }
    let bigbtns = ['do', 'delete']
    let szoveg = ['Beküld', 'Töröl']
    let bigbtn = document.querySelectorAll(".bigbtn")
    bigbtn[0].setAttribute("data-do", bigbtns[0])
    bigbtn[1].setAttribute("data-do", bigbtns[1])
    bigbtn[0].firstChild.innerHTML = szoveg[0]
    bigbtn[1].firstChild.innerHTML = szoveg[1]

    
    document.querySelector(".btnbox").addEventListener("click",
        function (event) {
            let betu = event.target.closest('.normalbtn')
            betu = betu == null ? betu : betu.getAttribute("data-betu").toUpperCase()
            if (betu == null) {
                betu = event.target.closest('.bigbtn')
                if (betu != null) {
                    doo(betu.getAttribute('data-do')) //töröl + beküld
                }
            }
            else {
                write(betu) // Írás
            }
        });
});