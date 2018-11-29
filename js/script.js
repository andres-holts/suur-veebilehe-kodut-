//==================| JavaScript |==================//

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
	
	if(window.pageYOffset > uleval) {
		header.classList.add("uleval");
	} 
	else {
		header.classList.remove("uleval");
	}
}

function vahetaLehte(uusLeht) {
    var uusLeht = document.getElementById(uusLeht);
	
    if(!uusLeht) {
        alert("Sellist lehekülge ei ole!");
        return;
    }
	else {
		var lehed = document.getElementsByClassName('leht');
		for(i = 0; i < lehed.length; i++) {
			lehed[i].style.display = 'none';
		}
		
		var navigatsioon = document.getElementsByClassName("aktiivne");
		for(i = 0; i < navigatsioon.length; i++) {
			navigatsioon[i].classList.remove("aktiivne");
		}
		var uusNav = document.getElementsByClassName(uusLeht.id);
		for(i = 0; i < uusNav.length; i++) {
			uusNav[i].classList.add("aktiivne");
		}
		
		uusLeht.style.display = 'block';
	}
	
	$('html,body').animate({ scrollTop: 0 }, 'slow');
}

function laeLehed() {
	var lehed = document.getElementsByClassName('leht');
	
	for(i = 0; i < lehed.length; i++) {
		var uusLeht = lehed[i].id;
		$('#' + uusLeht + '').load('lehed/' + uusLeht + '.html');
	}
}

function suurendaPilti(pilt) {
	$(pilt).toggleClass("suurPilt");
	
	// scrollime pildi juurde
	var top = $(pilt).position().top - 65;
	$('html,body').animate({ scrollTop: top }, 'slow');
}

function spoiler(sisuID) {
	var sisu = document.getElementById(sisuID);
	if(sisu.style.display == 'none'){
		sisu.style.display='block';
	}
	else{
		sisu.style.display='none';
	}
}