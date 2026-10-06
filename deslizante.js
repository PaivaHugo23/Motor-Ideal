function calcularDeslizante(dados) {

    // 1. RECEBER OS DADOS
    const larguraOriginal = dados.largura;
    const largura = Math.ceil(larguraOriginal * 10) / 10;
    const altoFluxo = dados.altoFluxo;
    const chapa = dados.chapa;
    const mensagemEspecial = "";
    const motoresCompativeis = motoresDeslizantes.filter(motor => {
        return (
            largura <= motor.larguraMax &&
            motor.altoFluxo.includes(altoFluxo) &&
            chapa >= motor.chapaMax &&
            chapa <= motor.chapaMin
        );
    });

    if (motoresCompativeis.length === 0) {
        return "<p>Nenhum motor compatível encontrado.</p>";
    }

    let resultadoHTML = `
        <h3>Motor(es) compatível(is):</h3>
        <p>
            <strong>Largura informada:</strong>
            ${larguraOriginal.toFixed(2)} m
        </p>
        <p>
            <strong>Largura considerada:</strong>
            ${largura.toFixed(1)} m
        </p>
        ${mensagemEspecial}
    `;

    motoresCompativeis.forEach(motor => {

        const quantidadeCremalheirasMotor = Math.ceil(
            largura / motor.cremalheira.tamanhoBarra
        );

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

        // LINK
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

    return resultadoHTML;
}

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