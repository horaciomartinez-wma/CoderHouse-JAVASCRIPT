const arraySocios = [];

class Socio {
	constructor(nombre, apellidos, fechaNacimiento) {
		this.socioNumber = arraySocios.length + 1;
		this.nombre = nombre.toUpperCase();
		this.apellidos = apellidos.toUpperCase();
		this.fechaNacimiento = fechaNacimiento;
		this.fechaDeingreso = Date.now();
		arraySocios.push(this);
	}
}

/*
new Socio("Sylvester", "Stallone", "06/07/1946");
new Socio("Arnold", "Schwarzenegger", "30/07/1947");
new Socio("Ronnie", "Coleman", "13/05/1964");
new Socio("Dwayne La Roca", "Johnson", "02/05/1972");
new Socio("John", "Cena", "23/04/1977");
*/
console.log(arraySocios);

let nombreFormulario = document.getElementById("firstName");
console.log(nombreFormulario);

const mostrarListaDeSociosOrdenada = () => {
	let array = [];
	arraySocios.forEach((socio) => array.push(socio.socioNumber + " " + socio.nombre + " " + socio.apellidos));
	alert("Lista de socios:\n" + array.join("\n"));
};

const OrdernarListaDeSociosPorMasReciente = () => {
	console.log("OrdernarListaDeSociosPorMasReciente");
	arraySocios.sort((a, b) => b.socioNumber - a.socioNumber);
	mostrarListaDeSociosOrdenada();
};

const OrdernarListaDeSociosPorApellido = () => {
	arraySocios.sort((a, b) => a.apellidos.localeCompare(b.apellidos));
	mostrarListaDeSociosOrdenada();
};

const OrdernarListaDeSociosPorNombre = () => {
	arraySocios.sort((a, b) => a.nombre.localeCompare(b.nombre));
	mostrarListaDeSociosOrdenada();
};

main();

function main() {
	//console.log(opcion);
	do {
		opcion = prompt(
			'Bienvenido a tu Gym por favor selecciona la opcion deseada (Ingrese "ESC" para salir): \n1- Ingresar asistencia (No disponible para la 2da Entrega)\n2-Ingresar nuevo socio\n3-Pagar subscripción (No disponible para la 2da Entrega)\n4-Lista de Socios'
		);
		switch (opcion.toUpperCase()) {
			//No disponible para la 2da Entrega
			case "1":
				ingresoSocio();
				break;
			case "2":
				registrarNuevoSocio();
				break;
			//No disponible para la 2da Entrega
			case "3":
				pagarSubscripcion();
				break;
			case "4":
				mostrarListadeSocios();
				break;
			case "ESC":
				if (!confirm("Seguro que desea salir?")) {
					opcion = "";
				}
				break;
		}
	} while (opcion.toUpperCase() != "ESC");
}

function mostrarListadeSocios() {
	switch (
		prompt("Como desea la lista:\n1- Ordenar por el mas reciente\n2- Ordernar por nombre\n3-Ordenar por apellido")
	) {
		case "1":
			console.log(opcion);
			OrdernarListaDeSociosPorMasReciente();
			break;
		case "2":
			console.log(opcion);
			OrdernarListaDeSociosPorNombre();
			break;
		case "3":
			console.log(opcion);
			OrdernarListaDeSociosPorApellido();
			break;
	}
}

function registrarNuevoSocio() {
	let nombre = "";
	let apellidos = "";
	let fechaDeNacimento = "";
	nombre = prompt("Ingresa el nombre del nuevo socio:");
	apellidos = prompt("Ingresa los apellidos del nuevo socio:");
	fechaDeNacimento = prompt("Ingresa la fecha de nacimiento (DD/MM/AAAA):");
	if (
		confirm(`Por favor confirma los siguentes datos:
    Nombre: ${nombre}
    Apellidos: ${apellidos}
    Fecha de Nacimiento: ${fechaDeNacimento} `)
		//Confirmar datos Verdadero
	) {
		new Socio(nombre, apellidos, fechaDeNacimento);
		//console.log(this.socioNumber);
		alert(`Bienvenido a nuestro Gimnasio tu numero de socio es: ${arraySocios.length}`);
		console.log(arraySocios);
	} //Confirmar datos Falso
	else {
		main();
	}
}
