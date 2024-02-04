/** Notes for me
 * 
 * window.location.href = current page (I think??) || var: currentChannel
 * location.href = the thing you want to redirect to || var: miiChannel (use camelcase for vars)
 * "||" (OR)
 * "&&" (AND)
 */

currentChannel = window.location.href.toLowerCase()
miiChannel = location.href 

/** defining trace function for paths.js only */
const trace = function (txt, ty, ...nono) {
  const ver = { warn: "Warning", note: "Notice" };
  const hex = { warn: "#ff0019", note: "#ffa600" };
  const pat = `color: ${hex[ty]}; font-weight: bold; font-family: "Arial"; font-size: 13px;`;

  /* Error Catcher */
  if (nono.length > 0 || !(ty in ver)) {
      trace("You didn't run the trace command correctly. Please review the Help Guide for tracing.", "warn");
  } else {
      console.log(`%c[ ${ver[ty]} ] %c${txt}`, pat, '');
  }
}

if (currentChannel === "https://pukacyi.github.io/cyiara/aboutme" || currentChannel === "https://pukacyi.github.io/cyiara/about") {
    miiChannel = "https://pukacyi.github.io/Cyiara/pages/aboutme";
    trace("Redirecting.", "info");
  } else 
  if (currentChannel === "https://pukacyi.github.io/cyiara/dni") {
    miiChannel = "https://pukacyi.github.io/Cyiara/pages/dni";
    trace("Redirecting.", "info");
  } else 
  if (currentChannel === "https://pukacyi.github.io/cyiara/interests") {
    miiChannel = "https://pukacyi.github.io/Cyiara/pages/interests";
    trace("Redirecting.", "info");
  } else 
  if (
    currentChannel === "https://pukacyi.github.io/cyiara/wdy" || currentChannel === "https://pukacyi.github.io/cyiara/mii" || currentChannel === "https://pukacyi.github.io/cyiara/henry" || currentChannel === "https://pukacyi.github.io/cyiara/austin" || currentChannel === "https://pukacyi.github.io/cyiara/eteled"
  ) {
    miiChannel = "https://pukacyi.github.io/Cyiara/wii";
    trace("Redirecting.", "info");
  } else 
  if (currentChannel === "https://pukacyi.github.io/cyiara/cyinora") {
    miiChannel = "https://twitter.com/NightCyi";
    trace("Redirecting.", "info");
}