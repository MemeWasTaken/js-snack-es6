// Exercise: Snack - array.filter()
// repository: js-snack-es6
// Scrivere una funzione (e lanciarla) che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

function printBetween (array, num1, num2) {
    console.log(array);
    let numbersBetween = array.filter((element) => {
        if (arrayNums.indexOf(element) >= num1 && arrayNums.indexOf(element) <= num2) {
            return true
        }
    });
    console.log(numbersBetween);
}

let arrayNums = [98, 78, 11, 86, 5, 67, 59, 62, 30, 79];
printBetween(arrayNums, parseInt(prompt('Inserisci un numero')), parseInt(prompt('Inserisci un numero')));