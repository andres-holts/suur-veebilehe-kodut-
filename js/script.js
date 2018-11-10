window.onscroll = function() {hoiaUleval()};

var header = document.getElementById("header");
var uleval = header.offsetTop;

function hoiaUleval() {
	if (window.pageYOffset > uleval) {
		header.classList.add("uleval");
	} 
	else {
		header.classList.remove("uleval");
	}
}