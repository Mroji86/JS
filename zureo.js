// -------- Ejercicio 1 ----------- \\

console.log('Ejercicio 1')
var numbers = [-4, 5]
console.log('Ingrese los números a multiplicar: ')
console.log(numbers[0] + ' X ' + numbers[1]);

const multiplicar = (n, k) => {
    //debugger
    let result = 0
    if (n > 0 && k > 0) {
        while (k > 0) {
            result += n
            k--
        }
        return result
    } else if (n < 0 && k > 0) {
        while (k > 0) {
            result += (n)
            k--
        }
        return result
    } else if (k < 0 && n > 0) {
        while (n > 0) {
            result += k
            n--
        }
        return result
    } else if ((n = 0) || (k = 0)) {
        result = 0
        return result
    }

}
console.log(multiplicar(-4, 5));

// -------- Ejercicio 2 ----------- \\
console.log('Ejercicio 2')
let arrayA = [2, 6, 1, 9, 6, 1];
console.log('El númeo mayor del array [' + arrayA + '] es: ');
let result = 0
for (i = 0; i < arrayA.length; i++) {
    if (arrayA[i] > result) {
        result = arrayA[i]
    }
}
console.log(result)
    // -------- Ejercicio 3 ----------- \\
console.log('Ejercicio 3')
let array1 = [1, 'test', false, 0, true, { dato: 7 }]

let array2 = array1.filter(element => {
    return element != false && element != 0
});

console.log(array2)



// -------- Ejercicio 4 ----------- \\
console.log('Ejercicio 4')
let arreglo1 = [
    [1, 2],
    [3, 4],
    [
        [4, 5]
    ]
]
let arreglo2 = []
arreglo1.forEach(element => {
    for (i = 0; i < element.length; i++) {
        arreglo2.push(element[i])
    }
});
console.log(arreglo2)

// -------- Ejercicio 5 ----------- \\
console.log('Ejercicio 5')
let stringZ = "Prueba de práctica de Zureo para ver conocimiento de práctica"
let arrayZ = stringZ.split(' ').sort();
console.log(arrayZ);
let arrayFinal = []
let resultado = []
let resultadoFinal = []
let contador = 0

const lista = []

for (i = 0; i < arrayZ.length; i++) {
    if (arrayZ[i] == arrayZ[(i + 1)]) {
        arrayFinal.push(arrayZ[i])
        contador += 1
    }
    resultado.push(arrayFinal[0])
        //resultado.push(contador)

}
resultadoFinal.push(arrayFinal[0])
resultadoFinal.push(contador)



console.log(resultadoFinal);
// -------- Ejercicio 6 ----------- \\
console.log('Ejercicio 6');
let str1 = "sometamos o matemos";
console.log(str1.split(''))
str1Reverse = str1.split('').reverse().join('');
console.log(str1Reverse);
if (str1 = str1Reverse) {
    console.log('Es palíndromo');
} else {
    console.log('No es palíndromo');
}