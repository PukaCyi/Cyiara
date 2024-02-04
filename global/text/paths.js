/** Notes for me
 * 
 * window.location.href = current page (I think??) || var: currentChannel
 * location.href = the thing you want to redirect to || var: miiChannel (use camelcase for vars)
 * "||" (OR)
 * "&&" (AND)
 */

currentChannel = window.location.href.toLowerCase()
miiChannel = location.href 

if (currentChannel === "https://pukacyi.github.io/cyiara/aboutme" || currentChannel === "https://pukacyi.github.io/cyiara/about") {
    miiChannel = "https://pukacyi.github.io/Cyiara/pages/aboutme";
} else if (currentChannel === "https://pukacyi.github.io/cyiara/dni") {
    miiChannel = "https://pukacyi.github.io/Cyiara/pages/dni";
} else if (currentChannel === "https://pukacyi.github.io/cyiara/interests") {
    miiChannel = "https://pukacyi.github.io/Cyiara/pages/interests";
} else if (
    currentChannel === "https://pukacyi.github.io/cyiara/wdy" || currentChannel === "https://pukacyi.github.io/cyiara/mii" || currentChannel === "https://pukacyi.github.io/cyiara/henry" || currentChannel === "https://pukacyi.github.io/cyiara/austin" || currentChannel === "https://pukacyi.github.io/cyiara/eteled"
) {
    miiChannel = "https://pukacyi.github.io/Cyiara/wii";
} else if (currentChannel === "https://pukacyi.github.io/cyiara/cyinora") {
    miiChannel = "https://twitter.com/NightCyi";
}