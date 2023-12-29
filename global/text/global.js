// hahaha haxe trace !! NO WAY!! 
const trace = function(txt, ty) {
    ver = { warn: "Warning", note: "Notice" };
    hex = { warn: "#ff0019", note: "#ffa600", };
    pat = `color: ${hex[ty]}; font-weight: bold; font-family: "Arial"; font-size: 13px;`;

    /* Error Catcher */
    if (txt !== undefined || !(ty in ver)) {
        console.log(`%c[ ${ver[ty]} ] %c${txt}`, pat, '');
    }
    else {
        trace("You didn't run the trace command correctly. Please review the Help Guide for tracing below.", "warn");
        traceHelper();
    }    
};

var traceHelper = function() {
    trace('\nTrace Doc\n--------------\n2 types: "warn", "note"', "note"); 
    trace("Banami is cute but Aori...", "warn"); //hueh 
};

errorPage = document.getElementsByClassName('error-page');

if (errorPage.length > 0) {
    trace("Henry what the fuck did you just do... HOW THE FUCK DID YOU BURN THE WATER??", "warn");
    trace("Austin shut up you built like a Nintendo Wii", "info")
    trace("stop talking to yourself","info");
    trace("WII DELETED YOU.","warn");
}

document.addEventListener("DOMContentLoaded", function() {
    trace("Site fully loaded! :D", "note");
});
