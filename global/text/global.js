// hahaha haxe trace !! NO WAY!! 
const trace = function(txt, ty) {
    ver = { warn: "Warning", note: "Notice" };
    hex = { warn: "#ff0019", note: "#ffa600", };
    pat = `color: ${hex[ty]}; font-weight: bold; font-family: "Arial"; font-size: 13px;`;

    /* Error Catcher */
    if (!(ty in ver)) {
        trace("You didn't run the trace command correctly. Please review the Help Guide for tracing below.", "warn");
        traceHelper();
    }
    else {
        console.log(`%c[ ${ver[ty]} ] %c${txt}`, pat, '');

    }    
};

var traceHelper = function() {
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
    document.cookie = omo; 
}

function hikki() {
    if (document.cookie.includes('omo')) {
        hueh = new Audio('https://pukacyi.github.io/Cyiara/global/assets/music/hikki.mp3');
        hueh.play();
        hueh.loop();
        trace("You wanted to see.. what lays beyond...","info")
    }
    else {
        trace("What made you want to do this? Why are you so pathetic... ", "warn")
    }
}

hikki();