// =========================================================
// FUNÇÃO PARA CALCULAR MOTORES PIVOTANTES
// =========================================================

function calcularPivotante(dados) {

    // =====================================================
    // 1. RECEBER OS DADOS
    // =====================================================

    const larguraOriginal = dados.largura;

    const largura = Math.ceil(larguraOriginal * 10) / 10;

    const altoFluxo = dados.altoFluxo;

    const chapa = dados.chapa;

    const folhas = dados.folhas;


    // =====================================================
    // 2. DEFINIR QUANTIDADE DE FOLHAS
    // =====================================================

    let quantidadeFolhas;

    if (folhas === "simples") {

        quantidadeFolhas = 1;

    }

    else if (folhas === "dupla") {

        quantidadeFolhas = 2;

    }

    else {

        return `
            <h3>Folha inválida</h3>

            <p>
                Informe se o portão possui
                folha simples ou folha dupla.
            </p>
        `;

    }


    // =====================================================
    // 3. CALCULAR LARGURA DE CADA FOLHA
    // =====================================================

    const larguraFolha = Math.ceil(
        (largura / quantidadeFolhas) * 10
    ) / 10;


    // =====================================================
    // 4. VERIFICAR LIMITE MÁXIMO
    // =====================================================

    if (larguraFolha > 4.5) {

        return `
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

    }


    // =====================================================
    // 5. DEFINIR CATEGORIA
    // =====================================================

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


    // =====================================================
    // 6. DEFINIR FLUXOS ACEITOS
    // =====================================================

    let fluxosProcurados = [];

    if (altoFluxo === "sim") {

        fluxosProcurados = ["sim"];

    }

    else if (altoFluxo === "medio") {

        fluxosProcurados = ["medio"];

    }

    else if (altoFluxo === "nao") {

        fluxosProcurados = ["nao"];

    }


    // =====================================================
    // 7. FILTRAR MOTORES
    // =====================================================

    const motoresCompativeis = motoresPivotantes.filter(function(motor) {


        // =================================================
        // FLUXO
        // =================================================

        const fluxoCompativel = motor.altoFluxo.some(
            function(fluxo) {

                return fluxosProcurados.includes(fluxo);

            }
        );


        // =================================================
        // CHAPA
        // =================================================

        const chapaCompativel =
            chapa >= motor.chapaMax &&
            chapa <= motor.chapaMin;


        return (
            fluxoCompativel &&
            chapaCompativel
        );

    });


    // =====================================================
    // 8. NENHUM MOTOR COMPATÍVEL
    // =====================================================

    if (motoresCompativeis.length === 0) {

        return `
            <h3>Nenhum motor encontrado</h3>

            <p>
                Não encontramos um automatizador
                pivotante compatível com as
                características informadas.
            </p>

            <p>
                <strong>Largura informada:</strong>
                ${larguraOriginal.toFixed(2)} m
            </p>

            <p>
                <strong>Largura considerada:</strong>
                ${largura.toFixed(1)} m
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

    }


    // =====================================================
    // 9. COMEÇAR RESULTADO
    // =====================================================

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


    // =====================================================
    // 10. LISTAR MOTORES
    // =====================================================

    motoresCompativeis.forEach(function(motor) {


        // =================================================
        // CATEGORIA DE FLUXO
        // =================================================

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


        // =================================================
        // ADICIONAR MOTOR
        // =================================================

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


    // =====================================================
    // 11. RETORNAR RESULTADO
    // =====================================================

    return resultadoHTML;

}



// =========================================================
// BANCO DE MOTORES PIVOTANTES
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