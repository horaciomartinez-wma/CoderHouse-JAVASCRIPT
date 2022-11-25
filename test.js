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
//localStorage.setItem("Nombre", "Horacio");

new Socio("Dwayne La Roca", "Johnson", "02/05/1972");

localStorage.setItem("testObject", JSON.stringify(arraySocios));
console.log(JSON.parse(localStorage.getItem("testObject")));

document.addEventListener("DOMContentLoaded", () => {
	//console.log(getTaskStorage());
	console.log(arraySocios);
	console.log("hola");

	//arraySocios = getTaskStorage();
	//localStorage.setItem("stringSocios", JSON.stringify(arraySocios));
});
