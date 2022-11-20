let home = document.getElementById('home')
let selector = document.getElementById('selector')
let foodziText = document.getElementById('foodzitext')
let mkjp = document.getElementById('mkjp')
let nonMkjp = document.getElementById('nonmkjp')
let empat = document.getElementById('empat')
let imgCatin = document.getElementById('imgcatin')
let imgBaduta = document.getElementById('imgbaduta')
let imgWadai = document.getElementById('imgwadai')
let foodziDonasi = document.getElementById('foodzidonasi')
let layananKb = document.getElementById('layanankb')

selector.style.display = "none"
foodziText.style.display = "none"
mkjp.style.display = "none"
nonMkjp.style.display = "none"
empat.style.display = "none"
imgCatin.style.display = "none"
imgBaduta.style.display = "none"
imgWadai.style.display = "none"
foodziDonasi.style.display = "none"
layananKb.style.display = "none"

// Enter Button Start
function selectorButton() {
    if (selectorButton) {
        selector.style.display = "block"
        home.style.display = "none"
    }
}

function foodziButton() {
    if (foodziButton) {
        foodziText.style.display = "block"
        selector.style.display = "none"
    }
}

function checkinButton() {
    if (checkinButton) {
        mkjp.style.display = "block"
        selector.style.display = "none"
    }
}

function nonMkjpButton() {
    if (nonMkjpButton) {
        nonMkjp.style.display = "block"
        mkjp.style.display = "none"
    }
}

function empatButton() {
    if (empatButton) {
        empat.style.display = "block"
        nonMkjp.style.display = "none"
    }
}

function imgSelectorButton() {
    if (imgSelectorButton) {
        imgCatin.style.display = "block"
        foodziText.style.display = "none"
    }
}

function imgCatinButton() {
    if (imgCatinButton) {
        imgBaduta.style.display = "block"
        imgCatin.style.display = "none"
    }
}

function imgBadutaButton() {
    if (imgBadutaButton) {
        imgWadai.style.display = "block"
        imgBaduta.style.display = "none"
    }
}

// Enter Button End

// Back Button Start
const homeBackButton = () => {
    if (homeBackButton) {
        home.style.display = "block"
        selector.style.display = "none"
    }
}

const foodziTextBackButton = () => {
    if (foodziTextBackButton) {
        selector.style.display = "block"
        foodziText.style.display = "none"
    }
}

const imgCatinBackButton = () => {
    if (imgCatinBackButton) {
        foodziText.style.display = "block"
        imgCatin.style.display = "none"
    }
}

const imgBadutaBackButton = () => {
    if (imgBadutaBackButton) {
        imgCatin.style.display = "block"
        imgBaduta.style.display = "none"
    }
}

const imgWadaiBackButton = () => {
    if (imgWadaiBackButton) {
        foodziText.style.display = "block"
        imgWadai.style.display = "none"
    }
}

const mkjpBackButton = () => {
    if (mkjpBackButton) {
        selector.style.display = "block"
        mkjp.style.display = "none"
    }
}

const nonMkjpBackButton = () => {
    if (nonMkjpBackButton) {
        mkjp.style.display = "block"
        nonMkjp.style.display = "none"
    }
}

const empatBackButton = () => {
    if (empatBackButton) {
        selector.style.display = "block"
        empat.style.display = "none"
    }
}
//Back Button End

// Action Button Start
const foodziDonasiButton = () => {
    if (foodziDonasiButton) {
        foodziDonasi.style.display = "block"
        foodziText.style.display = "none"
        imgCatin.style.display = "none"
        imgBaduta.style.display = "none"
        imgWadai.style.display = "none"
    }
}

const foodziDonateBackButton = () => {
    if (foodziDonateBackButton) {
        foodziText.style.display = "block"
        foodziDonasi.style.display = "none"
    }
}

const checkinKbButton = () => {
    layananKb.style.display = "block"
    mkjp.style.display = "none"
    nonMkjp.style.display = "none"
    empat.style.display = "none"
}

const kbBackButton = () => {
    mkjp.style.display = "block"
    layananKb.style.display = "none"
}
// Action Button End
