const PARTIES = {
  psoe: {
    name: "PSOE",
    hint: "socialistas",
    blurb: "Partido Socialista. Socialdemócrata. En 2023 lo lideraba Pedro Sánchez.",
    color: "#c0392b",
  },
  pp: {
    name: "PP",
    hint: "Partido Popular",
    blurb: "Partido Popular. Centroderecha. En 2023 lo lideraba Alberto Núñez Feijóo.",
    color: "#1a4f9c",
  },
  vox: {
    name: "Vox",
    hint: "derecha",
    blurb: "Derecha. En 2023 lo lideraba Santiago Abascal.",
    color: "#5c8f16",
  },
  sumar: {
    name: "Sumar",
    hint: "izquierda",
    blurb: "Coalición de izquierdas. En 2023 la encabezaba Yolanda Díaz.",
    color: "#c73478",
  },
  erc: {
    name: "ERC",
    hint: "independentistas de izquierdas",
    blurb: "Esquerra Republicana de Catalunya. Izquierda independentista.",
    color: "#d4a017",
  },
  junts: {
    name: "Junts",
    hint: "independentistas catalanes",
    blurb: "Junts per Catalunya. Independentismo catalán.",
    color: "#0d86b5",
  },
  "psoe-sumar": {
    name: "PSOE+Sumar",
    hint: "coalición",
    blurb: "PSOE y Sumar están juntos en el Gobierno. Si la propuesta la envía el Gobierno, aquí cuenta como PSOE+Sumar.",
    color: "#c13a52",
  },
};

const AGREE = [
  {
    id: "vivienda",
    type: "agree",
    topic: "Vivienda",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "psoe",
        text: "Llegar a un 20% de vivienda pública y poner límites al precio del alquiler.",
      },
      {
        party: "pp",
        text: "Derogar la ley de vivienda y avalar a menores de 35 años para que el banco financie hasta el 95% de la casa.",
      },
      {
        party: "sumar",
        text: "Obligar a los grandes propietarios a ofrecer alquiler social y regular de verdad el precio del alquiler.",
      },
      {
        party: "vox",
        text: "Quitar el IVA de la primera vivienda habitual y recuperar la deducción por vivienda en la declaración de la renta.",
      },
    ],
  },
  {
    id: "nuclear",
    type: "agree",
    topic: "Energía nuclear",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "pp",
        text: "Alargar la vida de las centrales nucleares que ya funcionan, si lo autoriza el Consejo de Seguridad Nuclear.",
      },
      {
        party: "sumar",
        text: "Cerrar las nucleares en la fecha prevista y no abrir ninguna nueva.",
      },
      {
        party: "vox",
        text: "Alargar las nucleares actuales y poner minirreactores en centrales que ya se cerraron.",
      },
    ],
  },
  {
    id: "impuestos",
    type: "agree",
    topic: "Impuestos",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "pp",
        text: "Quitar el impuesto a las grandes fortunas y bajar un tiempo el IVA de la carne, el pescado y las conservas.",
      },
      {
        party: "sumar",
        text: "Dejar fijo un impuesto a las grandes fortunas, de al menos el 4% en los patrimonios más altos.",
      },
      {
        party: "psoe",
        text: "Estudiar si se prorroga el impuesto temporal a la banca y a las energéticas, y revisar el de las grandes fortunas.",
      },
    ],
  },
  {
    id: "aborto",
    type: "agree",
    topic: "Aborto",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "pp",
        text: "Si una menor quiere abortar, tienen que autorizarlo su padre, su madre o quien tenga la patria potestad.",
      },
      {
        party: "sumar",
        text: "Que se pueda abortar en la sanidad pública en todo el país, en las mismas condiciones.",
      },
      {
        party: "vox",
        text: "Derogar la ley del aborto y sacar el aborto de la sanidad pública.",
      },
    ],
  },
  {
    id: "catalunya",
    type: "agree",
    topic: "Catalunya",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "erc",
        text: "Negociar un referéndum para que Catalunya pueda decidir si se convierte en una república independiente.",
        note: "Junts también defiende que Catalunya decida. Esta frase está en el programa de ERC.",
      },
      {
        party: "junts",
        text: "Aprobar una ley de amnistía para todas las personas represaliadas por el conflicto entre Catalunya y España.",
        note: "ERC también pide una amnistía. Esta frase está en el programa de Junts.",
      },
      {
        party: "psoe",
        text: "Seguir el diálogo con Catalunya dentro de la Constitución, para recuperar la convivencia.",
      },
      {
        party: "vox",
        text: "Volver a castigar como delito un referéndum ilegal y la sedición, y subir esas penas.",
      },
    ],
  },
  {
    id: "lenguas",
    type: "agree",
    topic: "Lenguas",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "pp",
        text: "Donde hay dos lenguas oficiales, las dos se usan en la escuela, y hay que saber escribir y hablar el castellano y la otra lengua.",
      },
      {
        party: "vox",
        text: "El castellano tiene que poder usarse como lengua de trabajo en toda España.",
      },
      {
        party: "erc",
        text: "Una ley para que la administración del Estado atienda a cada persona en la lengua oficial que elija.",
      },
    ],
  },
  {
    id: "jornada",
    type: "agree",
    topic: "Jornada laboral",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "sumar",
        text: "Bajar por ley la jornada a 37,5 horas en 2024 y seguir hasta las 32 horas semanales, sin bajar el sueldo.",
      },
      {
        party: "psoe",
        text: "Seguir con un proyecto piloto para que empresas industriales reduzcan la jornada, sin bajar el sueldo.",
      },
      {
        party: "pp",
        text: "Más flexibilidad de horario y un banco de horas, sin cambiar las horas trabajadas ni el sueldo.",
      },
    ],
  },
  {
    id: "inmigracion",
    type: "agree",
    topic: "Inmigración",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "vox",
        text: "Expulsión inmediata de quien entre sin papeles. Quien llegue de forma ilegal no podrá regularizar su situación.",
      },
      {
        party: "pp",
        text: "Acelerar las expulsiones de inmigrantes irregulares y de quienes hayan cometido un delito, con acuerdos con sus países.",
      },
      {
        party: "sumar",
        text: "Abrir un procedimiento permanente para regularizar a quien está en España sin papeles.",
      },
    ],
  },
  {
    id: "ocupacion",
    type: "agree",
    topic: "Ocupación",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "pp",
        text: "Desalojar en un máximo de 24 horas y castigar la usurpación con hasta 3 años de cárcel.",
        note: "Vox también pide mano dura con la ocupación. El plazo de 24 horas y los 3 años de cárcel están en el programa del PP.",
      },
      {
        party: "psoe",
        text: "Desalojar a los ocupas ilegales en un máximo de 48 horas, y atender también la vulnerabilidad social.",
      },
      {
        party: "vox",
        text: "Tolerancia cero: proteger al propietario frente a las mafias y la entrada ilegal, y no cobrarle el IBI mientras la casa siga ocupada.",
      },
    ],
  },
  {
    id: "lgtbi",
    type: "agree",
    topic: "LGTBI",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "psoe",
        text: "Incluir las terapias de conversión como delito en el código penal.",
        note: "ERC también pide criminalizar las terapias de conversión. Esta frase está en el programa del PSOE.",
      },
      {
        party: "sumar",
        text: "Erradicar por completo las llamadas terapias de conversión, como ya dice la Ley 4/2023.",
      },
      {
        party: "vox",
        text: "Derogar las leyes LGTBI y la ley trans, y prohibir hormonas y cirugías de cambio de sexo en los menores.",
      },
      {
        party: "pp",
        text: "Aprobar una ley de derechos de las personas transexuales, pactada con diálogo, y legislar con prudencia frente a las posiciones más extremas.",
      },
    ],
  },
  {
    id: "sanidad",
    type: "agree",
    topic: "Sanidad",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "sumar",
        text: "Impedir la gestión privada de la sanidad y devolver a lo público la limpieza, la hostelería y la lavandería de los hospitales.",
      },
      {
        party: "vox",
        text: "Devolver al Estado las competencias de sanidad de las comunidades autónomas, para un sistema único en toda España.",
      },
      {
        party: "pp",
        text: "Un plan de choque en atención primaria: mil plazas más de medicina de familia en 2024 y jubilación activa de esos médicos hasta los 72 años.",
      },
      {
        party: "psoe",
        text: "Sanidad pública, gratuita y universal, y que paguen menos por los medicamentos quienes ganan menos de 18.000 euros.",
      },
    ],
  },
];

const GUESS = [
  {
    id: "sanidad-listas",
    type: "guess",
    topic: "Listas de espera",
    text: "Bajar las listas de espera incentivando a los hospitales públicos y reforzando los conciertos con la sanidad privada.",
    party: "vox",
    why: "Es la medida 109 del programa de Vox. Sumar pide una ley de tiempos máximos de espera y acabar con la gestión privada, no más conciertos.",
    distractors: ["pp", "psoe", "sumar"],
  },
  {
    id: "violencia",
    type: "guess",
    topic: "Violencia de género",
    text: "Derogar la Ley Integral de Violencia de Género.",
    party: "vox",
    why: "Vox pedía derogarla. El PP decía que quería seguir con el Pacto de Estado contra la violencia de género.",
    distractors: ["pp", "psoe", "sumar"],
  },
  {
    id: "deficit",
    type: "guess",
    topic: "Dinero y Catalunya",
    text: "Cada año salen de Catalunya unos 20.200 millones que se pagan al Estado y no vuelven. Hay que acabar con ese déficit fiscal.",
    party: "junts",
    why: "Esa cifra está en el programa de Junts. ERC también dice que Catalunya está mal financiada, pero no usa este número.",
    distractors: ["erc", "psoe", "pp"],
  },
  {
    id: "vientres",
    type: "guess",
    topic: "Derechos",
    text: "Ni prostitución ni vientres de alquiler: abolir la prostitución y prohibir la gestación por sustitución.",
    party: "psoe",
    why: "El PSOE lo puso como un apartado propio del programa: «Ni prostitución ni vientres de alquiler».",
    distractors: ["sumar", "pp", "vox"],
  },
  {
    id: "cannabis",
    type: "guess",
    topic: "Cannabis",
    text: "Regular el cannabis por completo: despenalizar el autoconsumo sin ánimo de lucro y permitir el uso medicinal.",
    party: "sumar",
    why: "Sumar propone regular el cannabis y las asociaciones de autoconsumo. No es una medida del resto de programas de esta lista.",
    distractors: ["psoe", "erc", "vox"],
  },
  {
    id: "toros",
    type: "guess",
    topic: "Toros",
    text: "Quitar la ley que protege los toros como cultura y dejar de pagar con dinero público las corridas en las que muere el animal.",
    party: "sumar",
    why: "Sumar pide derogar la ley de protección de la tauromaquia y suprimir el dinero público de los espectáculos taurinos con muerte.",
    distractors: ["vox", "pp", "psoe"],
  },
  {
    id: "herencia",
    type: "guess",
    topic: "Juventud",
    text: "Dar 20.000 euros a cada persona al cumplir 23 años, pagados con un impuesto a las grandes fortunas.",
    party: "sumar",
    why: "Sumar lo llama «herencia universal». El dinero saldría de un impuesto a las grandes fortunas.",
    distractors: ["psoe", "pp", "erc"],
  },
  {
    id: "bono",
    type: "guess",
    topic: "Luz y gas",
    text: "Crear un bono social único: un pago directo que sustituya las ayudas actuales de la luz y del gas.",
    party: "pp",
    why: "El PP lo llama Bono Social Único y dice que sustituiría los bonos eléctrico y térmico.",
    distractors: ["psoe", "sumar", "vox"],
  },
  {
    id: "anticonceptivos",
    type: "guess",
    topic: "Salud",
    text: "Preservativos y anticonceptivos gratis para la gente joven, en sitios a los que va la juventud.",
    party: "psoe",
    why: "El PSOE lo incluye como garantía para las personas jóvenes, ampliando los puntos donde se pueden conseguir.",
    distractors: ["sumar", "pp", "erc"],
  },
  {
    id: "monarquia",
    type: "guess",
    topic: "Monarquía",
    text: "Abolir la monarquía y apoyar un referéndum para elegir entre monarquía y república.",
    party: "erc",
    why: "ERC lo escribe así: abolir la monarquía y apoyar un referéndum entre monarquía y república.",
    distractors: ["junts", "sumar", "pp"],
  },
  {
    id: "aeropuertos",
    type: "guess",
    topic: "Aeropuertos",
    text: "Que Catalunya gestione los aeropuertos de El Prat, Girona, Reus y Sabadell.",
    party: "junts",
    why: "Esa lista de aeropuertos está en el programa de Junts. ERC también pide más autogobierno, pero no esta medida concreta.",
    distractors: ["erc", "psoe", "pp"],
  },
  {
    id: "menas",
    type: "guess",
    topic: "Menores migrantes",
    text: "Cerrar los centros de menores extranjeros no acompañados y devolver a esos menores con su familia, a su país.",
    party: "vox",
    why: "Vox lo propone así: cerrar esos centros y repatriar a los menores con sus padres.",
    distractors: ["pp", "psoe", "sumar"],
  },
];

const AGREE_CONGRESO = [
  {
    id: "vivienda-congreso",
    type: "agree",
    topic: "Vivienda en el Congreso",
    originLabel: "Proposiciones de ley del Congreso, XV legislatura. Ninguna de estas tres es una ley ya aprobada.",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "psoe",
        text: "Poner el IVA del 21% a los alquileres de corta duración en municipios de más de 10.000 habitantes, y crear un impuesto para quien compre una casa sin residir en la Unión Europea.",
        cite: "PSOE · BOCG 30 may 2025",
        note: "Proposición de ley del Grupo Socialista, publicada el 30 de mayo de 2025. No es la ley de vivienda de 2023: es otra iniciativa, y todavía no está aprobada.",
      },
      {
        party: "pp",
        text: "Quitar de la ley de vivienda las zonas tensionadas, los índices de precios del alquiler y el control de precios.",
        cite: "PP · BOCG 13 feb 2026",
        note: "Proposición de ley del Grupo Popular, publicada el 13 de febrero de 2026. El Congreso la tomó en consideración y el 28 de abril de 2026 se abrió el plazo de enmiendas. Sigue en trámite: no es una ley en vigor.",
      },
      {
        party: "sumar",
        text: "Que solo las personas físicas puedan comprar viviendas, y no las empresas ni los fondos, salvo entidades sin ánimo de lucro para usos sociales.",
        cite: "Sumar · rechazada en 2026",
        note: "Proposición de ley de Sumar para cambiar la ley de vivienda de 2023. El Pleno del Congreso la rechazó el 15 de septiembre de 2026.",
      },
    ],
  },
];

const GUESS_CONGRESO = [
  {
    id: "ceuta-ayudas",
    type: "guess",
    topic: "Ceuta",
    originLabel: "Proyecto de ley publicado en el BOCG el 25 de septiembre de 2026.",
    text: "En Ceuta, 5.000 euros a cada autónomo y entre 10.000 y 150.000 euros a las empresas, según su facturación, por la crisis migratoria de julio de 2026.",
    party: "psoe-sumar",
    why: "Está en el artículo 1 del proyecto de ley de medidas urgentes para Ceuta, que sale del real decreto-ley 22/2026. El Congreso lo convalidó el 16 de septiembre de 2026. Lo envía el Gobierno, formado por PSOE y Sumar, así que aquí la respuesta es PSOE+Sumar.",
    distractors: ["pp", "vox", "erc"],
  },
  {
    id: "ceuta-cuotas",
    type: "guess",
    topic: "Ceuta y Melilla",
    originLabel: "Proposición de ley publicada en el BOCG el 25 de octubre de 2024.",
    text: "Recuperar la bonificación de las cuotas de la Seguridad Social que pagan los empresarios de Ceuta y Melilla.",
    party: "pp",
    why: "Es una proposición de ley del Grupo Popular, admitida a trámite el 22 de octubre de 2024. No es el paquete de ayudas para Ceuta de 2026, que envió el Gobierno de PSOE y Sumar.",
    distractors: ["psoe-sumar", "vox", "erc"],
  },
];

let previousIds = new Set();

const app = document.querySelector("#app");
let state;

function shuffle(list) {
  const copy = list.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function cloneRound(round) {
  return {
    ...round,
    options: round.options ? shuffle(round.options.map((option) => ({ ...option }))) : undefined,
    distractors: round.distractors?.slice(),
  };
}

function pickRounds(pool, count) {
  const fresh = shuffle(pool.filter((round) => !previousIds.has(round.id)));
  const repeated = shuffle(pool.filter((round) => previousIds.has(round.id)));
  return [...fresh, ...repeated].slice(0, count).map(cloneRound);
}

const PINNED_IDS = ["ocupacion", "inmigracion", "impuestos", "lgtbi", "sanidad"];

function freshGame() {
  const pinned = AGREE.filter((round) => PINNED_IDS.includes(round.id)).map(cloneRound);
  const agree = shuffle([
    ...pinned,
    ...pickRounds(
      [...AGREE.filter((round) => !PINNED_IDS.includes(round.id)), ...AGREE_CONGRESO],
      1
    ),
  ]);
  const guess = shuffle([
    ...pickRounds(GUESS_CONGRESO, 1),
    ...pickRounds(GUESS.filter((round) => round.id === "sanidad-listas"), 1),
    ...pickRounds(GUESS.filter((round) => round.id !== "sanidad-listas"), 1),
  ]);
  previousIds = new Set([...agree, ...guess].map((round) => round.id));
  state = {
    rounds: [...agree, ...guess],
    index: 0,
    phase: "start",
    agrees: Object.fromEntries(Object.keys(PARTIES).map((id) => [id, 0])),
    guesses: [],
    picked: null,
  };
}

function partyLabel(id) {
  return PARTIES[id].name;
}

function partyMark(id) {
  if (id === "psoe-sumar") {
    return `<span class="coalition-logos">${partyMark("psoe")}${partyMark("sumar")}</span>`;
  }
  return `<img class="party-logo" src="logos/${id}.svg" alt="${partyLabel(id)}">`;
}

function joinNames(ids) {
  const names = ids.map(partyLabel);
  if (names.length < 2) return names[0] || "";
  if (names.length === 2) return `${names[0]} y ${names[1]}`;
  return `${names.slice(0, -1).join(", ")} y ${names.at(-1)}`;
}

function render() {
  if (state.phase === "start") {
    app.innerHTML = startView();
  } else if (state.phase === "result") {
    app.innerHTML = resultView();
  } else {
    app.innerHTML = questionView();
  }
  bind();
}

function startView() {
  const pills = Object.entries(PARTIES).filter(([id]) => id !== "psoe-sumar")
    .map(
      ([id, party]) => `
        <div class="party-pill">
          <i class="dot" style="background:${party.color}"></i>
          <div>
            <strong>${party.name}</strong>
            <span>${party.hint}</span>
          </div>
        </div>`
    )
    .join("");

  return `
    <p class="kicker">Elecciones generales 2023</p>
    <h1>Con quién coincides</h1>
    <p class="lead">Nueve preguntas cortas, y cada partida salen otras. Unas vienen de los programas de 2023. Otras, de proposiciones y proyectos de ley de esta legislatura en el Congreso.</p>
    <section class="panel">
      <p class="help">En unas eliges la propuesta con la que estás más de acuerdo y después te decimos de qué partido era. En otras te damos una frase y tienes que adivinar el partido.</p>
      <div class="parties">${pills}</div>
      <button class="primary" data-action="start">Empezar</button>
    </section>
    <p class="sources">Programas electorales del 23 de julio de 2023, publicados por RTVE, y textos del Boletín Oficial de las Cortes Generales de la XV legislatura. Las frases están resumidas. Una proposición de ley no es lo mismo que una ley ya aprobada.</p>
  `;
}

function questionView() {
  const round = state.rounds[state.index];
  const total = state.rounds.length;
  const width = ((state.index + (state.phase === "feedback" ? 1 : 0)) / total) * 100;
  const body = round.type === "agree" ? agreeBody(round) : guessBody(round);
  const feedback = state.phase === "feedback" ? feedbackView(round) : "";

  return `
    <div class="topbar">
      <span>Pregunta ${state.index + 1} de ${total}</span>
      <span>${round.type === "agree" ? "Elige" : "Adivina"}</span>
    </div>
    <div class="track" aria-hidden="true"><span style="width:${width}%"></span></div>
    <p class="kicker">${round.topic}</p>
    ${round.originLabel ? `<p class="origin">${round.originLabel}</p>` : ""}
    ${body}
    ${feedback}
  `;
}

function agreeBody(round) {
  const revealed = state.phase === "feedback";
  const options = round.options
    .map((option, index) => {
      const classes = ["choice"];
      if (revealed) classes.push(state.picked === index ? "picked" : "dim");
      const logo = revealed
        ? `<span class="mark">${partyMark(option.party)}${option.cite ? `<span class="cite">${option.cite}</span>` : ""}</span>`
        : "";
      return `
        <button class="${classes.join(" ")}" data-option="${index}" ${revealed ? "disabled" : ""}>
          <span class="choice-copy">
            <small>Propuesta ${index + 1}</small>
            <p>${option.text}</p>
          </span>
          ${logo}
        </button>`;
    })
    .join("");

  return `
    <h2>${round.prompt}</h2>
    <div class="choices">${options}</div>
  `;
}

function guessBody(round) {
  const choices = shuffle([round.party, ...round.distractors]);
  round.choiceOrder = round.choiceOrder || choices;
  const buttons = round.choiceOrder
    .map((id) => {
      const classes = ["choice"];
      if (state.phase === "feedback") {
        if (id === state.picked) classes.push("picked");
        if (id !== state.picked) classes.push("dim");
      }
      const logos = id === "psoe-sumar" ? partyMark(id) : "";
      return `
        <button class="${classes.join(" ")}" data-party="${id}" ${state.phase === "feedback" ? "disabled" : ""}>
          ${logos}
          <p>${partyLabel(id)}</p>
        </button>`;
    })
    .join("");

  return `
    <h2>${round.prompt || "¿De qué partido es esta propuesta?"}</h2>
    <p class="quote">“${round.text}”</p>
    <div class="choices">${buttons}</div>
  `;
}

function feedbackView(round) {
  if (round.type === "agree") {
    const chosen = round.options[state.picked];
    const party = PARTIES[chosen.party];
    const others = joinNames(
      round.options.filter((_, index) => index !== state.picked).map((option) => option.party)
    );
    return `
      <section class="feedback ok">
        <h3>Esta propuesta es de ${party.name}</h3>
        <p>${party.blurb}</p>
        ${chosen.note ? `<p>${chosen.note}</p>` : ""}
        <p class="others">Las otras eran de ${others}.</p>
      </section>
      <div class="actions">
        <button class="primary" data-action="next">${state.index === state.rounds.length - 1 ? "Ver resultado" : "Siguiente"}</button>
      </div>
    `;
  }

  const correct = state.picked === round.party;
  const party = PARTIES[round.party];
  return `
    <section class="feedback ${correct ? "ok" : "no"}">
      <h3>${correct ? `Sí: es de ${party.name}` : `Era de ${party.name}`}</h3>
      <p>${round.why}</p>
      <p class="others">${party.blurb}</p>
    </section>
    <div class="actions">
      <button class="primary" data-action="next">${state.index === state.rounds.length - 1 ? "Ver resultado" : "Siguiente"}</button>
    </div>
  `;
}

function resultView() {
  const ranking = Object.entries(state.agrees)
    .filter(([id, count]) => id !== "psoe-sumar" || count > 0)
    .sort((a, b) => b[1] - a[1] || partyLabel(a[0]).localeCompare(partyLabel(b[0]), "es"));
  const top = ranking[0][1];
  const winners = ranking.filter(([, count]) => count === top).map(([id]) => id);
  const agreeTotal = state.rounds.filter((round) => round.type === "agree").length;
  const correct = state.guesses.filter((guess) => guess.correct).length;
  const guessTotal = state.guesses.length;
  const title =
    winners.length === 1
      ? `Has coincidido más con ${partyLabel(winners[0])}`
      : `Has empatado entre ${joinNames(winners)}`;
  const detail =
    winners.length === 1
      ? `De las ${agreeTotal} propuestas que elegiste porque te convencían, ${top} eran de ${partyLabel(winners[0])}. ${PARTIES[winners[0]].blurb}`
      : `De las ${agreeTotal} propuestas que elegiste, ${top} eran de cada uno: ${winners.map((id) => PARTIES[id].blurb).join(" ")}`;

  const bars = ranking
    .map(([id, count]) => {
      const width = agreeTotal ? (count / agreeTotal) * 100 : 0;
      return `
        <div class="bar-row">
          <strong>${partyLabel(id)}</strong>
          <div class="bar"><i style="width:${width}%;background:${PARTIES[id].color}"></i></div>
          <span>${count}</span>
        </div>`;
    })
    .join("");

  const review = state.guesses
    .map(
      (guess) => `
        <li>
          <span class="tag ${guess.correct ? "ok" : "no"}">${guess.correct ? "Acierto" : "Fallo"}</span>
          ${guess.topic}: era de ${partyLabel(guess.party)}${guess.correct ? "" : `, y elegiste ${partyLabel(guess.picked)}`}.
        </li>`
    )
    .join("");

  return `
    <p class="kicker">Resultado</p>
    <h1>${title}</h1>
    <p class="lead">${detail}</p>
    <section class="panel">
      <h2>Propuestas con las que coincidiste</h2>
      <div class="bars">${bars}</div>
      <h2>Aciertos al adivinar el partido</h2>
      <p class="score-party"><span class="party-name">${correct}/${guessTotal}</span></p>
      <ul class="review">${review}</ul>
      <div class="actions">
        <button class="primary" data-action="restart">Jugar otra vez</button>
      </div>
    </section>
    <p class="sources">Fuentes: programas electorales de 2023 publicados por RTVE, y el Boletín Oficial de las Cortes Generales de la XV legislatura. Las iniciativas del Congreso que salen aquí son proposiciones o proyectos de ley, no mociones. Una frase resumida no sustituye el texto oficial.</p>
  `;
}

function bind() {
  app.querySelector('[data-action="start"]')?.addEventListener("click", () => {
    prepareRound();
    state.phase = "question";
    render();
  });

  app.querySelector('[data-action="next"]')?.addEventListener("click", () => {
    if (state.index === state.rounds.length - 1) {
      state.phase = "result";
    } else {
      state.index += 1;
      state.picked = null;
      prepareRound();
      state.phase = "question";
    }
    render();
  });

  app.querySelector('[data-action="restart"]')?.addEventListener("click", () => {
    freshGame();
    render();
  });

  app.querySelectorAll("[data-option]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.option);
      const round = state.rounds[state.index];
      state.picked = index;
      state.agrees[round.options[index].party] += 1;
      state.phase = "feedback";
      render();
    });
  });

  app.querySelectorAll("[data-party]").forEach((button) => {
    button.addEventListener("click", () => {
      const round = state.rounds[state.index];
      state.picked = button.dataset.party;
      state.guesses.push({
        topic: round.topic,
        party: round.party,
        picked: state.picked,
        correct: state.picked === round.party,
      });
      state.phase = "feedback";
      render();
    });
  });
}

function prepareRound() {
  const round = state.rounds[state.index];
  if (round.type === "agree") {
    round.options = shuffle(round.options);
  } else {
    round.choiceOrder = shuffle([round.party, ...round.distractors]);
  }
}

freshGame();
render();
