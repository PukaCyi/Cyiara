// hahaha haxe trace !! NO WAY!! 
var trace = function(txt, ty) {
    zType = { warn: "Warning", note: "Notice" };
    zColor = { warn: "#ff0019", note: "#ffa600", };
    zStyle = `color: ${zColor[ty]}; font-weight: bold; font-family: "Arial"; font-size: 13px;`;

    console.log(`%c[ ${zType[ty]} ] %c${txt}`, zStyle, '');

    /** 
     * Usage:
     * Input: trace("Banami is cute but Aori...","warn") - Output: ** [ Warning ] ** Banami is cute but Aori...
     */
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
