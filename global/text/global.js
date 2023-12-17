// hahaha haxe trace !! NO WAY!! 
var trace = function(txt, ty) {
    zType = { warn: "Warning", note: "Notice" };

    zColor = { warn: "#ff0019", note: "#ffa600", };

    zStyle = `color: ${zColor[ty]}; font-weight: bold; font-family: "Arial"; font-size: 13px;`;

    console.log(`%c[ ${zType[ty]} ] %c${txt}`, zStyle, '');

    /** 
     * Usage:
     * Input: trace("Banami is cute but Aori...","warn") - Output: ** [ Warning ] Banami is cute but Aori...
     */
};

document.addEventListener("DOMContentLoaded", function() {
    trace("Site fully loaded! :D", "note");
});