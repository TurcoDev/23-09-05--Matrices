// matriz a representar
// 1  2  3
// 4  5  6
// 7  8  9

let arreglo = [1, 3, 4, 5, 6, 7, 8, 9];

let matrizGlobal = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

console.log(matrizGlobal[0][1]);

// recorremos viendolo como una matriz
function matrix(matriz) {
  for (let i = 0; i < matriz.length; i++) {
      console.log(matriz[i]);
      for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
      }
  }
}

// matrix(matrizGlobal);

// Lo mismo pero viendolo como arreglo de arreglos
function arrayDeArrays(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    let arrayElement = matriz[i];
    for (let j = 0; j < arrayElement.length; j++) {
      console.log(arrayElement[j]);
    }
  }
}

// console.log(matriz);

// arrayDeArrays(matrizGlobal);

// retorno de funciones
function retornar(condicion) {
  let respuesta = "Fue falso";
  if (condicion == true) {
    return "Fue verdadero";
  } else{
    return respuesta;
  }
}

let mensaje = retornar(false);
// console.log(mensaje);

function getArray(dame) {
  let respuesta = [];
  if (dame == true) {
    respuesta = [1, 2, 3];
  } else{
    respuesta = [4, 5, 6];
  }
  return respuesta
}

// console.log(getArray(true));

function userIdGenerator(largo) {
  // Math.floor((Math.random() * 99) + 1)
  // Math.random genera valores entre 0 y 1 (0 - 0.1 - ... 1)
  // * 99 => 0 - 9.9 .... 99
  // + 1 => 1 - 10.9 .... 100
  // Math.floor => 1 - 10 .... 100
  const caracteres = "ABCDEFGabcdefg0123456789";
  console.log("Cantidad  de caracteres", caracteres.length);
  let id = '';
  
  for (let cant = 1; cant <= largo; cant++) {
    let dataRandom = Math.floor((Math.random() * 23))
    // let dataRandom = Math.floor((Math.random() * caracteres.length - 1))
    console.log("valor aleatorio", dataRandom);
    console.log("Dato en la posicion", caracteres[dataRandom]);
    id += caracteres[dataRandom];
  }

  return id;
}

// Ver como realizarlo con el codigo ASCCI

console.log(userIdGenerator(100));