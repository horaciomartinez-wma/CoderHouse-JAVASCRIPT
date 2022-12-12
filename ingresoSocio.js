const formulario = document.getElementById("form");
formulario.addEventListener("submit", (e) => {
	e.preventDefault();
	const form = new FormData(formulario);
	const numeroSocio = form.get("numeroSocio");

	buscarSocio(numeroSocio);
});

async function obtenerSocios() {
	let obj;
	const res = await fetch("https://comfy-sunshine-732099.netlify.app/.netlify/functions/hello");
	return JSON.parse(localStorage.getItem("stringSocios")) || (await res.json());
}

async function buscarSocio(numeroSocio) {
	arraySocios = await obtenerSocios();

	if (await arraySocios.find((o) => o.socioNumber == numeroSocio)) {
		let objetoEncontrado = await arraySocios.find((o) => o.socioNumber == numeroSocio);
		Swal.fire({
			title: `Bienvenido ${objetoEncontrado.nombre}!`,
			text: "Modal with a custom image.",
			imageUrl: `${objetoEncontrado.imagenPerfilURL}`,
			imageWidth: 399,
			imageHeight: 599,
			imageAlt: "Custom image",
		});
		//nullish coalescing
	} else {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Usuario no encontrado!",
			//footer: '<a href="">Why do I have this issue?</a>',
		});
	}
}
