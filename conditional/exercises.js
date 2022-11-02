/* 
1. Crie uma constante para ler a idade de um motorista. Caso o
motorista tenha idade maior ou igual a 18 anos imprime no console
“Pode dirigir”, caso contrário imprima “Não pode dirigir”.
*/

const driveAge = Number(prompt(`Informe sua idade: `));

const ageValidation = driveAge > 18 && isNaN ? `Pode dirigir` : `Não pode dirigir`;
console.log(ageValidation);

console.log(`\n\n`);
/* 
2. Para o mesmo exercício acima insira mais uma variável a
condicional, além de saber se o motorista tem 18 anos ou mais,
temos que saber também se ele é habilitado para dirigir. Caso ele
tenha idade maior ou igual a 18 anos e possua habilitação, imprima
no console “Pode dirigir” caso contrário imprima “Não pode dirigir”.
*/

const driveAge2 = Number(prompt(`Informe sua idade: `));
const license = prompt(`Você já tem habilitação? \n Responda com "sim" ou nao"`);

if (driveAge2 > 18 && license.toLowerCase() === "sim") {
    console.log(`Pode dirigir`);
} else {
    console.log(`Não pode dirigir`);
};

console.log(`\n\n`);

/* 
3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
número de 1 a 7 e imprimir no console o dia da Semana. Para este
exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
por diante. Caso o número recebido não esteja neste intervalo
imprimir “Dia não reconhecido”.
*/

const number = Number(prompt(`Para descobrir o dia da semana informe um númedo de 1 a 7: `));

if (number === 1) {
    console.log(`domingo`);
} else if (number === 2) {
    console.log(`segunda-feira`);
} else if (number === 3) {
    console.log(`terça-feira`);
} else if (number === 4) {
    console.log(`quarta-feira`);
} else if (number === 5) {
    console.log(`quinta-feira`);
} else if (number === 6) {
    console.log(`sexta-feira`);
} else if (number === 7) {
    console.log(`sábado`);
} else {
    console.log(`dia não reconhecido`);
};

console.log(`\n\n`);

/* 
4. Reescreva o exercício 3, utilizando apenas o SWITCH.
*/

const num = Number(prompt(`Para descobrir o dia da semana informe um númedo de 1 a 7: `));

switch (num) {
    case 1:
        console.log(`domingo`);
        break;
    case 2:
        console.log(`segunda-feira`);
        break;
    case 3:
        console.log(`terça-feira`);
        break;
    case 4:
        console.log(`quarta-feira`);
        break;
    case 5:
        console.log(`quinta-feira`);
        break;
    case 6:
        console.log(`sexta-feira`);
        break;
    case 7:
        console.log(`sábado`);
        break;
    default:
        console.log(`dia não reconhecido`);
        break;
};

