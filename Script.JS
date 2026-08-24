document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const largura = parseFloat(document.getElementById("largura").value);
  const pesoSelecionado = document.getElementById("peso").value;
  const tipo = document.getElementById("tipo").value;
  const pontoGiro = parseFloat(document.getElementById("pontoGiro").value);
  const altofluxo = document.getElementById("altofluxo").value;

  let motoresPossiveis = [];

  if (tipo !== "basculante") {
    document.getElementById("resultado").innerText = "Por enquanto só tratamos portões basculantes.";
    return;
  }

  // Etapa 1: Filtrar pela largura
  if (largura <= 3) {
    motoresPossiveis = ["bv_home_mono", "bv_home_legero", "bv_home_jetflex", "bv_potenza_mono", "bv_potenza_legero", "bv_potenza_jetflex"];
  } else if (largura <= 4) {
    motoresPossiveis = ["bv_potenza_mono", "bv_potenza_legero", "bv_potenza_jetflex", "bv_penta_jet", "bv_penta_mono", "bv_penta_legero", "bv_condominio"];
  } else if (largura <= 7) {
    motoresPossiveis = ["2x_bv_penta_jetflex"];
  } else {
    motoresPossiveis = ["bv_celtron"];
  }

  // Etapa 2: Filtrar por peso (agora com select em texto)
  switch (pesoSelecionado) {
    case "300kg":
      motoresPossiveis = motoresPossiveis.filter(motor => motor.includes("bv_home"));
      break;
    case "350kg":
      motoresPossiveis = motoresPossiveis.filter(motor =>
        ["bv_home_jetflex", "bv_potenza_mono", "bv_potenza_legero"].includes(motor)
      );
      break;
    case "400kg":
      motoresPossiveis = motoresPossiveis.filter(motor =>
        ["bv_potenza_jetflex", "bv_penta_mono", "bv_penta_legero"].includes(motor)
      );
      break;
    case "450kg":
      motoresPossiveis = motoresPossiveis.filter(motor =>
        ["bv_penta_jetflex", "bv_condominio", "2x_bv_penta_jetflex"].includes(motor)
      );
      break;
    case "+450kg":
      motoresPossiveis = motoresPossiveis.filter(motor =>
        ["2x_bv_penta_jetflex", "bv_condominio"].includes(motor)
      );
      break;
    case "+800kg":
      motoresPossiveis = ["bv_celtron"];
      break;
    default:
      motoresPossiveis = [];
  }

  // Etapa 3: Filtrar por alto fluxo
  if (altofluxo === "sim") {
    motoresPossiveis = motoresPossiveis.filter(motor => motor === "bv_condominio");
  }

  // Etapa 4: Escolher ACC conforme ponto de giro
  let acc = "";
  if (pontoGiro <= 1.5) {
    if (motoresPossiveis.some(m => m.includes("penta"))) {
      acc = "ACC 1,5m";
    } else {
      acc = "ACC 1,4m";
    }
  } else if (pontoGiro <= 2) {
    acc = "ACC 2m";
  } else if (pontoGiro <= 2.5) {
    acc = "ACC 2,5m";
  } else if (pontoGiro <= 4) {
    acc = "ACC 4m";
  }

  // Links para os motores
  const links = {
    bv_home_mono: ["BV Home Mono", "https://ppa.com.br/brasil/products/automatizadores-basculantes/bv-home/bv-home-mono"],
    bv_home_legero: ["BV Home Legero", "https://ppa.com.br/brasil/products/automatizadores-basculantes/bv-home/bv-home-legero"],
    bv_home_jetflex: ["BV Home JetFlex", "https://ppa.com.br/brasil/products/automatizadores-basculantes/bv-home/bv-home-jetflex"],
    bv_potenza_mono: ["BV Potenza Mono", "https://ppa.com.br/brasil/products/automatizadores-basculantes/bv-potenza/bv-potenza-mono"],
    bv_potenza_legero: ["BV Potenza Legero", "https://ppa.com.br/brasil/products/automatizadores-basculantes/bv-potenza/bv-potenza-legero"],
    bv_potenza_jetflex: ["BV Potenza JetFlex", "https://ppa.com.br/brasil/products/automatizadores-basculantes/bv-potenza/bv-potenza-jetflex"],
    bv_penta_mono: ["BV Penta Mono", "https://ppa.com.br/brasil/products/automatizadores-basculantes/bv-penta/bv-penta-mono"],
    bv_penta_legero: ["BV Penta Legero", "https://ppa.com.br/brasil/products/automatizadores-basculantes/bv-penta/bv-penta-legero"],
    bv_penta_jet: ["BV Penta JetFlex", "https://ppa.com.br/brasil/products/automatizadores-basculantes/bv-penta/bv-penta-jetflex"],
    bv_penta_jetflex: ["BV Penta JetFlex", "https://ppa.com.br/brasil/products/automatizadores-basculantes/bv-penta/bv-penta-jetflex"],
    "2x_bv_penta_jetflex": ["2x BV Penta JetFlex", "https://ppa.com.br/brasil/products/automatizadores-basculantes/bv-penta/bv-penta-jetflex"],
    bv_condominio: ["BV Condomínio", "https://ppa.com.br/brasil/products/automatizadores-basculantes/bv-condominio/bv-condominio-jetflex"],
    bv_celtron: ["BV Celtron", "https://ppa.com.br/brasil/products/automatizadores-basculantes/bv-celtron"]
  };

  // Resultado
  if (motoresPossiveis.length === 0) {
    document.getElementById("resultado").innerHTML = "Nenhum motor encontrado para os parâmetros informados.";
    return;
  }

  let resultadoHtml = "<h3>Os motores ideais para seu portão são:</h3><ul>";

  motoresPossiveis.forEach(motor => {
    if (links[motor]) {
      const [nome, url] = links[motor];
      resultadoHtml += `<li><a href="${url}" target="_blank">${nome}</a></li>`;
    } else {
      resultadoHtml += `<li>${motor}</li>`;
    }
  });

  resultadoHtml += `</ul><p>O ACC indicado é: <strong>${acc}</strong></p>`;

  document.getElementById("resultado").innerHTML = resultadoHtml;
});