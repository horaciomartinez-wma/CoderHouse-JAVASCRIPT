// let tarjeta = document.createElement("div");
// tarjeta.className = "card-group";

// arraySocios.forEach((socio) => {
// 	tarjeta.innerHTML += `<div class="card">
//     <img class="card-img-top" src="../imagenes/1.jpeg" height="300px" width="200px" alt="Card image cap" />

// 				<div class="card-body">
// 					<h5 class="card-title" id="card1">${socio.nombre} ${socio.apellidos}</h5>
// 					<p class="card-text">
// 						This is a wider card with supporting text below as a natural lead-in to additional content. This content is
// 						a little bit longer.
// 					</p>
// 					<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
// 				</div>
//                 </div>`;
// });

//document.body.appendChild(tarjeta);

const pintarSocios = () => {
	const contenedor = document.getElementById("socios-contenedor");

	arraySocios.forEach((socio) => {
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

/******************Escuchar botones Borrar ***********************/

//Traer todos los botones
const botones = document.getElementsByTagName("button");

//Iterar para escuchar a todos los botones
for (i = 0; i < botones.length; i++) {
	const boton = document.getElementById(botones[i].id);

	boton.addEventListener("click", (e) => {
		//Recorrer el array para borrar el objecto especifico
		for (i = 0; i < arraySocios.length; i++) {
			if (arraySocios[i].nombre + arraySocios[i].apellidos == boton.id) {
				console.log(arraySocios[i].nombre);
				arraySocios.splice(i, 1);
				localStorage.setItem("stringSocios", JSON.stringify(arraySocios));
				location.reload();
				break;
			}
		}
	});
}
