/* 
1. Utilizando FOR, percorra os números de 1 a 10 e imprima no console
os números pares.
*/
console.log(`EX 01:`);

for (let number = 1; number <= 10; number++) {
    if (number % 2 === 0) {
        console.log(`O número: ${number} é par.`);
    };
};

/* 
2. Utilizando FOR, imprima no console a tabuada do 5 (cinco).
*/
console.log(`\n\nEX 02:`);

let multiplicationTable = 5;

for (let multiplier = 0; multiplier <= 10; multiplier++) {
    const result = multiplier * multiplicationTable;
    console.log(`${multiplier} x ${multiplicationTable} = ${result}`);
};

/* 
3. Inicialize uma variável com o valor de 5.000 (cinco mil), utilizando
While adicione a este valor 30% de acréscimo até que este valor
seja maior ou igual a 10.000 (dez mil). Imprima no console os
salários parciais.
*/
console.log(`\n\nEX 03:`);

let value = 5000;

while (value < 10000) {
    value += value * (30 / 100);
    console.log(value)
};

/* 
4. Imprima na tela 30 ( trinta ) números ímpares.
*/
console.log(`\n\nEX 04:`);

let count = 0;
for (let numbers = 0; numbers < 60; numbers++) {
    if (numbers % 2 === 1) {
        count++
        console.log(`${count} -   O número ${numbers} é ímpar!`);
    };
};

/* 
5. Utilizando do...while, imprima na tela a soma de todos os números
entre 10 e 100.
*/
console.log(`\n\nEX 05:`);


let sum = 0;
let num = 11;

do {
    sum += num;
    num++;
} while (num < 100);

console.log(`A de todos os números é: ${sum}`);