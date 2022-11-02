// ATIVIDADE SOBRE FUNÇÕES

/* 
1. Crie uma função chamada acessoAoSite() que não tenha
parâmetro. Esta função será chamada ao abrir a página e mostrará
um alerta informando “Bem vindo ao site”.
*/

function acessoAoSite() {
    alert(`Bem vindo ao site`);
};
acessoAoSite();

console.log("FUNÇÕES\n\n");
console.log("EX 02");
/*  
2. Crie uma função chamada mostrarMensagem() que não tenha
parâmetro. Esta função será chamada ao abrir a página e mostrará
uma mensagem no console.log() informando “Acesso à aplicação
NomeAplicação” e um alerta informando “Bem vindo à aplicação
NomeApliação”. Sendo que o nome da aplicação deve ser salvo em
uma variável para mostrar nas mensagens.
*/

function mostrarMensagem() {
    console.log(`Acesso à aplicação NomeAplicação`);
    alert(`Bem vindo à aplicação NomeAplicação`);

};
mostrarMensagem();

/*  
3. Crie uma função chamada mostrarDobro(num), que recebe um
parâmetro sendo um número inteiro. Esta função será chamada ao
abrir a página e mostrará um alerta com o resultado. Exemplo: “O
dobro do número 5 é 10.”
*/

const number = Number(prompt(`Informe um número inteiro: `));

function mostrarDobro(num) {
    const result = num * 2;
    alert(`O dobro do número ${num} é: ${result}.`)
};

mostrarDobro(number);

/*
4. Crie uma função chamada calcularMedia(nota1, nota2, nota3,
nome), que recebe 4 parâmetros sendo três inteiros e um texto
(String). Esta função será chamada ao abrir a página e mostrará um
alerta com a média. Exemplo: “João, sua média é 70.” A função
também deve mostrar no console.log() as notas recebidas. Exemplo
“Nota 1: 60,Nota 2: 70,Nota 3: 80”.
*/



// ATIVIDADE SOBRE OBJETOS
console.log("\n\n OBJETOS");
console.log("\n\nEX 01");
/* 
1. Crie um objeto em JavaScript para colocar dois atributos de um
produto. Atribua o preço e descrição do produto com o valor “90” e a
descrição com o valor “Mouse”. Mostre no console o valor dos dois
atributos.
*/

const product = {
    price: 90,
    description: "Mouse"
};

console.log(`Preço: ${product.price},00 - Descrição: ${product.description}`);

console.log("\n\nEX 02");
/* 
2. Crie um objeto em JavaScript para colocar 5 atributos de um
notebook. Atribua os seguintes atributos:
Processador = i7
Memória = 16GB
Preço = 5000
HD = 1TB
SSD = 256GB
Por fim, utilizando o laço for in, mostre o nome e valor de cada
atributo no console.
*/

const notebook = {
    processador: "i7",
    memoria: "16GB",
    preco: 5000,
    hd: "1TB",
    ssd: "256GB"
};

for (const key in notebook) {
    const value = notebook[key];
    console.log(`${key}: ${value}`);

};

console.log("\n\nEX 03");
/* 
3. Crie um objeto para colocar nome e duas notas. Atribua nome e
duas notas para o primeiro objeto, que será nosso primeiro aluno.
Agora crie mais um objeto para colocar informações do nosso
segundo aluno. Mostre as informações de cada aluno no console.
Mostre também a média do primeiro aluno e a média do segundo
aluno. Por fim mostre a média desta turma de 2 alunos.
*/

const student1 = {
    name: "Lucas",
    grades: [9, 10]
};

const student2 = {
    name: "Clara",
    grades: [10, 10]
};

function informations(student) {
    for (const key in student) {
        console.log(`${key}: ${student[key]}`);
    };
};

function average(student) {
    const grade1 = student.grades[0];
    const grade2 = student.grades[1];
    const name = student.name;
    const average = (grade1 + grade2) / 2;

    console.log(`${name} ficou com a média: ${average}`);
};

informations(student1);
console.log(`\n`);
informations(student2);
console.log(`\n\n`);
average(student1);
console.log(`\n`);
average(student2);

console.log("\n\nEX 04");
/* 
4. Crie cinco objetos JavaScript dentro de um Array contendo
nome(texto), idade(número), skills (array), ou seja um total de cinco
alunos. Agora crie uma função que receba estes cinco objetos e
mais um parâmetro skill. Dependendo da skill enviada mostrar no
console.log(), quais alunos têm a skill enviada por parâmetro,
mostrar todo o objeto.
Exemplo: Pedro, 24, [JavaScript, TypeScript, React]. Se mandar
chamar a função enviando (alunos, “JavaScript”), precisa mostrar o
Pedro e qual mais se encaixa nessa skill.
*/

