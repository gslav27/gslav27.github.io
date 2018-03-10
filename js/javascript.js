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
function set(input) {
	var elem = document.getElementById('inserttype');
	elem.innerHTML = input; // insert a text of selected css-property
	ourType = input;
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