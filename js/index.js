/*
 This overlay was made by Kruiser8 (https://twitch.tv/kruiser8)
  and is licensed under the Creative Commmons Attribution 4.0 International License (CC BY 4.0)

 For License information, visit https://creativecommons.org/licenses/by/4.0/
*/

/**
 * Connect to the Streamlabs websocket and setup the event handlers
 */
function connectWebsocket() {
  //Connect to socket
  var streamlabs = io(`https://sockets.streamlabs.com?token=${streamlabs_token}`, {transports: ['websocket']});

  streamlabs.onclose = function () {
    console.error('Error connecting to streamlabs socket: Incorrect token or connection error');
  }
  //Perform Action on event
  streamlabs.on('event', (eventData) => {
    if (debug) {
      console.log(eventData);
    }
    switch(eventData.type) {
      case 'tiltifydonation':
        getTotalAmountRaised();
        break;
      default:
      // do nothing
    }
  });
}

function getTotalAmountRaised() {
  $.ajax({
    url: "https://tiltify.com/api/v3/users/" + tiltify_userId,
    headers: {
      "Authorization": "Bearer " + tiltify_access_token,
    }
  }).done(function( data ) {
    if (debug) {
      console.log(data);
    }
    var totalAmountRaised = data.data.totalAmountRaised;
    $('.total').html(message.replace('{total}',totalAmountRaised.toLocaleString()));
  });
}

// Do stuff if the document is fully loaded
$(document).ready(function() {
  // Show an error message if the API key file is not loaded
  if (typeof tiltify_access_token === "undefined" || tiltify_access_token === "") {
    $("body").html("No Tiltify token found or loaded!");
    $("body").css({"font-size": "50px", "color": "#ff8080", "text-align": "center"});
  } else if (typeof tiltify_userId === "undefined" || tiltify_userId === "") {
    $("body").html("No Tiltify user id found or loaded!");
    $("body").css({"font-size": "50px", "color": "#ff8080", "text-align": "center"});
  }
  // Connect to the Streamlabs Chatbot websocket
  else {
    $('.total').addClass(useStyle);
    $('.total').css('color', fontColor);
    $('.container').css('text-align', alignText);
    getTotalAmountRaised();
    connectWebsocket();
  }
});
