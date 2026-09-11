// =========================================================
// ELEMENTOS DO HTML
// =========================================================

const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

const tipoSelect = document.getElementById("tipo");

const campoGiro = document.getElementById("campo-giro");
const campoPivotante = document.getElementById("campo-pivotante");
const pontoPivotanteSelect = document.getElementById("pontoPivotante");



// =========================================================
// ORDEM DAS CHAPAS
// =========================================================
//
// Quanto menor o número da chapa,
// mais grossa é a chapa.
//
// 24 → mais fina
// 22
// 20
// 18
// 16
// 14 → mais grossa
//
// =========================================================

const ordemChapas = [24, 22, 20, 18, 16, 14];



// =========================================================
// MOSTRAR / OCULTAR CAMPOS
// =========================================================

tipoSelect.addEventListener("change", function () {

    // =====================================================
    // PORTÃO BASCULANTE
    // =====================================================

    if (this.value === "basculante") {

        campoGiro.style.display = "block";

    } else {

        campoGiro.style.display = "none";

    }


    // =====================================================
    // PORTÃO PIVOTANTE
    // =====================================================

    if (this.value === "pivotante") {

        campoPivotante.style.display = "block";

    } else {

        campoPivotante.style.display = "none";

        // Limpa a escolha quando deixa de ser pivotante
        pontoPivotanteSelect.value = "";

    }

});



// =========================================================
// BANCO DE MOTORES DESLIZANTES
// =========================================================

const motoresDeslizantes = [

    {
        nome: "DZ Rio 400 Mono",
        larguraMax: 3,
        altoFluxo: ["nao"],
        chapaMin: 24,
        chapaMax: 20,

        cremalheira: {
            tipo: "Residencial",
            tamanhoBarra: 1.5
        },

        link: ""
    },


    {
        nome: "DZ Stark 600 Mono",
        larguraMax: 3,
        altoFluxo: ["nao"],
        chapaMin: 24,
        chapaMax: 20,

        cremalheira: {
            tipo: "Residencial",
            tamanhoBarra: 1.5
        },

        link: ""
    },


    {
        nome: "DZ Rio 500 Jet",
        larguraMax: 3,
        altoFluxo: ["nao"],
        chapaMin: 24,
        chapaMax: 20,

        cremalheira: {
            tipo: "Residencial",
            tamanhoBarra: 1.5
        },

        link: ""
    },


    {
        nome: "DZ Rio 500 Mono",
        larguraMax: 5,
        altoFluxo: ["nao"],
        chapaMin: 24,
        chapaMax: 18,

        cremalheira: {
            tipo: "Residencial",
            tamanhoBarra: 1.5
        },

        link: ""
    },


    {
        nome: "DZ Rio 600 Jet",
        larguraMax: 5,
        altoFluxo: ["nao"],
        chapaMin: 24,
        chapaMax: 18,

        cremalheira: {
            tipo: "Residencial",
            tamanhoBarra: 1.5
        },

        link: ""
    },


    {
        nome: "DZ Rio 700 Mono",
        larguraMax: 5,
        altoFluxo: ["nao", "medio"],
        chapaMin: 24,
        chapaMax: 16,

        cremalheira: {
            tipo: "Residencial",
            tamanhoBarra: 1.5
        },

        link: "https://www.ppa.com.br/brasil/products/automatizadores-deslizantes/dz-rio/dz-rio-mono"
    },


    {
        nome: "DZ Rio 800 Jet",
        larguraMax: 5,
        altoFluxo: ["nao", "medio"],
        chapaMin: 24,
        chapaMax: 16,

        cremalheira: {
            tipo: "Residencial",
            tamanhoBarra: 1.5
        },

        link: "https://www.ppa.com.br/brasil/products/automatizadores-deslizantes/dz-rio/dz-rio-jetflex"
    },


    {
        nome: "Eurus Steel Mono",
        larguraMax: 6,
        altoFluxo: ["nao", "medio"],
        chapaMin: 24,
        chapaMax: 16,

        cremalheira: {
            tipo: "Residencial",
            tamanhoBarra: 1.5
        },

        link: "https://www.ppa.com.br/brasil/products/automatizadores-deslizantes/dz-eurus/dz-eurus-steel-mono-1"
    },


    {
        nome: "Eurus Steel Jet",
        larguraMax: 6,
        altoFluxo: ["nao", "medio"],
        chapaMin: 24,
        chapaMax: 16,

        cremalheira: {
            tipo: "Residencial",
            tamanhoBarra: 1.5
        },

        link: "https://www.ppa.com.br/brasil/products/automatizadores-deslizantes/dz-eurus/dz-eurus-steel-jetflex"
    },


    {
        nome: "DZ Condominium Jetflex",
        larguraMax: 5,
        altoFluxo: ["sim"],
        chapaMin: 24,
        chapaMax: 16,

        cremalheira: {
            tipo: "Industrial",
            tamanhoBarra: 1.5
        },

        link: "https://www.ppa.com.br/brasil/products/automatizadores-deslizantes/dz-condominium/dz-condominium-jetflex-1"
    },


    {
        nome: "DZ 1500 Jet",
        larguraMax: 7,
        altoFluxo: ["sim"],
        chapaMin: 24,
        chapaMax: 16,

        cremalheira: {
            tipo: "Industrial",
            tamanhoBarra: 1.5
        },

        link: ""
    },


    {
        nome: "DZ Brutalle 3T",
        larguraMax: 8,
        altoFluxo: ["sim"],
        chapaMin: 24,
        chapaMax: 14,

        cremalheira: {
            tipo: "Industrial",
            tamanhoBarra: 1.5
        },

        link: "https://www.ppa.com.br/brasil/products/automatizadores-deslizantes/dz-brutalle/dz-brutalle-jetflex"
    }

];



// =========================================================
// BANCO DE MOTORES PIVOTANTES
// =========================================================
//
// STANDARD → até 2,0 m por folha
// SUPER    → até 3,5 m por folha
// MEGA     → até 4,5 m por folha
//
// Folha simples → 1 motor
// Folha dupla   → 2 motores
//
// =========================================================

const motoresPivotantes = [

    {
        nome: "Pivo Piston Predial Mono",

        altoFluxo: ["nao"],

        chapaMin: 24,
        chapaMax: 16,

        tecnologia: "Mono",

        link: "https://www.ppa.com.br/brasil/products/automatizadores-pivotantes/pivo-piston/pivo-piston-predial-mono"
    },


    {
        nome: "Pivo Piston Predial Jet",

        altoFluxo: ["nao"],

        chapaMin: 24,
        chapaMax: 16,

        tecnologia: "Jet",

        link: "https://www.ppa.com.br/brasil/products/automatizadores-pivotantes/pivo-piston/pivo-piston-predial-jetflex"
    },


    {
        nome: "Pivo Piston Condominium Mono",

        altoFluxo: ["medio"],

        chapaMin: 24,
        chapaMax: 16,

        tecnologia: "Mono",

        link: "https://www.ppa.com.br/brasil/products/automatizadores-pivotantes/pivo-piston/pivo-piston-condominium-mono"
    },


    {
        nome: "Pivo Piston Condominium Jet",

        altoFluxo: ["medio"],

        chapaMin: 24,
        chapaMax: 16,

        tecnologia: "Jet",

        link: "https://www.ppa.com.br/brasil/products/automatizadores-pivotantes/pivo-piston/pivo-piston-condominium-jetflex"
    },


    {
        nome: "Pivo Piston Condominium Hard Working Jet",

        altoFluxo: ["sim"],

        chapaMin: 24,
        chapaMax: 14,

        tecnologia: "Jet",

        link: "https://www.ppa.com.br/brasil/products/automatizadores-pivotantes/pivo-piston/pivo-piston-condominium-hard-working-jetflex"
    }

];



// =========================================================
// FORMULÁRIO
// =========================================================

formulario.addEventListener("submit", function (e) {

    e.preventDefault();


    // =====================================================
    // PEGAR INFORMAÇÕES
    // =====================================================

    const tipo =
        document.getElementById("tipo").value;


    const larguraOriginal =
        parseFloat(
            document.getElementById("largura").value
        );


    const altoFluxoInformado =
        document.getElementById("altofluxo").value;


    const chapa =
        parseInt(
            document.getElementById("chapa").value
        );


    // =====================================================
    // VALIDAR LARGURA
    // =====================================================

    if (
        isNaN(larguraOriginal) ||
        larguraOriginal <= 0
    ) {

        resultado.innerHTML = `

            <h3>Largura inválida</h3>

            <p>
                Informe uma largura válida para o portão.
            </p>

        `;

        return;

    }


    // =====================================================
    // ARREDONDAR LARGURA PARA CIMA
    // =====================================================

    const largura =
        Math.ceil(larguraOriginal * 10) / 10;


    // =====================================================
    // VERIFICAR CHAPA
    // =====================================================

    const indiceChapaUsuario =
        ordemChapas.indexOf(chapa);


    if (indiceChapaUsuario === -1) {

        resultado.innerHTML = `

            <h3>Chapa inválida</h3>

            <p>
                A chapa informada não está cadastrada
                no sistema.
            </p>

        `;

        return;

    }



    // =====================================================
    // =====================================================
    // PORTÃO PIVOTANTE
    // =====================================================
    // =====================================================

    if (tipo === "pivotante") {


        // =================================================
        // PEGAR QUANTIDADE DE FOLHAS
        // =================================================

        const folhas =
            pontoPivotanteSelect.value;


        // =================================================
        // VALIDAR FOLHAS
        // =================================================

        if (
            folhas !== "simples" &&
            folhas !== "dupla"
        ) {

            resultado.innerHTML = `

                <h3>Folha inválida</h3>

                <p>
                    Informe se o portão possui
                    folha simples ou folha dupla.
                </p>

            `;

            return;

        }


        // =================================================
        // DEFINIR QUANTIDADE DE FOLHAS
        // =================================================

        const quantidadeFolhas =
            folhas === "simples" ? 1 : 2;


        // =================================================
        // CALCULAR LARGURA DE CADA FOLHA
        // =================================================

        const larguraFolha =
            Math.ceil(
                (largura / quantidadeFolhas) * 10
            ) / 10;


        // =================================================
        // VERIFICAR LIMITE MÁXIMO
        // =================================================

        if (larguraFolha > 4.5) {

            resultado.innerHTML = `

                <h3>Dimensão não atendida</h3>

                <p>
                    A largura de cada folha é de
                    <strong>${larguraFolha.toFixed(1)} m</strong>.
                </p>

                <p>
                    Para as pivotantes cadastradas,
                    o limite máximo é de
                    <strong>4,5 m por folha</strong>.
                </p>

                <p>
                    Portanto, não existe uma opção
                    cadastrada para essa medida.
                </p>

            `;

            return;

        }


        // =================================================
        // DEFINIR CATEGORIA
        // =================================================

        let categoriaPivotante;


        if (larguraFolha <= 2) {

            categoriaPivotante = "Standard";

        }

        else if (larguraFolha <= 3.5) {

            categoriaPivotante = "Super";

        }

        else {

            categoriaPivotante = "Mega";

        }


        // =================================================
        // DEFINIR FLUXO
        // =================================================

        let fluxosProcurados = [];


        if (altoFluxoInformado === "sim") {

            fluxosProcurados = ["sim"];

        }

        else if (altoFluxoInformado === "medio") {

            fluxosProcurados = ["medio"];

        }

        else if (altoFluxoInformado === "nao") {

            fluxosProcurados = ["nao"];

        }


        // =================================================
        // FILTRAR MOTORES PIVOTANTES
        // =================================================

        const motoresCompativeis =
            motoresPivotantes.filter(function (motor) {


                // =========================================
                // FLUXO
                // =========================================

                const fluxoCompativel =
                    motor.altoFluxo.some(function (fluxo) {

                        return fluxosProcurados.includes(fluxo);

                    });


                // =========================================
                // CHAPA
                // =========================================

                const indiceChapaMin =
                    ordemChapas.indexOf(
                        motor.chapaMin
                    );


                const indiceChapaMax =
                    ordemChapas.indexOf(
                        motor.chapaMax
                    );


                const chapaCompativel =
                    indiceChapaUsuario >= indiceChapaMin &&
                    indiceChapaUsuario <= indiceChapaMax;


                return (
                    fluxoCompativel &&
                    chapaCompativel
                );

            });


        // =================================================
        // NENHUM MOTOR
        // =================================================

        if (motoresCompativeis.length === 0) {

            resultado.innerHTML = `

                <h3>Nenhum motor encontrado</h3>

                <p>
                    Não encontramos um automatizador
                    pivotante compatível com as
                    características informadas.
                </p>

                <p>
                    <strong>Largura total:</strong>
                    ${larguraOriginal.toFixed(2)} m
                </p>

                <p>
                    <strong>Quantidade de folhas:</strong>
                    ${quantidadeFolhas}
                </p>

                <p>
                    <strong>Largura por folha:</strong>
                    ${larguraFolha.toFixed(1)} m
                </p>

                <p>
                    <strong>Categoria:</strong>
                    ${categoriaPivotante}
                </p>

            `;

            return;

        }


        // =================================================
        // COMEÇAR RESULTADO
        // =================================================

        let resultadoHTML = `

            <h3>
                Motor(es) pivotante(s) compatível(is):
            </h3>

            <p>
                <strong>Largura informada:</strong>
                ${larguraOriginal.toFixed(2)} m
            </p>

            <p>
                <strong>Largura considerada:</strong>
                ${largura.toFixed(1)} m
            </p>

            <p>
                <strong>Tipo de folha:</strong>
                ${
                    quantidadeFolhas === 1
                    ? "Folha simples"
                    : "Folha dupla"
                }
            </p>

            <p>
                <strong>Largura de cada folha:</strong>
                ${larguraFolha.toFixed(1)} m
            </p>

            <p>
                <strong>Categoria:</strong>
                ${categoriaPivotante}
            </p>

        `;


        // =================================================
        // LISTAR MOTORES
        // =================================================

        motoresCompativeis.forEach(function (motor) {


            let categoriaFluxo;


            if (motor.altoFluxo.includes("sim")) {

                categoriaFluxo = "Alto fluxo";

            }

            else if (motor.altoFluxo.includes("medio")) {

                categoriaFluxo = "Médio fluxo";

            }

            else {

                categoriaFluxo = "Residencial";

            }


            resultadoHTML += `

                <div class="motor-resultado">

                    <h4>
                        ${motor.nome}
                    </h4>

                    <p>
                        <strong>Folhas:</strong>
                        ${
                            quantidadeFolhas === 1
                            ? "1 folha"
                            : "2 folhas"
                        }
                    </p>

                    <p>
                        <strong>Automatizadores:</strong>
                        ${quantidadeFolhas} unidade(s)
                    </p>

                    <p>
                        <strong>Categoria:</strong>
                        ${categoriaPivotante}
                    </p>

                    <p>
                        <strong>Fluxo:</strong>
                        ${categoriaFluxo}
                    </p>

                    <p>
                        <strong>Chapa:</strong>
                        ${motor.chapaMin}
                        até
                        ${motor.chapaMax}
                    </p>

            `;


            // =================================================
            // LINK
            // =================================================

            if (motor.link !== "") {

                resultadoHTML += `

                    <p>

                        <a
                            href="${motor.link}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver automatizador no site da PPA
                        </a>

                    </p>

                `;

            }


            resultadoHTML += `

                </div>

                <hr>

            `;

        });


        // =================================================
        // EXIBIR RESULTADO
        // =================================================

        resultado.innerHTML = resultadoHTML;

        return;

    }



    // =====================================================
    // =====================================================
    // PORTÃO DESLIZANTE
    // =====================================================
    // =====================================================

    if (tipo === "deslizante") {


        // =================================================
        // DEFINIR FLUXOS ACEITOS
        // =================================================

        let fluxosProcurados = [];

        let mensagemEspecial = "";


        // =================================================
        // SIM
        // =================================================

        if (altoFluxoInformado === "sim") {

            fluxosProcurados = ["sim"];

        }


        // =================================================
        // MÉDIO
        // =================================================

        else if (altoFluxoInformado === "medio") {

            fluxosProcurados = ["medio"];

        }


        // =================================================
        // NÃO
        // =================================================

        else if (altoFluxoInformado === "nao") {


            // Até 5 metros

            if (largura <= 5) {

                fluxosProcurados = [
                    "nao",
                    "medio"
                ];

            }


            // Acima de 5 até 6 metros

            else if (largura <= 6) {

                fluxosProcurados = [
                    "medio"
                ];

                mensagemEspecial = `

                    <p>

                        <strong>Atenção:</strong>

                        Apesar de o portão não ser
                        de alto fluxo, sua largura
                        ultrapassa 5 metros.

                        Por isso, foram considerados
                        automatizadores de categoria média.

                    </p>

                `;

            }


            // Acima de 6 metros

            else {

                fluxosProcurados = [
                    "sim"
                ];

                mensagemEspecial = `

                    <p>

                        <strong>Atenção:</strong>

                        Apesar de o portão não ser
                        de alto fluxo, sua largura
                        ultrapassa 6 metros.

                        Por isso, foram considerados
                        automatizadores industriais
                        de maior robustez.

                    </p>

                `;

            }

        }



        // =================================================
        // FILTRAR MOTORES
        // =================================================

        const motoresCompativeis =
            motoresDeslizantes.filter(function (motor) {


                // =========================================
                // LARGURA
                // =========================================

                const larguraCompativel =
                    largura <= motor.larguraMax;


                // =========================================
                // FLUXO
                // =========================================

                const fluxoCompativel =
                    motor.altoFluxo.some(function (fluxo) {

                        return fluxosProcurados.includes(fluxo);

                    });


                // =========================================
                // CHAPA
                // =========================================

                const indiceChapaMin =
                    ordemChapas.indexOf(
                        motor.chapaMin
                    );


                const indiceChapaMax =
                    ordemChapas.indexOf(
                        motor.chapaMax
                    );


                const chapaCompativel =
                    indiceChapaUsuario >= indiceChapaMin &&
                    indiceChapaUsuario <= indiceChapaMax;


                return (
                    larguraCompativel &&
                    fluxoCompativel &&
                    chapaCompativel
                );

            });



        // =================================================
        // NENHUM MOTOR
        // =================================================

        if (motoresCompativeis.length === 0) {

            resultado.innerHTML = `

                <h3>
                    Nenhum motor encontrado
                </h3>

                <p>
                    Não encontramos um automatizador
                    compatível com as características
                    informadas.
                </p>

                <p>
                    <strong>
                        Largura informada:
                    </strong>

                    ${larguraOriginal.toFixed(2)} m

                </p>

                <p>
                    <strong>
                        Largura considerada:
                    </strong>

                    ${largura.toFixed(1)} m

                </p>

            `;

            return;

        }



        // =================================================
        // COMEÇAR RESULTADO
        // =================================================

        let resultadoHTML = `

            <h3>
                Motor(es) compatível(is):
            </h3>

            <p>
                <strong>
                    Largura informada:
                </strong>

                ${larguraOriginal.toFixed(2)} m

            </p>

            <p>
                <strong>
                    Largura considerada:
                </strong>

                ${largura.toFixed(1)} m

            </p>

            ${mensagemEspecial}

        `;



        // =================================================
        // LISTAR MOTORES
        // =================================================

        motoresCompativeis.forEach(function (motor) {


            // =================================================
            // CREMALHEIRA
            // =================================================

            const quantidadeCremalheirasMotor =
                Math.ceil(
                    largura /
                    motor.cremalheira.tamanhoBarra
                );


            // =================================================
            // CATEGORIA
            // =================================================

            let categoriaMotor;


            if (motor.altoFluxo.includes("sim")) {

                categoriaMotor = "Industrial";

            }

            else if (motor.altoFluxo.includes("medio")) {

                categoriaMotor = "Médio fluxo";

            }

            else {

                categoriaMotor = "Residencial";

            }


            // =================================================
            // MOSTRAR MOTOR
            // =================================================

            resultadoHTML += `

                <div class="motor-resultado">

                    <h4>
                        ${motor.nome}
                    </h4>

                    <p>
                        <strong>
                            Automatizador:
                        </strong>

                        1 unidade
                    </p>

                    <p>
                        <strong>
                            Categoria:
                        </strong>

                        ${categoriaMotor}
                    </p>

                    <p>
                        <strong>
                            Cremalheira:
                        </strong>

                        ${motor.cremalheira.tipo}
                    </p>

                    <p>
                        <strong>
                            Quantidade:
                        </strong>

                        ${quantidadeCremalheirasMotor}
                        barra(s) de
                        ${motor.cremalheira.tamanhoBarra} m

                    </p>

            `;


            // =================================================
            // LINK
            // =================================================

            if (motor.link !== "") {

                resultadoHTML += `

                    <p>

                        <a
                            href="${motor.link}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver automatizador no site da PPA
                        </a>

                    </p>

                `;

            }


            resultadoHTML += `

                </div>

                <hr>

            `;

        });



        // =================================================
        // EXIBIR RESULTADO
        // =================================================

        resultado.innerHTML = resultadoHTML;

        return;

    }



    // =====================================================
    // TIPO DE PORTÃO AINDA NÃO IMPLEMENTADO
    // =====================================================

    resultado.innerHTML = `

        <h3>Em desenvolvimento</h3>

        <p>
            Por enquanto, o sistema está trabalhando
            com portões deslizantes e pivotantes.
        </p>

    `;

});