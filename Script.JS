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
// IMPORTANTE:
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

        pontoPivotanteSelect.style.display = "block";

    } else {

        campoPivotante.style.display = "none";

        pontoPivotanteSelect.style.display = "none";

    }

});


// =========================================================
// BANCO DE MOTORES DESLIZANTES
// =========================================================

const motoresDeslizantes = [

    // =====================================================
    // DZ RIO 400 MONO
    // =====================================================

    {
        nome: "DZ Rio 400 Mono",

        larguraMax: 3,

        altoFluxo: "nao",

        // Chapa 24 até Chapa 20
        chapaMin: 24,
        chapaMax: 20,

        cremalheira: {
            tipo: "Residencial",
            tamanhoBarra: 1.5
        },

        link: ""
    },


    // =====================================================
    // DZ STARK 600 MONO
    // =====================================================

    {
        nome: "DZ Stark 600 Mono",

        larguraMax: 3,

        altoFluxo: "nao",

        // Chapa 24 até Chapa 20
        chapaMin: 24,
        chapaMax: 20,

        cremalheira: {
            tipo: "Residencial",
            tamanhoBarra: 1.5
        },

        link: ""
    },


    // =====================================================
    // DZ RIO 500 JET
    // =====================================================

    {
        nome: "DZ Rio 500 Jet",

        larguraMax: 3,

        altoFluxo: "nao",

        // Chapa 24 até Chapa 20
        chapaMin: 24,
        chapaMax: 20,

        cremalheira: {
            tipo: "Residencial",
            tamanhoBarra: 1.5
        },

        link: ""
    },


    // =====================================================
    // DZ RIO 500 MONO
    // =====================================================

    {
        nome: "DZ Rio 500 Mono",

        larguraMax: 5,

        altoFluxo: "nao",

        // Chapa 24 até Chapa 18
        chapaMin: 24,
        chapaMax: 18,

        cremalheira: {
            tipo: "Residencial",
            tamanhoBarra: 1.5
        },

        link: ""
    },


    // =====================================================
    // DZ RIO 600 JET
    // =====================================================

    {
        nome: "DZ Rio 600 Jet",

        larguraMax: 5,

        altoFluxo: "nao",

        // Chapa 24 até Chapa 18
        chapaMin: 24,
        chapaMax: 18,

        cremalheira: {
            tipo: "Residencial",
            tamanhoBarra: 1.5
        },

        link: ""
    },


    // =====================================================
    // DZ RIO 700 MONO
    // =====================================================

    {
        nome: "DZ Rio 700 Mono",

        larguraMax: 5,

        altoFluxo: "nao",

        // Chapa 24 até Chapa 16
        chapaMin: 24,
        chapaMax: 16,

        cremalheira: {
            tipo: "Residencial",
            tamanhoBarra: 1.5
        },

        link: "https://www.ppa.com.br/brasil/products/automatizadores-deslizantes/dz-rio/dz-rio-mono"
    },


    // =====================================================
    // DZ RIO 800 JET
    // =====================================================

    {
        nome: "DZ Rio 800 Jet",

        larguraMax: 5,

        altoFluxo: "nao",

        // Chapa 24 até Chapa 16
        chapaMin: 24,
        chapaMax: 16,

        cremalheira: {
            tipo: "Residencial",
            tamanhoBarra: 1.5
        },

        link: "https://www.ppa.com.br/brasil/products/automatizadores-deslizantes/dz-rio/dz-rio-jetflex"
    },


    // =====================================================
    // DZ CONDOMINIUM JETFLEX
    // =====================================================

    {
        nome: "DZ Condominium Jetflex",

        larguraMax: 5,

        altoFluxo: "sim",

        // Chapa 24 até Chapa 16
        chapaMin: 24,
        chapaMax: 16,

        cremalheira: {
            tipo: "Industrial",
            tamanhoBarra: 1.5
        },

        link: "https://www.ppa.com.br/brasil/products/automatizadores-deslizantes/dz-condominium/dz-condominium-jetflex-1"
    },


    // =====================================================
    // DZ 1500 JET
    // =====================================================

    {
        nome: "DZ 1500 Jet",

        larguraMax: 7,

        altoFluxo: "sim",

        // Chapa 24 até Chapa 16
        chapaMin: 24,
        chapaMax: 16,

        cremalheira: {
            tipo: "Industrial",
            tamanhoBarra: 1.5
        },

        link: ""
    },


    // =====================================================
    // DZ BRUTALLE 3T
    // =====================================================

    {
        nome: "DZ Brutalle 3T",

        larguraMax: 8,

        altoFluxo: "sim",

        // Chapa 24 até Chapa 14
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
    //
    // Exemplos:
    //
    // 3,60 → 3,6
    // 3,61 → 3,7
    // 3,65 → 3,7
    // 3,69 → 3,7
    // 3,71 → 3,8
    //
    // =====================================================

    const largura =
        Math.ceil(larguraOriginal * 10) / 10;


    // =====================================================
    // VERIFICAR TIPO DE PORTÃO
    // =====================================================

    if (tipo !== "deslizante") {

        resultado.innerHTML = `
            <h3>Em desenvolvimento</h3>

            <p>
                Por enquanto, o sistema está trabalhando
                somente com portões deslizantes.
            </p>
        `;

        return;
    }


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
    // DEFINIR QUAL TIPO DE MOTOR PROCURAR
    // =====================================================
    //
    // CASO 1:
    //
    // Usuário marcou ALTO FLUXO = SIM
    //
    // → Procuramos motores industriais.
    //
    //
    // CASO 2:
    //
    // Usuário marcou ALTO FLUXO = NÃO
    // E largura <= 5m
    //
    // → Procuramos motores residenciais.
    //
    //
    // CASO 3:
    //
    // Usuário marcou ALTO FLUXO = NÃO
    // Porém largura > 5m
    //
    // → Procuramos motores industriais.
    //
    // Isso acontece porque motores residenciais
    // não atendem larguras superiores a 5m.
    //
    // =====================================================

    let tipoFluxoProcurado;


    if (altoFluxoInformado === "sim") {

        tipoFluxoProcurado = "sim";

    } else if (largura > 5) {

        tipoFluxoProcurado = "sim";

    } else {

        tipoFluxoProcurado = "nao";

    }


    // =====================================================
    // FILTRAR MOTORES
    // =====================================================

    const motoresCompativeis =
        motoresDeslizantes.filter(function (motor) {


            // =================================================
            // LARGURA
            // =================================================

            const larguraCompativel =
                largura <= motor.larguraMax;


            // =================================================
            // ALTO FLUXO
            // =================================================

            const fluxoCompativel =
                motor.altoFluxo === tipoFluxoProcurado;


            // =================================================
            // CHAPA
            // =================================================

            const indiceChapaMin =
                ordemChapas.indexOf(motor.chapaMin);


            const indiceChapaMax =
                ordemChapas.indexOf(motor.chapaMax);


            const chapaCompativel =
                indiceChapaUsuario >= indiceChapaMin &&
                indiceChapaUsuario <= indiceChapaMax;


            // =================================================
            // MOTOR COMPATÍVEL
            // =================================================

            return (
                larguraCompativel &&
                fluxoCompativel &&
                chapaCompativel
            );

        });


    // =====================================================
    // NENHUM MOTOR
    // =====================================================

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
                    Largura considerada:
                </strong>

                ${largura.toFixed(1)} m
            </p>

        `;

        return;
    }


    // =====================================================
    // CALCULAR CREMALHEIRA
    // =====================================================

    const tamanhoBarraCremalheira = 1.5;


    const quantidadeCremalheiras =
        Math.ceil(
            largura /
            tamanhoBarraCremalheira
        );


    // =====================================================
    // COMEÇAR RESULTADO
    // =====================================================

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

    `;


    // =====================================================
    // AVISO PARA PORTÕES MAIORES QUE 5M
    // =====================================================

    if (
        altoFluxoInformado === "nao" &&
        largura > 5
    ) {

        resultadoHTML += `

            <p>

                <strong>
                    Atenção:
                </strong>

                Apesar de o portão não ser de alto fluxo,
                sua largura ultrapassa 5 metros.

                Por isso, foram considerados
                automatizadores industriais de maior
                robustez.

            </p>

        `;

    }


    // =====================================================
    // LISTAR MOTORES
    // =====================================================

    motoresCompativeis.forEach(function (motor) {


        // =================================================
        // CALCULAR CREMALHEIRA DESTE MOTOR
        // =================================================

        const quantidadeCremalheirasMotor =
            Math.ceil(
                largura /
                motor.cremalheira.tamanhoBarra
            );


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
        // LINK DO MOTOR
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


    // =====================================================
    // EXIBIR RESULTADO
    // =====================================================

    resultado.innerHTML = resultadoHTML;

});