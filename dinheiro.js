const end = document.querySelector(".end");
const sound = document.querySelector(".verification");
const coments = document.querySelector(".endmain")

const endtwo = document.querySelector(".endtwo")

function ermergir() {
    sound.style.display = `none`;
    end.style.display = `block`;
    endtwo.style.display = `block`
    coments.style.display = `flex`
}

function start() {
    setTimeout(() => {
        ermergir()
    }, 100)
}

window.addEventListener("load", start);