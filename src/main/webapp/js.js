/**
 * 
 */
var letras = []
var palabraAdivinada = []
var palabra = []
var intentos = 0
var fallos = 0
var fechaPrimeraLetra
var fechaUltimaLetra



function introducirLaPalabra() {

	do {
		palabra = prompt("Introduce la palabra a adivinar");
	} while (!palabra.length >= 10)

	palabraAdivinada = palabra.split("");
	palabraAdivinada.fill("*");
	palabra = palabra.split("");

	letter = []
	mostrar()

}
function pedirLaLetra() {
	let letra;
	intentos++
	fechaPrimeraLetra= new Date().getTime()*60
	do
		letra = prompt("Introduce una letra")

	while (Number(letra) || letra.length > 1 || letra == "")



	letras.push(letra);
	comprobarLetras(letra);
}

function mostrar() {
	let texto = ""
	let textoNumeros = ""
	palabraAdivinada.forEach(function(i) {
		if (i != "*")
			texto = texto + i
		else
			texto = texto + "*"
	})
	textoNumeros = "<td>" + texto + "</td>";
	document.getElementById("palabra").innerHTML = (textoNumeros)
	let diferencia= new Date()
	diferencia=fechaPrimeraLetra-fechaUltimaLetra
	texto = "<td>" + texto + "</td>" + "<td>" + intentos + "</td>"+ "<td>" + Number(diferencia.valueOf()) + "</td>";



	document.getElementById("tabla").innerHTML = (texto)
	document.getElementById("intentos").innerHTML = (intentos)
	document.getElementById("letrasUsadas").innerHTML = (letras)
}


function comprobarLetras(letra) {

	for (i = 0; i < palabra.length; i++) {
		if (palabra[i] == letra) {
			alert("Has acertado");
			palabraAdivinada[i] = letra;
			mostrar()

			if (!palabraAdivinada.some((value) => value == "*")) {
				alert("Has acertado la palabra");
				fechaUltimaLetra=new Date().getTime()*60
				if (fallos < 1 ) {
					alert("Magnifico")
				}
				if (fallos < 3 && 1 < fallos) {
					alert("Bien")
				}
				if (fallos < 5 && 3 < fallos) {
					alert("Por poco")
				}
				if (fallos > 5) {
					alert("Has perdido")
				}
			}
		}
	}
	if (!palabra.some((value) => value == letra))
		alert("Has fallado")
	fallos++
}

