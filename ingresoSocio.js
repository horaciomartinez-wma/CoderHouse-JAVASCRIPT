const formulario = document.getElementById("form");
formulario.addEventListener("submit", (e) => {
	e.preventDefault();
	const form = new FormData(formulario);
	const numeroSocio = form.get("numeroSocio");
	console.log(numeroSocio);
	console.log(arraySocios.length);

	buscarSocio(numeroSocio);
});

function buscarSocio(numeroSocio) {
	let nombre = "";
	let imagenPerfilURL = "";
	for (i = 0; i < arraySocios.length; i++) {
		if (arraySocios[i].socioNumber == numeroSocio) {
			//console.log(arraySocios[i].socioNumber);
			//console.log(arraySocios[i].nombre);
			nombre = arraySocios[i].nombre;
			imagenPerfilURL = arraySocios[i].imagenPerfilURL;
			break;
		}
	}
	if (nombre != "") {
		Swal.fire({
			title: `Bienvenido ${nombre}!`,
			text: "Modal with a custom image.",
			imageUrl: `${imagenPerfilURL}`,
			imageWidth: 399,
			imageHeight: 599,
			imageAlt: "Custom image",
		});
	} else {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Usuario no encontrado!",
			//footer: '<a href="">Why do I have this issue?</a>',
		});
	}
}
