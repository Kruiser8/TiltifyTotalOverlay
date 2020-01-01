/*
 This overlay was made by Kruiser8 (https://twitch.tv/kruiser8)
  and is licensed under the Creative Commmons Attribution 4.0 International License (CC BY 4.0)

 For License information, visit https://creativecommons.org/licenses/by/4.0/
*/

/* Tiltify Settings */
var tiltify_userId = "TILTIFY_USER_HERE"
var tiltify_access_token = "TILTIFY_TOKEN_HERE";


/*
  To find your Streamlabs token, go to https://streamlabs.com/dashboard#/apisettings
  Copy the Socket API Token into the quotes below
*/
var streamlabs_token = "STREAMLABS_SOCKET_TOKEN";


/* Overlay Settings */
var message = "${total} Channel Total"; // {total} will get replaced with your total amount raised

// Use the styling for the old tiltify overlay
// OPTIONS
// - "compact"
// - "one"
// - "twoBeta"
// - "newBeta"
var useStyle = "compact";

// Enforce different font color
// eg. "#fff" (White), "#000" (Black), "#c10f3a" (St. Jude Red)
var fontColor = "#c10f3a";

// Align the text inside the overlay.
//  - possible inputs: "left", "center", or "right"
var alignText = "left";


/* Developer Tool */
var debug = false;
