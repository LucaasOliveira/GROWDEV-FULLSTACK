/* Desenvolva aqui a rotina */

read();

const valueBase = document.querySelector("#valor_base");
const valueTransport = document.querySelector("#valor_transporte");
const valueAlimentation = document.querySelector("#valor_alimentacao");
const valueRevenue = document.querySelector("#valor_receita");

const autoDiscount = document.querySelector("#valor_automovel");
const faults = document.querySelector("#faltas");
const totalDiscounts = document.querySelector("#valor_descontos");

const total = document.querySelector("#valor_total");

const inputs = document.querySelectorAll("input")

// botao

const btnCalc = document.querySelector("#btn_calcular");
btnCalc.addEventListener("click", totalize);


function totalize() {
    valueRevenue.value = Number(valueBase.value) + Number(valueTransport.value) + Number(valueAlimentation.value);

    totalDiscounts.value = Number(autoDiscount.value) + Number(faults.value);

    total.value = Number(valueRevenue.value) - Number(totalDiscounts.value);

    save()
};

function save() {

    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        localStorage.setItem(input.id, input.value);
    };
};

function read() {

    let inputs = document.getElementsByTagName("input");

    for (let input of inputs) {

        let valueInputs = localStorage.getItem(input.id);
        input.value = valueInputs;

    }

};

let inputList = document.getElementsByTagName("input");
for (let input of inputList) {
    input.addEventListener('change', totalize);
};
