window.onload = function() { // käivitatakse siis, kui lehe sisu on laetud
	header();
	laeLehed();
}

function header() {
	window.onscroll = function() {hoiaUleval()};
}

function hoiaUleval() {
	var header = document.getElementById("header"); // headeri id
	var uleval = header.offsetTop; // alumine äär
	
	if (window.pageYOffset > uleval) {
		header.classList.add("uleval");
	} 
	else {
		header.classList.remove("uleval");
	}
}

function vahetaLehte(uusLeht) {
    var uusLeht = document.getElementById(uusLeht);
	
    if (!uusLeht) {
        alert("Sellist lehekülge ei ole!");
        return;
    }
	else {
		var lehed = document.getElementsByClassName('leht');
		for(i = 0; i < lehed.length; i++) {
			lehed[i].style.display = 'none';
		}
		uusLeht.style.display = 'block';
	}
	
	window.scrollTo(0, 0);
}

function laeLehed() {
	var lehed = document.getElementsByClassName('leht');
	
	for(i = 0; i < lehed.length; i++) {
		var uusLeht = lehed[i].id;
		lehed[i].innerHTML = '<iframe src="lehed/' + uusLeht + '.html" scrolling="yes" frameborder="0"></iframe>'; // tuleb ilmselt ümber teha
	}
}