const prompt = require('prompt-sync')({ sigint: true });

let x = prompt("Masukkan angka: "); 

if (x % 2 == 1) {
	console.log ("Tidak bisa input bilangan ganjil")
} else if (x < 0) {
	console.log("Tidak bisa input bilangan negatif")
} else {
	let y = Math.sqrt(x);
	console.log("akar pangkat 2 dari " + x + " adalah: " + y)
}
