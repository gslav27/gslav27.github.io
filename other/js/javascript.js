// >>> Menu-toggle-animation:
// Set button to click.
var button = document.getElementById( 'menu-toggle' );

// Click the button.
button && button.onclick = function() {
  // Toggle class "opened". Set also aria-expanded to true or false.
  if ( -1 !== button.className.indexOf( 'opened' ) ) {
    button.className = button.className.replace( ' opened', '' );
    button.setAttribute( 'aria-expanded', 'false' );
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  } else {
    button.className += ' opened';
    button.setAttribute( 'aria-expanded', 'true' );
    document.getElementById('side-menu').style.width = '200px';
    document.getElementById('main').style.marginLeft = '200px'
  };
};



// >>> googlemap functions
function myMap1() {
  var myCenterDUBR1 = new google.maps.LatLng(51.571727, 26.567370);
  var mapCanvas = document.getElementById("googlemap1");
  var mapDUBR1 = {center: myCenterDUBR1, zoom: 17};
  var map = new google.maps.Map(mapCanvas, mapDUBR1);
  var marker = new google.maps.Marker({position:myCenterDUBR1, icon: "other/images/logo.png"});
  marker.setMap(map);
  var myCenterDUBR2 = new google.maps.LatLng(51.571727, 26.567370);
  var mapCanvas = document.getElementById("googlemap2");
  var mapDUBR2 = {center: myCenterDUBR2, zoom: 17, mapTypeId: google.maps.MapTypeId.HYBRID};
  var map = new google.maps.Map(mapCanvas, mapDUBR2);
  var marker = new google.maps.Marker({position:myCenterDUBR2});
  marker.setMap(map)
}



// >>> for back-to-top button
window.onscroll = function() {
	scrollFunction();
	console.log('ScrollHandler');
};

function scrollFunction() {
	console.log('ScrollFunction');
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("back-to-top").style.display = "block";
	} else {
		document.getElementById("back-to-top").style.display = "none";
	}
}

// // When user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }



// >>> simple JS buttons
function changeTextColor(textColor, borderColor) {
  var elem = document.getElementById('textresult');
  elem.style.color = textColor;
  elem.style.borderColor = borderColor;
}

function changeBackgroundColor(backgroundColor) {
  var elem = document.getElementById('backgroundresult');
  elem.style.backgroundColor = backgroundColor;
}

// set & save variable with default css style
var startStyle = (function saveSettings() {
  var startSettings = document.getElementById('backgroundresult');
  return window.getComputedStyle(startSettings).backgroundColor;
  // return window.getComputedStyle(startSettings);
})();

// use
function defaultSettings(inputColor) {
  var elem = document.getElementById('backgroundresult');
  elem.style.backgroundColor = inputColor;
}

// variable for selected option of css-property
var ourType;

// set 'ourType' to selected option of css-property
function set(property, text) {
  var elem = document.getElementById('inserttype');
  elem.textContent = text; // insert a text of selected css-property
  document.getElementById('inactive').style.display = 'block'; // make color buttons available
  ourType = property;
  return ourType;
}

// change css property:'property' depends on 'ourType'-variable, 'value' depends on selected value
function changeColor(value) {
  var elem = document.getElementById('result');
  var selectedProperty = ourType;
  elem.style[selectedProperty] = value;
}

// save default css style
var start = (function saveSettings() {
  return window.getComputedStyle(document.getElementById('result'));
})();

// set default css style
function toStart(startValue) {
  var elem = document.getElementById('result');
  elem.style = startValue;
}
