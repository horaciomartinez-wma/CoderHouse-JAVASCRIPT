let arrayOrdenado = [];
class socioOrdenado {
	constructor(socioNumber, nombre, apellidos, imagenPerfilURL) {
		this.socioNumber = socioNumber;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.imagenPerfilURL = imagenPerfilURL;
		arrayOrdenado.push(this);
	}
}

let arrayFiltrado = [];
class socioFiltrado {
	constructor(socioNumber, nombre, apellidos, imagenPerfilURL) {
		this.socioNumber = socioNumber;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.imagenPerfilURL = imagenPerfilURL;
		arrayFiltrado.push(this);
	}
}

console.log(arraySocios);

const barraDeBusqueda = document.getElementById("search");

barraDeBusqueda.addEventListener("input", ejecutarBusqueda);

function ejecutarBusqueda(e) {
	arrayFiltrado = [];
	console.log(e.target.value);
	for (i = 0; i < arraySocios.length; i++) {
		let string = arraySocios[i].nombre.toUpperCase() + " " + arraySocios[i].apellidos.toUpperCase();
		let stringBuscado = e.target.value;

		if (string.indexOf(stringBuscado.toUpperCase()) > -1) {
			new socioFiltrado(
				arraySocios[i].socioNumber,
				arraySocios[i].nombre,
				arraySocios[i].apellidos,
				arraySocios[i].imagenPerfilURL
			);
		}
	}
	pintarSocios(arrayFiltrado);
	escucharBotones(arrayFiltrado);
}

const ordenarAntiguedadDesc = () => {
	//LIMPIAR EL ARRAY ORDENADO
	arrayOrdenado = [];

	//LLENAR EL ARRAY ORDENADO POR NOMBRE
	arraySocios.sort((a, b) => a.socioNumber - b.socioNumber);
	arraySocios.forEach(
		(socio) => new socioOrdenado(socio.socioNumber, socio.nombre, socio.apellidos, socio.imagenPerfilURL)
	);

	pintarSocios(arrayOrdenado);
	escucharBotones(arrayOrdenado);
};

const ordenarNombreAscendente = () => {
	//LIMPIAR EL ARRAY ORDENADO
	arrayOrdenado = [];

	//LLENAR EL ARRAY ORDENADO POR NOMBRE
	arraySocios.sort((a, b) => a.nombre.localeCompare(b.nombre));
	arraySocios.forEach(
		(socio) => new socioOrdenado(socio.socioNumber, socio.nombre, socio.apellidos, socio.imagenPerfilURL)
	);
	pintarSocios(arrayOrdenado);
	escucharBotones(arrayOrdenado);
};

const ordenarNombreDescendente = () => {
	//LIMPIAR EL ARRAY ORDENADO
	arrayOrdenado = [];

	//LLENAR EL ARRAY ORDENADO POR NOMBRE
	arraySocios.sort((a, b) => b.nombre.localeCompare(a.nombre));
	arraySocios.forEach(
		(socio) => new socioOrdenado(socio.socioNumber, socio.nombre, socio.apellidos, socio.imagenPerfilURL)
	);

	pintarSocios(arrayOrdenado);
	escucharBotones(arrayOrdenado);
};

const ordenarApellidoAscendente = () => {
	//LIMPIAR EL ARRAY ORDENADO
	arrayOrdenado = [];

	//LLENAR EL ARRAY ORDENADO POR NOMBRE
	arraySocios.sort((a, b) => a.apellidos.localeCompare(b.apellidos));
	arraySocios.forEach(
		(socio) => new socioOrdenado(socio.socioNumber, socio.nombre, socio.apellidos, socio.imagenPerfilURL)
	);

	pintarSocios(arrayOrdenado);
	escucharBotones(arrayOrdenado);
};

const ordenarApellidoDescendente = () => {
	//LIMPIAR EL ARRAY ORDENADO
	arrayOrdenado = [];

	//LLENAR EL ARRAY ORDENADO POR NOMBRE
	arraySocios.sort((a, b) => b.apellidos.localeCompare(a.apellidos));
	arraySocios.forEach(
		(socio) => new socioOrdenado(socio.socioNumber, socio.nombre, socio.apellidos, socio.imagenPerfilURL)
	);

	pintarSocios(arrayOrdenado);
	escucharBotones(arrayOrdenado);
};

const pintarSocios = (array) => {
	//LIMPIAR LOS DIV'S ANTERIORES
	const contenedor = document.getElementById("socios-contenedor");
	while (contenedor.firstChild) {
		contenedor.removeChild(contenedor.firstChild);
	}

	//falsy
	lista = array || arraySocios;

	lista.forEach((socio) => {
		const div = document.createElement("div");
		div.classList.add("card");
		div.innerHTML += `
            <div class="card-image">
                <img src="${socio.imagenPerfilURL}">
                <span class="card-title">${socio.nombre}  ${socio.apellidos}</span>
                
				<button class="btn waves-effect waves-light red" type="submit" id="${socio.nombre}${socio.apellidos}" name="action">Eliminar
    <i class="material-icons right">delete</i>
  </button>
            </div>
            `;
		contenedor.appendChild(div);
	});
};

pintarSocios();

escucharBotones();

/******************Escuchar botones Borrar ***********************/

function escucharBotones() {
	//IF TERNARIO
	arrayOrdenado.length === 0 ? (lista = arraySocios) : (lista = arrayOrdenado);
	//Traer todos los botones
	const botones = document.getElementsByTagName("button");

	//Iterar para escuchar a todos los botones
	for (i = 0; i < botones.length; i++) {
		const boton = document.getElementById(botones[i].id);

		boton.addEventListener("click", (e) => {
			//RECORRER EL ARRAY HASTA ENCONTRAR EL OBJECTO
			for (i = 0; i < lista.length; i++) {
				if (lista[i].nombre + lista[i].apellidos == boton.id) {
					//REMOVER EL OBJECTO DEL ARRAY
					lista.splice(i, 1);
					//ACTUALIZAR LOCALSTORAGE
					localStorage.setItem("stringSocios", JSON.stringify(lista));
					//REFRESCAR PAGINA
					location.reload();
					break;
				}
			}
		});
	}
}

/***************************Opciones Ordenar *********************************/

const tipoDeOrdenamiento = document.querySelector(".ordenar");

tipoDeOrdenamiento.addEventListener("change", (e) => {
	switch (e.target.value) {
		case "AntiguedadDesc":
			ordenarAntiguedadDesc();
			break;
		case "nombreAscendente":
			ordenarNombreAscendente();
			break;
		case "nombreDescendente":
			ordenarNombreDescendente();
			break;
		case "apellidoAscendente":
			ordenarApellidoAscendente();
			break;
		case "apellidoDescendente":
			ordenarApellidoDescendente();
			break;
	}
});
