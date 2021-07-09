// javascript cartel luminoso
window.setInterval (BlinkIt, 500);
var color = "red";
function BlinkIt () {
var blink = document.getElementById ("blink");
color = (color == "#ffffff")? "navy" : "#ffffff";
blink.style.color = color;
blink.style.fontSize='1em';}


//javascript 'nuestros expositores' con texto que se escribe y borra

const typed = new Typed('.typed', {
	strings: [		
        '<i class="expositor">Sra Pel</i>',
        '<i class="expositor">2C2Design</i>',
		'<i class="expositor">Pluie</i>',
		'<i class="expositor">Heather Garret</i>',
		'<i class="expositor">Infinita Ternura</i>',
		'<i class="expositor">Nidito Hamacas</i>',
		'<i class="expositor">Diablas y Santas</i>',
		'<i class="expositor">Allez Allez</i>',
        '<i class="expositor">Las cruces de Ati</i>',
        '<i class="expositor">Sra Pel</i>',
		],
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
    