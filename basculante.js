// =========================================================
// BANCO DE MOTORES BASCULANTES
// =========================================================

const motoresBasculantes = [
    {
        nome: "BV Levante Mono",
        larguraMax: 2.5,
        larguraMaxDoisMotores: null,
        altoFluxo: ["nao"],
        chapaMin: 24,
        chapaMax: 22,
        accMin: 1.4,
        accMax: 1.5,
        link: "https://www.ppa.com.br/brasil/products/automatizadores-basculantes/bv-levante/bv-levante-mono"
    },
    {
        nome: "BV Levante Legero",
        larguraMax: 2.5,
        larguraMaxDoisMotores: null,
        altoFluxo: ["nao"],
        chapaMin: 24,
        chapaMax: 22,
        accMin: 1.4,
        accMax: 2.5,
        link: "https://www.ppa.com.br/brasil/products/automatizadores-basculantes/bv-levante/bv-levante-legero"
    },
    {
        nome: "BV Levante Jetflex",
        larguraMax: 2.5,
        larguraMaxDoisMotores: 3.0,
        altoFluxo: ["nao"],
        chapaMin: 24,
        chapaMax: 22,
        accMin: 1.4,
        accMax: 2.5,
        link: "https://www.ppa.com.br/brasil/products/automatizadores-basculantes/bv-levante/bv-levante-jetflex"
    },
    {
        nome: "BV Potenza Mono",
        larguraMax: 3.5,
        larguraMaxDoisMotores: 4.0,
        altoFluxo: ["nao"],
        chapaMin: 24,
        chapaMax: 18,
        accMin: 1.4,
        accMax: 3.0,
        link: ""
    },
    {
        nome: "BV Potenza Legero",
        larguraMax: 3.5,
        larguraMaxDoisMotores: 4.0,
        altoFluxo: ["nao"],
        chapaMin: 24,
        chapaMax: 18,
        accMin: 1.4,
        accMax: 3.0,
        link: "https://www.ppa.com.br/brasil/products/automatizadores-basculantes/bv-potenza/bv-potenza-legero"
    },
    {
        nome: "BV Potenza Jetflex",
        larguraMax: 3.5,
        larguraMaxDoisMotores: 4.0,
        altoFluxo: ["nao"],
        chapaMin: 24,
        chapaMax: 18,
        accMin: 1.4,
        accMax: 3.0,
        link: ""
    },
    {
        nome: "BV Penta Mono",
        larguraMax: 4.5,
        larguraMaxDoisMotores: 6.0,
        altoFluxo: ["nao"],
        chapaMin: 24,
        chapaMax: 16,
        accMin: 1.5,
        accMax: 3.0,
        link: "https://www.ppa.com.br/brasil/products/automatizadores-basculantes/bv-penta/bv-penta-condominium-mono"
    },
    {
        nome: "BV Penta Legero",
        larguraMax: 4.5,
        larguraMaxDoisMotores: null,
        altoFluxo: ["nao"],
        chapaMin: 24,
        chapaMax: 16,
        accMin: 1.5,
        accMax: 3.0,
        link: "https://www.ppa.com.br/brasil/products/automatizadores-basculantes/bv-penta/bv-penta-condominium-legero"
    },
    {
        nome: "BV Penta Jetflex",
        larguraMax: 4.5,
        larguraMaxDoisMotores: 6.0,
        altoFluxo: ["nao", "medio"],
        chapaMin: 24,
        chapaMax: 16,
        accMin: 1.5,
        accMax: 4.0,
        link: "https://www.ppa.com.br/brasil/products/automatizadores-basculantes/bv-penta/bv-penta-jetflex"
    },
    {
        nome: "BV Condominium Jetflex",
        larguraMax: 4.5,
        larguraMaxDoisMotores: 6.0,
        altoFluxo: ["sim"],
        chapaMin: 24,
        chapaMax: 14,
        chapa14ExigeDoisMotores: true,
        accMin: 1.5,
        accMax: 4.0,
        link: "https://www.ppa.com.br/brasil/products/automatizadores-basculantes/bv-condominium/bv-condominium-jetflex"
    }
];

// =========================================================
// CALCULAR BASCULANTE
// =========================================================

function calcularBasculante(dados) {

    // 1. RECEBER DADOS

    const larguraOriginal = dados.largura;
    const largura = Math.ceil(larguraOriginal * 10) / 10;

    const altoFluxo = dados.altoFluxo;
    const chapa = dados.chapa;
    const pontoGiro = dados.pontoGiro;
    const abertura = dados.abertura;

    // 2. VALIDAR PONTO DE GIRO

    if (isNaN(pontoGiro) || pontoGiro <= 0) {
        return `
            <h3>Ponto de giro inválido</h3>
            <p>
                Informe a distância do ponto de giro
                até o topo do portão.
            </p>
        `;
    }

    // 3. VALIDAR SENTIDO DE ABERTURA

    if (abertura !== "dentro" && abertura !== "fora") {
        return `
            <h3>Sentido de abertura inválido</h3>
            <p>
                Informe se o portão abre
                para dentro ou para fora.
            </p>
        `;
    }

    // 4. CALCULAR ACC NECESSÁRIO

    let accNecessario;

    if (abertura === "dentro") {
        // Abre para dentro: somar 0,25 m
        accNecessario = pontoGiro + 0.25;
    } else {
        // Abre para fora: subtrair 0,25 m
        accNecessario = pontoGiro - 0.25;
    }

    // Corrigir casas decimais do JavaScript
    accNecessario = Math.round(accNecessario * 100) / 100;

    // 5. FILTRAR MOTORES

    const motoresCompativeis = [];

    motoresBasculantes.forEach(motor => {

        // FLUXO

        const fluxoCompativel =
            motor.altoFluxo.includes(altoFluxo);

        // CHAPA

        const chapaCompativel =
            chapa >= motor.chapaMax &&
            chapa <= motor.chapaMin;

        // ACC

        const tamanhosACC = [
            1.40,
            1.50,
            2.00,
            2.50,
            3.00,
            3.50,
            4.00
        ];

        // Escolher o menor ACC disponível que atenda
        // à medida necessária e à faixa deste motor.
        //
        // Exemplo: necessário 1,55 m → recomendado 2,00 m.
        // Se a medida for exata, mantém o tamanho disponível.

        const accUtilizado = tamanhosACC.find(tamanho =>
            tamanho >= accNecessario &&
            tamanho >= motor.accMin &&
            tamanho <= motor.accMax
        );

        const accCompativel = accUtilizado !== undefined;

        // LARGURA E QUANTIDADE DE MOTORES

        let larguraCompativel = false;
        let quantidadeMotores = 0;

        // 1 MOTOR

        if (largura <= motor.larguraMax) {
            larguraCompativel = true;
            quantidadeMotores = 1;
        }

        // 2 MOTORES

        else if (
            motor.larguraMaxDoisMotores !== null &&
            largura <= motor.larguraMaxDoisMotores
        ) {
            larguraCompativel = true;
            quantidadeMotores = 2;
        }

        // REGRA ESPECIAL: CHAPA 14 NO BV CONDOMINIUM

        if (
            motor.chapa14ExigeDoisMotores === true &&
            chapa === 14
        ) {
            quantidadeMotores = 2;
        }

        // ADICIONAR MOTOR COMPATÍVEL

        if (
            fluxoCompativel &&
            chapaCompativel &&
            accCompativel &&
            larguraCompativel
        ) {
            motoresCompativeis.push({
                ...motor,
                quantidadeMotores: quantidadeMotores,
                accUtilizado: accUtilizado
            });
        }
    });

    // 6. NENHUM MOTOR ENCONTRADO

    if (motoresCompativeis.length === 0) {
        return `
            <h3>Nenhum motor basculante encontrado</h3>

            <p>
                Não encontramos um automatizador
                compatível com as características informadas.
            </p>

            <p>
                <strong>Largura:</strong>
                ${largura.toFixed(1)} m
            </p>

            <p>
                <strong>Ponto de giro:</strong>
                ${pontoGiro.toFixed(2)} m
            </p>

            <p>
                <strong>ACC necessário:</strong>
                ${accNecessario.toFixed(2)} m
            </p>
        `;
    }

    // 7. COMEÇAR RESULTADO

    let resultadoHTML = `
        <h3>Motor(es) basculante(s) compatível(is):</h3>

        <p>
            <strong>Largura informada:</strong>
            ${larguraOriginal.toFixed(2)} m
        </p>

        <p>
            <strong>Largura considerada:</strong>
            ${largura.toFixed(1)} m
        </p>

        <p>
            <strong>Ponto de giro:</strong>
            ${pontoGiro.toFixed(2)} m
        </p>

        <p>
            <strong>Abertura:</strong>
            ${abertura === "dentro" ? "Para dentro" : "Para fora"}
        </p>

        <p>
            <strong>ACC necessário:</strong>
            ${accNecessario.toFixed(2)} m
        </p>
    `;

    // 8. MOSTRAR MOTORES

    motoresCompativeis.forEach(motor => {

        let categoriaFluxo;

        if (motor.altoFluxo.includes("sim")) {
            categoriaFluxo = "Alto fluxo";
        } else if (motor.altoFluxo.includes("medio")) {
            categoriaFluxo = "Médio fluxo";
        } else {
            categoriaFluxo = "Residencial";
        }

        resultadoHTML += `
            <div class="motor-resultado">

                <h4>${motor.nome}</h4>

                <p>
                    <strong>Quantidade:</strong>
                    ${motor.quantidadeMotores} motor(es)
                </p>

                <p>
                    <strong>ACC recomendado:</strong>
                    ${motor.accUtilizado.toFixed(2)} m
                </p>

                <p>
                    <strong>Faixa disponível de ACC:</strong>
                    ${motor.accMin.toFixed(1)} m
                    até
                    ${motor.accMax.toFixed(1)} m
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

        // LINK DO MOTOR

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

    // 9. RETORNAR RESULTADO

    return resultadoHTML;
}