console.log("Hola");

let miPrimerArray = ["Andres","Ariel","Jesus","Ana"];
console.log(miPrimerArray);

miPrimerArray.push("Hector");
console.log(miPrimerArray);

miPrimerArray.unshift("Jaime");
console.log(miPrimerArray);

let numero = [1,2,3,4,5,6,7];
console.log(numero);

let impares = numero.filter(num => num % 2 !== 0);
console.log(impares);

let fruta1 = ["fresa", "sandia", "naranja"];
let fruta2 = ["naranja", "platano", "mango"];
let combinado = fruta1.concat(fruta2);
console.log(combinado);

let sinDuplicados = [...new Set(combinado)];
console.log(sinDuplicados);


let numerosMayor = [3,5,6,8,1,9,2,4,7];
console.log(numerosMayor);

numerosMayor.sort();
console.log(numerosMayor);


numerosMayor.reverse();
console.log(numerosMayor);

let numerosDobles = numerosMayor.map(num => num * 2);
console.log(numerosDobles);


let edades = [1,6,9,12,16,18,45,15,20,26];
console.log(edades);

let edadesMayor = edades.filter(edad => edad > 17);
console.log(edadesMayor);

let puntaje = [10,50,60,30];
console.log(puntaje);


let suma = puntaje.reduce((total, num) => total + num, 0);
console.log(suma);

let colores = ["Azul","Amarillo","Cafe","Rojo"];
console.log(colores);

colores.pop();
colores.shift();
console.log(colores);

let verificarSi = puntaje.includes(10);
console.log(verificarSi);
