let pais = 0;
let producto = "0";
let precio = 0;
let cantidad = 0;
let precioArticulo = 0;

do {
	pais = Number(
		prompt(
			"Bienvenido a compumundo\n    Por favor indique de que pais nos visita\n    1 - Argentina\n    2 - Colombia\n    3 - Mexico"
		)
	);
	if (pais === 1 || pais === 2 || pais === 3) {
		break;
	}
} while (true);

console.log(pais);
console.log(precio);

do {
	switch (pais) {
		//Argentina
		case 1: {
			producto = prompt(
				'Seleccione el producto deseado\n    1- MacBook Air 13" (M1, 2020) 8-Core CPU 256 GB - Space Gray $ 502.299\n    2- MacBook Air 13" Chip M1-8-Core CPU 512 GB - Space Gray $ 628.999'
			);
			switch (producto) {
				case "1":
					precio = 502299;
					break;

				case "2":
					precio = 628999;
					break;
			}
			break;
		}
		//Colombia
		case 2:
			producto = prompt(
				'Seleccione el producto deseado\n    1- MacBook Air 13" (M1, 2020) 8-Core CPU 256 GB - Space Gray $5.239.000\n    2- MacBook Air 13" Chip M1-8-Core CPU 512 GB - Space Gray $ 5.999.000'
			);
			switch (producto) {
				case "1":
					precio = 5239000;
					break;
				case "2":
					precio = 5999000;
					break;
			}
			break;
		//Mexico
		case 3:
			producto = prompt(
				'Seleccione el producto deseado\n    1- MacBook Air 13" (M1, 2020) 8-Core CPU 256 GB - Space Gray $ 25,999\n    2- MacBook Air 13" Chip M1-8-Core CPU 512 GB - Space Gray $ 32,499'
			);
			switch (producto) {
				case "1":
					precio = 25999;
					break;
				case "2":
					precio = 32499;
					break;
			}
			break;
	}
	if (producto === "1" || producto === "2") {
		break;
	}
} while (true);

console.log(producto);
console.log(precio);

do {
	cantidad = prompt("Indique la cantidad deseada (envio sin costo a partir de 2 unidades): ");
	if (cantidad > 0) {
		break;
	}
} while (true);

console.log(cantidad);

let total = calcSubtotal(precio, cantidad) + calcIva(pais) + calcEnvio(pais, cantidad);

alert(
	"Su pedido es: \nSubtotal: " +
		calcSubtotal(precio, cantidad) +
		"\n IVA: " +
		calcIva(pais) +
		"\n Envio: " +
		calcEnvio(pais, cantidad) +
		"\n Total: " +
		total
);

function calcSubtotal(precio, cantidad) {
	return precio * cantidad;
}

function calcIva(pais) {
	if (pais == 1) {
		//Argentina
		return calcSubtotal(precio, cantidad) * 0.21;
		//Colombia
	} else if (pais == 2) {
		return calcSubtotal(precio, cantidad) * 0.19;
		//Mexico
	} else if (pais == 3) {
		return calcSubtotal(precio, cantidad) * 0.16;
	}
}

function calcEnvio(pais, cantidad) {
	//Argentina
	if (pais == 1 && cantidad == 1) {
		return 5000;
		//Colombia
	} else if (pais == 2 && cantidad == 1) {
		return 52000;
		//Mexico
	} else if (pais == 3 && cantidad == 1) {
		return 200;
		//Envio sin costo
	} else return 0;
}
