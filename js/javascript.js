// --- googlemap functions
function myMap1() {
  var myCenterDUBR1 = new google.maps.LatLng(51.571727, 26.567370);
  var mapCanvas = document.getElementById("googlemap1");
  var mapDUBR1 = {center: myCenterDUBR1, zoom: 17};
  var map = new google.maps.Map(mapCanvas, mapDUBR1);
  var marker = new google.maps.Marker({position:myCenterDUBR1, icon: "images/logo.png"});
  marker.setMap(map);
  var myCenterDUBR2 = new google.maps.LatLng(51.571727, 26.567370);
  var mapCanvas = document.getElementById("googlemap2");
  var mapDUBR2 = {center: myCenterDUBR2, zoom: 17, mapTypeId: google.maps.MapTypeId.HYBRID};
  var map = new google.maps.Map(mapCanvas, mapDUBR2);
  var marker = new google.maps.Marker({position:myCenterDUBR2});
  marker.setMap(map)
}

// --- for back-to-top button
window.onscroll = function() {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("back-to-top").style.display = "block";
	} else {
		document.getElementById("back-to-top").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }


// --- Example Buttons
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
var startStyle = (function saveSettings () {
	var startSettings = document.getElementById('backgroundresult');
	return window.getComputedStyle(startSettings).backgroundColor;
	// return window.getComputedStyle(startSettings);
})();

// console.log(startStyle);
// console.log(typeof startStyle);
// console.log(startStyle['backgroundColor']);

// use
function defaultSettings(inputColor) {
	var elem = document.getElementById('backgroundresult');
	elem.style.backgroundColor = inputColor;
}

// function defaultSettings() {
// 	var elem = document.getElementById('backgroundresult');
// 	elem.style.backgroundColor = startStyle;
// }

// var jsResult = document.getElementsByClassName('jsresult');
// console.log(jsResult);
// console.log(jsResult[0]);
// // console.log(jsResult[1]) 



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

// change property:value depends on selected value
function changeColor(value) {
	var elem = document.getElementById('result');
	var selectedProperty = ourType;
	elem.style[selectedProperty] = value;
}

// save default css style
var start = (function saveSettings () {
	return window.getComputedStyle(document.getElementById('result'));
})();

// set default css style
function toStart(startValue) {
	var elem = document.getElementById('result');
	elem.style = startValue; 
}
