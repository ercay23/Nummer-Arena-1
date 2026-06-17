let lang="tr";

/* 🌍 LANG */
function setLang(l){
    lang=l;
    const text={
        tr:"SAVAŞA HAZIR MISIN?",
        en:"READY FOR BATTLE?",
        de:"BIST DU BEREIT?",
        fr:"PRÊT POUR LE COMBAT?"
    };
    document.getElementById("speech").innerText=text[l];
}

/* 🎬 START GAME */
function startGame(){
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("gameScreen").classList.remove("hidden");
}

/* 💰 PREMIUM */
function startPremium(){
    alert("Premium Mode Activated!");
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("gameScreen").classList.remove("hidden");
}

/* 🧠 placeholder game */
function render(){
    document.getElementById("balls").innerHTML="Game Loading...";
}
