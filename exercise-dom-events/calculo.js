/* Desenvolva aqui a rotina */
read();

const valueBase = document.querySelector("#valor_base");
const valueTransport = document.querySelector("#valor_transporte");
const valueAlimentation = document.querySelector("#valor_alimentacao");
let valueRevenue = document.querySelector("#valor_receita");

const autoDiscount = document.querySelector("#valor_automovel");
const faults = document.querySelector("#faltas");
let totalDiscounts = document.querySelector("#valor_descontos");

let total = document.querySelector("#valor_total");

const btnCalc = document.querySelector("button");
const listInputs = document.querySelectorAll("input");

btnCalc.addEventListener("click", totalize);

listInputs.forEach((element) => {
    element.addEventListener("click", totalize);
});

function totalize() {

    const totalinputsRevenue = Number(valueBase.value) + Number(valueTransport.value) + Number(valueAlimentation.value);
    valueRevenue.value = totalinputsRevenue;

    const totalInputsDiscounts = Number(autoDiscount.value) - (faults.value);
    totalDiscounts.value = totalInputsDiscounts;

    total.value = totalinputsRevenue + totalInputsDiscounts;

    save();
};

function save() {

    let inputsCalc = document.querySelectorAll("input");

    for (const input of inputsCalc) {
        localStorage.setItem(input.id, input.value);
    };
};

function read() {

    let inputsCalc = document.querySelectorAll("input");

    for (const input of inputsCalc) {
        input.value = localStorage.getItem(input.id);
    };
};