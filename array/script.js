const data = [
    {
        nome: 'Roger Medeiros',
        sexo: 'M',
        salario: 3250,
    },
    {
        nome: 'Carolina Silva',
        sexo: 'F',
        salario: 1200,
    },
    {
        nome: 'Cristina Silvana Avila',
        sexo: 'F',
        salario: 8100,
    },
    {
        nome: 'Gustavo Hoffman',
        sexo: 'M',
        salario: 5200.35,
    },
    {
        nome: 'Eva Trindade',
        sexo: 'F',
        salario: 2501,
    },
    {
        nome: 'Andre Mathias',
        sexo: 'M',
        salario: 1750,
    },
    {
        nome: 'Joice Castro da Silva',
        sexo: 'F',
        salario: 3350.25,
    },
];

console.log(`EX 01:`);
/* 
1. Imprima no console a quantidade de pessoas Total.
*/

const totalPeople = data.length;
console.log(totalPeople);

console.log(`\n\nEX 02:`);
/* 
2. Imprima no console a quantidade de pessoas pessoas do sexo
Feminino.
*/

const totalFemaleGender = data.filter(value => value.sexo === "F");
console.log(totalFemaleGender.length)

console.log(`\n\nEX 03:`);
/* 
3. Imprima no console a soma do salário de todas as pessoas.
*/

const salaryValue = data.reduce((total, value) => total + value.salario, 0);
console.log(salaryValue);

console.log(`\n\nEX 04:`);
/* 
4. Imprima no console a soma do salario de todos as pessoas do sexo
Masculino
*/

const totalSalaryMaleGender = data.filter(value => value.sexo === "M").reduce((total, value) => total + value.salario, 0);
console.log(totalSalaryMaleGender);

console.log(`\n\nEX 05:`);
/* 
5. Utilize a função Some, para descobrir se existe algum salário
superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
contrário falso.
*/

const higherSalary = data.some(value => value.salario > 7000);
console.log(higherSalary);

const topSalaryPerson = data.filter(value => value.salario > 7000);
console.log(topSalaryPerson);

console.log(`\n\nEX 06:`);
/* 
6. Utilize a função findIndex, para descobrir a posição da pessoa de
nome 'Eva Trindade'.
*/

const evaPosition = data.findIndex(value => value.nome === "Eva Trindade");
console.log(`Eva Trindade está na posição: ${evaPosition}`);

console.log(`\n\nEX 07:`);
/* 
7. Utilize a função filter, para filtrar todas pessoas que o nome possua o
sobrenome "Silva".
*/

const ownsSilva = data.filter(value => value.nome.toLocaleLowerCase().match(/silva\b/));
console.log(ownsSilva);

console.log(`\n\nEX 08:`);
/* 
8. Imprima os nomes utilizando o MAP
*/

const allNames = data.map(value => value.nome);
console.log(allNames);