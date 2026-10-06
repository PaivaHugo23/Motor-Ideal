const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");
const tipoSelect = document.getElementById("tipo");
const campoGiro = document.getElementById("campo-giro");
const campoPivotante = document.getElementById("campo-pivotante");
const pontoPivotanteSelect = document.getElementById("pontoPivotante");
const aberturaSelect = document.getElementById("abertura");

// CHAPAS
const ordemChapas = [24, 22, 20, 18, 16, 14];

//CAMPO PARA MOTORES EXPECIFICOS
tipoSelect.addEventListener("change", function () {

    if (this.value === "basculante") {
        campoGiro.style.display = "block";
    } else {
        campoGiro.style.display = "none";
    }

    if (this.value === "pivotante") {
        campoPivotante.style.display = "block";
    } else {
        campoPivotante.style.display = "none";
        pontoPivotanteSelect.value = "";
    }
});

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const tipo = tipoSelect.value;
    const dados = {
        largura: parseFloat(document.getElementById("largura").value),
        altoFluxo: document.getElementById("altofluxo").value,
        chapa: parseInt(document.getElementById("chapa").value),
        pontoGiro: parseFloat(document.getElementById("pontoGiro").value),
        abertura: aberturaSelect.value,
        folhas: pontoPivotanteSelect.value
    };
    let resultados;
    if (tipo === "deslizante") {
        resultados = calcularDeslizante(dados);
    }
    else if (tipo === "basculante") {
        resultados = calcularBasculante(dados);
    }
    else if (tipo === "pivotante") {
        resultados = calcularPivotante(dados);
    }
    resultado.innerHTML = resultados;
});