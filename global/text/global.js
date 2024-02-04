// hahaha haxe trace !! NO WAY!! 
const trace = function (txt, ty, ...nono) {
    const ver = { warn: "Warning", note: "Notice" };
    const hex = { warn: "#ff0019", note: "#ffa600" };
    const pat = `color: ${hex[ty]}; font-weight: bold; font-family: "Arial"; font-size: 13px;`;

    /* Error Catcher */
    if (nono.length > 0 || !(ty in ver)) {
        trace("You didn't run the trace command correctly. Please review the Help Guide for tracing below.", "warn");
        traceHelper();
    } else {
        console.log(`%c[ ${ver[ty]} ] %c${txt}`, pat, '');
    }
}

// I don't know how to make the handler show an error message - so have this "Something went wrong" message instead.
window.onerror = function() {
    trace("An error has occurred while attempting to perform an action.","warn");
};

const traceHelper = function () {
    trace('\nTrace Doc\n--------------\n2 types: "warn", "note"', "note");
    trace("Banami is cute but Aori...", "warn"); //hueh
};

errorPage = document.getElementsByClassName('error-page');

if (errorPage.length > 0) {
    trace("Henry what the fuck did you just do... HOW THE FUCK DID YOU BURN THE WATER??", "warn");
}

document.addEventListener("DOMContentLoaded", function() {
    trace("Site fully loaded! :D", "note");
});

function hikkiomori() {
    document.cookie = "omo=fuckJavaScript"; // it no no wanna :C
}

bossRush = false;

function hikki() {
    if (!bossRush && document.cookie.includes('omo')) {
        bossRush = true;
        const hueh = new Audio('https://pukacyi.github.io/Cyiara/global/assets/music/hikkomori.mp3');
        hueh.play();
        hueh.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        trace("You wanted to see.. what lays beyond...", "info");
    } else if (bossRush) {
        trace("What made you want to do this? Why are you so pathetic... ", "warn");
    }
}

document.addEventListener('click', hikki);