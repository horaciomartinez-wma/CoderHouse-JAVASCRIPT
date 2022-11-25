const stringSocios = "";
const getTaskStorage = () => {
	const taskStorage = JSON.parse(localStorage.getItem("stringSocios"));
	return taskStorage;
};

document.addEventListener("DOMContentLoaded", () => {
	console.log(arraySocios);

	//arraySocios = getTaskStorage();
	localStorage.setItem("stringSocios", JSON.stringify(getTaskStorage()));
	console.log(getTaskStorage());
});

class Socio {
	constructor(nombre, apellidos, fechaNacimiento, telefono, imagenPerfilURL) {
		this.socioNumber = arraySocios.length + 1;

		this.nombre = nombre.toUpperCase();
		this.apellidos = apellidos.toUpperCase();
		this.fechaNacimiento = fechaNacimiento;
		this.telefono = telefono;
		this.imagenPerfilURL = imagenPerfilURL;
		this.fechaDeingreso = Date.now();
		arraySocios.push(this);
	}
}

const formulario = document.getElementById("registrationForm");

formulario.addEventListener("submit", (e) => {
	e.preventDefault();
	const form = new FormData(formulario);
	const nombre = form.get("firstName");
	const apellidos = form.get("lastName");
	const emailAddress = form.get("emailAddress");
	const femenino = form.get("femaleGender");
	const fechaNacimiento = form.get("birthdayDate");
	const telefono = form.get("phoneNumber");
	const imagenPerfilURL = form.get("profilepicURL");

	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
			confirmButton: "btn btn-success",
			cancelButton: "btn btn-danger",
		},
		buttonsStyling: false,
	});

	/*****************************Sweet alert bloque inicio **********************/

	swalWithBootstrapButtons
		.fire({
			title: "Confirma tus datos",
			text: `Por favor confirma los siguentes datos:
            Nombre: ${nombre}
	        Apellidos: ${apellidos}
	        Fecha de Nacimiento: ${fechaNacimiento}`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonText: "Confirmar",
			cancelButtonText: "Cancelar",
			reverseButtons: false,
		})
		.then((result) => {
			if (result.isConfirmed) {
				new Socio(nombre, apellidos, fechaNacimiento, telefono, imagenPerfilURL);
				swalWithBootstrapButtons.fire(`Bienvenido ${nombre}, tu numero de Socio es: ${arraySocios.length}`);
				localStorage.setItem("stringSocios", JSON.stringify(arraySocios));
				formulario.reset();
				//console.log(stringSocios);
				//console.log(getTaskStorage());
			} else if (
				/* Read more about handling dismissals below */
				result.dismiss === Swal.DismissReason.cancel
			) {
				swalWithBootstrapButtons.fire("Registro cancelado");
			}
		});

	/*****************************Sweet alert bloque fin **********************/
});
