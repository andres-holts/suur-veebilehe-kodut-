//==================| JavaScript |==================//

window.onload = function() { // käivitatakse siis, kui lehe sisu on laetud
	update();
	laius();
	laeLehed();
}

function update() {
	window.onscroll = function() {hoiaUleval()};
	window.onresize = function() {laius()};
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

function laius() {
	var sisuLaius = window.innerWidth;
	var drop = document.getElementById('dropdown');
	var tavaline = document.getElementById('suurEkraan');
	
	if(sisuLaius < 900) {
		drop.style.display='inline-block';
		tavaline.style.display='none';
	}
	else {
		tavaline.style.display='inline-block';
		drop.style.display='none';	
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
		
		var navigatsioon = document.getElementsByClassName('aktiivne');
		for(i = 0; i < navigatsioon.length; i++) {
			navigatsioon[i].classList.remove("aktiivne");
		}
		
		
		////////////////// see ei ole kõige parem lahendus, aga see töötab
		for(i = 0; i < navigatsioon.length; i++) {
			navigatsioon[i].classList.remove("aktiivne");
		}
		/////////////////////////////////////////////////////
		
		
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