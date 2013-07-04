/* Operacion de resto */
Number.prototype.mod = function(n) {
	return ((this%n)+n)%n;
}

var grupoIni = 0;
var leftArrow = document.querySelectorAll('#left-arrow > span')[0];
var rightArrow = document.querySelectorAll('#right-arrow > span')[0];

var grupos = document.getElementsByClassName('grupo');


function desplazaIzquierda (ev) {
	ev.preventDefault();
	var iz = grupoIni;
	var der = (grupoIni - 1).mod(3);


	for(var i = 0; i < grupos[iz].classList.length; i++)
		if(grupos[iz].classList[i] != 'grupo')
			grupos[iz].classList.remove(grupos[iz].classList[i]);
	
	for(var i = 0; i < grupos[der].classList.length; i++)
		if(grupos[der].classList[i] != 'grupo')
			grupos[der].classList.remove(grupos[der].classList[i]);


	grupos[iz].offsetWidth = grupos[iz].offsetWidth;

	grupos[iz].classList.add('animaLeftLeft');
	grupos[der].classList.add('animaLeftRight');

	grupoIni = (--grupoIni).mod(3);

	setTimeout(function() {
		grupos[iz].style.left = '100%';
		grupos[der].style.left = '0%';
	}, 501);
}


function desplazaDerecha (ev) {
	ev.preventDefault();
	var iz = grupoIni;
	var der = (grupoIni + 1) % 3;


	for(var i = 0; i < grupos[iz].classList.length; i++)
		if(grupos[iz].classList[i] != 'grupo')
			grupos[iz].classList.remove(grupos[iz].classList[i]);
	
	for(var i = 0; i < grupos[der].classList.length; i++)
		if(grupos[der].classList[i] != 'grupo')
			grupos[der].classList.remove(grupos[der].classList[i]);


	grupos[iz].offsetWidth = grupos[iz].offsetWidth;

	grupos[iz].classList.add('animaRightLeft');
	grupos[der].classList.add('animaRightRight');

	grupoIni = (++grupoIni) % 3;

	setTimeout(function() {
		grupos[iz].style.left = '-100%';
		grupos[der].style.left = '0%';
	}, 501);
}

rightArrow.addEventListener('click', desplazaDerecha, false);
leftArrow.addEventListener('click', desplazaIzquierda, false);
