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
  "grupos-alquiler": {
    name: "Sumar, EH Bildu, ERC, Podemos y BNG",
    hint: "proposición conjunta",
    blurb: "La firman Sumar, Euskal Herria Bildu, ERC y el Grupo Mixto. En el texto, el Mixto son Podemos y el BNG.",
    color: "#8a3d62",
  },
  "psoe-junts": {
    name: "PSOE y Junts",
    hint: "proposición conjunta",
    blurb: "Propuesta firmada a la vez por el Grupo Socialista y por Junts per Catalunya.",
    color: "#0d6e8f",
  },
};

const AGREE = [
  {
    id: "vivienda-alquiler",
    type: "agree",
    topic: "Alquiler",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "psoe",
        text: "Poner límites al precio del alquiler.",
      },
      {
        party: "sumar",
        text: "Regular de verdad el precio del alquiler.",
      },
      {
        party: "pp",
        text: "Derogar la ley de vivienda.",
      },
      {
        party: "vox",
        text: "Acabar con el control de los precios del alquiler.",
      },
    ],
  },
  {
    id: "vivienda-compra",
    family: "hipoteca",
    type: "agree",
    topic: "Conseguir casa",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "psoe",
        text: "Llegar a un 20% de vivienda pública.",
      },
      {
        party: "sumar",
        text: "Obligar a los grandes propietarios a ofrecer alquiler social.",
      },
      {
        party: "pp",
        text: "Avalar a menores de 35 años para que el banco financie hasta el 95% de la casa.",
      },
      {
        party: "vox",
        text: "Quitar el IVA de la primera vivienda habitual.",
      },
    ],
  },
  {
    id: "turisticos",
    type: "agree",
    topic: "Pisos turísticos",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "sumar",
        text: "Limitar el alquiler turístico y el de temporada para que no sirva para saltarse la ley de vivienda.",
      },
      {
        party: "vox",
        text: "Una norma igual en toda España para los pisos turísticos, que frene cómo encarecen la vivienda.",
      },
      {
        party: "psoe",
        text: "Poner el IVA del 21% a los alquileres de corta duración en municipios de más de 10.000 habitantes.",
        cite: "PSOE · BOCG 30 may 2025",
        note: "Esto no está en el programa de 2023. Es una proposición de ley del Grupo Socialista, publicada el 30 de mayo de 2025. No es una ley aprobada.",
      },
    ],
  },
  {
    id: "nuclear",
    family: "nuclear",
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
    id: "fortunas",
    type: "agree",
    topic: "Grandes fortunas",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "pp",
        text: "Quitar el impuesto a las grandes fortunas.",
      },
      {
        party: "sumar",
        text: "Dejarlo fijo, de al menos el 4% en los patrimonios más altos.",
      },
      {
        party: "psoe",
        text: "Evaluar el impuesto temporal a las grandes fortunas antes de decidir si sigue.",
      },
    ],
  },
  {
    id: "sucesiones",
    family: "sucesiones",
    type: "agree",
    topic: "Herencias",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "vox",
        text: "Suprimir el impuesto de sucesiones y donaciones en toda España.",
      },
      {
        party: "sumar",
        text: "Poner un mínimo en toda España que las comunidades no puedan rebajar.",
      },
    ],
  },
  {
    id: "smi",
    type: "agree",
    topic: "Salario mínimo",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "sumar",
        text: "Subir el salario mínimo por encima del IPC, para que no pierda poder de compra.",
      },
      {
        party: "pp",
        text: "Actualizarlo en el diálogo social, con sindicatos, empresarios y expertos.",
      },
      {
        party: "vox",
        text: "Subir los salarios, sobre todo los más bajos, y bajar las cargas de las empresas para que eso no destruya empleo.",
      },
    ],
  },
  {
    id: "pensiones",
    type: "agree",
    topic: "Pensiones",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "psoe",
        text: "Blindar en la Constitución que las pensiones suban con el IPC.",
      },
      {
        party: "sumar",
        text: "Mantener la subida con el IPC y subir más las pensiones mínimas, hasta el umbral de la pobreza.",
      },
      {
        party: "pp",
        text: "Revalorizar las pensiones según el Pacto de Toledo y hacer el sistema más contributivo.",
      },
    ],
  },
  {
    id: "dental",
    type: "agree",
    topic: "Dentista",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "sumar",
        text: "Meter el dentista en la sanidad pública.",
      },
      {
        party: "psoe",
        text: "Ir metiendo empastes e implantes, empezando por los mayores de 75 años.",
      },
      {
        party: "vox",
        text: "Incluir la salud bucodental y la de la vista en la sanidad pública.",
      },
    ],
  },
  {
    id: "coches",
    type: "agree",
    topic: "Coches",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "vox",
        text: "Suspender en Europa la prohibición de vender coches de combustión en 2035.",
      },
      {
        party: "sumar",
        text: "Que en 2040 ya no circulen en España coches de combustión.",
      },
    ],
  },
  {
    id: "educacion",
    type: "agree",
    topic: "Colegios",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "pp",
        text: "Que las familias puedan elegir colegio público, privado o concertado.",
      },
      {
        party: "vox",
        text: "Un cheque escolar para que cada familia elija el modelo de colegio, también si tiene poco dinero.",
      },
      {
        party: "sumar",
        text: "Pagar plazas concertadas solo cuando no haya sitio en la pública, y quitar el concierto a los centros que separan por sexo.",
      },
    ],
  },
  {
    id: "eutanasia",
    type: "agree",
    topic: "Eutanasia",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "psoe",
        text: "Defender la ley de eutanasia.",
      },
      {
        party: "vox",
        text: "Derogar la ley de eutanasia.",
      },
      {
        party: "pp",
        text: "Revisar la ley de eutanasia con el Comité de Bioética, y reforzar los cuidados paliativos.",
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
        text: "Negociar un referéndum de autodeterminación en Catalunya, con acompañamiento internacional.",
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
    family: "jornada",
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
    id: "inmigra-medidas",
    type: "agree",
    topic: "Inmigración",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "vox",
        text: "Expulsar también a inmigrantes con residencia legal que cometan delitos graves o hagan de los delitos leves su forma de vida.",
        note: "Es la medida 203 de Vox, aparte de la expulsión de quien entra sin papeles. Añade procurar que esas penas se cumplan en el país de origen.",
      },
      {
        party: "vox",
        text: "Dar prioridad migratoria a personas de países que comparten idioma y vínculos históricos y culturales con España.",
        note: "Es la medida 208 de Vox. No trata todas las procedencias igual.",
      },
      {
        party: "erc",
        text: "Desligar de la nacionalidad el derecho a votar y a presentarse, vincularlo a residir y estar empadronado, y cambiar el artículo 13 de la Constitución.",
        note: "ERC no dice si son las municipales, las autonómicas o las generales. El artículo 13 es el que hoy deja el voto de los extranjeros, como mucho, en las municipales y solo si hay reciprocidad.",
      },
      {
        party: "psoe-junts",
        text: "Que Cataluña gestione autorizaciones de estancia y otras competencias estatales de inmigración, aplicando la normativa del Estado.",
        note: "La presentaron juntos el Grupo Socialista y Junts. No significa que Cataluña decida sola toda la política migratoria. No es una ley aprobada.",
      },
    ],
  },
  {
    id: "ocupacion",
    family: "ocupacion",
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
    family: "lgtbi",
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
        note: "Es la medida 211 del programa del PP. Esta frase, por sí sola, no dice que apoye la autodeterminación del sexo en el registro ni el contenido de la ley vigente.",
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
    id: "iva",
    type: "guess",
    topic: "IVA de la comida",
    text: "Bajar un tiempo el IVA de la carne, el pescado y las conservas.",
    party: "pp",
    why: "El PP lo propone solo como un alivio temporal. En su programa va aparte de quitar el impuesto a las grandes fortunas.",
    distractors: ["psoe", "sumar", "vox"],
  },
  {
    id: "autonomos",
    type: "guess",
    topic: "Cuota de autónomos",
    text: "Tarifa 0 el primer año para quien se haga autónomo, y poder dejar sin pagar tres cuotas al año.",
    party: "pp",
    why: "El PP lo llama tarifa 0 y aplazamiento de tres cuotas. Vox pide otra cosa: quitar la cuota a quien no llegue al salario mínimo.",
    distractors: ["vox", "psoe", "sumar"],
  },
  {
    id: "transporte",
    type: "guess",
    topic: "Transporte",
    text: "Transporte público urbano gratis para niños y estudiantes hasta los 24 años.",
    party: "psoe",
    why: "El PSOE lo escribe así: ampliar los descuentos hasta la gratuidad del transporte urbano para niños y estudiantes hasta los 24 años.",
    distractors: ["sumar", "pp", "vox"],
  },
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
    family: "abolicion",
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
    text: "Despenalizar la producción y el consumo propio de cannabis sin ánimo de lucro, y regular las asociaciones de autoconsumo.",
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
  {
    id: "jornada-sumar",
    family: "jornada",
    type: "guess",
    topic: "Jornada laboral",
    text: "Bajar por ley la jornada máxima a 37,5 horas sin bajar el sueldo, y seguir después hacia las 32 horas semanales.",
    party: "sumar",
    why: "El programa de Sumar lo pone así: en 2024, una jornada máxima de 37,5 horas por ley, sin bajar el sueldo, y un diálogo para llegar a las 32. El PSOE habla de un proyecto piloto, no de esa ley.",
    distractors: ["psoe", "pp", "vox"],
  },
  {
    id: "avales",
    family: "hipoteca",
    type: "guess",
    topic: "Hipotecas jóvenes",
    text: "Avalar hipotecas de hasta el 95% del precio de la vivienda para jóvenes de hasta 35 años.",
    party: "pp",
    why: "Es la medida 91 del programa del PP: un programa de avales para que el banco financie hasta el 95% del precio.",
    distractors: ["psoe", "sumar", "vox"],
  },
  {
    id: "selectividad",
    type: "guess",
    topic: "Universidad",
    text: "Una prueba de acceso a la universidad igual en toda España, también en cómo se corrige.",
    party: "pp",
    why: "El PP la llama EBAU común. Las condiciones básicas, incluida la evaluación, las fijaría el Gobierno tras consultar a las comunidades.",
    distractors: ["psoe", "sumar", "vox"],
  },
  {
    id: "desalojo-24",
    family: "ocupacion",
    type: "guess",
    topic: "Ocupación",
    text: "Desalojar como máximo en 24 horas desde el requerimiento, si quien ocupa no acredita un título para quedarse.",
    party: "pp",
    why: "Es la medida 281 del programa del PP. Vox también pide mano dura con la ocupación, pero este plazo de 24 horas desde el requerimiento es del PP.",
    distractors: ["vox", "psoe", "sumar"],
  },
  {
    id: "creditos",
    type: "guess",
    topic: "Universidad",
    text: "Si apruebas una asignatura a la primera, esos créditos de universidad o de FP superior son gratis al curso siguiente.",
    party: "psoe",
    why: "El PSOE lo escribe así: crédito aprobado a la primera, crédito gratuito en el curso siguiente, en la universidad y en la FP superior.",
    distractors: ["sumar", "pp", "vox"],
  },
  {
    id: "proxenetismo",
    family: "abolicion",
    type: "guess",
    topic: "Prostitución",
    text: "Prohibir el proxenetismo en todas sus formas, dentro de una política para abolir la prostitución.",
    party: "psoe",
    why: "El PSOE se declara abolicionista. Propone una ley contra el proxenetismo en todas sus formas, con castigo de la tercería locativa y sanción a los proxenetas, y también protección y una salida para las víctimas.",
    distractors: ["pp", "vox", "sumar"],
  },
  {
    id: "referendum-int",
    type: "guess",
    topic: "Catalunya",
    text: "Negociar un referéndum de autodeterminación en Catalunya, con acompañamiento internacional.",
    party: "erc",
    why: "ERC lo escribe así en el apartado de propuestas para el Congreso y el Senado. Junts también defiende que Catalunya decida, pero esta frase del acompañamiento internacional es de ERC.",
    distractors: ["junts", "psoe", "pp"],
  },
  {
    id: "injurias",
    type: "guess",
    topic: "Monarquía",
    text: "Quitar del código penal el delito de injurias a la Corona.",
    party: "erc",
    why: "ERC lo propone así: despenalizar las injurias a la Corona.",
    distractors: ["junts", "sumar", "pp"],
  },
  {
    id: "sociedades",
    type: "guess",
    topic: "Impuesto de sociedades",
    text: "Bajar del 25% al 20% el tipo nominal del impuesto de sociedades para las pymes.",
    party: "junts",
    why: "Junts lo escribe así en el apartado fiscal: el tipo nominal para las pymes tiene que bajar del 25% al 20%.",
    distractors: ["psoe", "pp", "erc"],
  },
  {
    id: "peaje",
    type: "guess",
    topic: "Carreteras",
    text: "Si Cataluña gestiona las carreteras de alta capacidad, cobrar por usarlas para pagar la mejora, el mantenimiento y la seguridad.",
    party: "junts",
    why: "Junts lo propone en el punto 6 de carreteras: si se traspasa la gestión, un pago por uso en la red de alta capacidad.",
    distractors: ["erc", "psoe", "pp"],
  },
  {
    id: "sucesiones-ley",
    family: "sucesiones",
    type: "guess",
    topic: "Herencias",
    originLabel: "Proposición de ley de Vox. BOCG, 12 de enero de 2024. No es una ley aprobada.",
    text: "Suprimir el impuesto sobre sucesiones y donaciones.",
    party: "vox",
    why: "Es la proposición 122/000047, del Grupo Vox, publicada el 12 de enero de 2024. El programa de 2023 ya pedía suprimirlo. Sigue sin ser una ley en vigor.",
    distractors: ["pp", "psoe", "sumar"],
  },
  {
    id: "nuclear-ley",
    family: "nuclear",
    type: "guess",
    topic: "Energía nuclear",
    originLabel: "Proposición de ley del PP. BOCG, 11 de abril de 2025. No es una ley aprobada.",
    text: "Prorrogar las centrales nucleares si cumplen las condiciones de seguridad, y que el plan energético no cuente con cerrarlas.",
    party: "pp",
    why: "Es la proposición 122/000179, del Grupo Popular, publicada el 11 de abril de 2025. El artículo 1 permite prorrogar la autorización si hay informe favorable del Consejo de Seguridad Nuclear. El artículo 3 pide que la planificación no contemple el cierre de las nucleares que ya existen.",
    distractors: ["psoe", "sumar", "vox"],
  },
  {
    id: "temporada-causa",
    family: "temporada",
    type: "guess",
    topic: "Alquiler temporal",
    originLabel: "Proposición de ley conjunta. BOCG, 5 de julio de 2024. No es una ley aprobada.",
    prompt: "¿Quién la presentó?",
    text: "En un alquiler temporal hay que escribir en el contrato por qué lo es. Si no se acredita esa causa, cuenta como vivienda habitual.",
    party: "grupos-alquiler",
    why: "Está en la proposición 122/000119, publicada el 5 de julio de 2024. Cambia el artículo 2.3 de la ley de arrendamientos. La firman Sumar, Euskal Herria Bildu, ERC y el Grupo Mixto; en el texto, el Mixto son Podemos y el BNG.",
    distractors: ["psoe", "pp", "vox"],
  },
  {
    id: "temporada-plazo",
    family: "temporada",
    type: "guess",
    topic: "Alquiler temporal",
    originLabel: "Proposición de ley conjunta. BOCG, 5 de julio de 2024. No es una ley aprobada.",
    prompt: "¿Quién la presentó?",
    text: "Un alquiler temporal no puede pasar de seis meses. Si dura más, o se encadenan más de dos contratos, cuenta como vivienda habitual.",
    party: "grupos-alquiler",
    why: "Es el artículo 9 bis de la misma proposición 122/000119. La firman Sumar, Euskal Herria Bildu, ERC y el Grupo Mixto; en el texto, el Mixto son Podemos y el BNG. No es una ley aprobada.",
    distractors: ["psoe", "pp", "vox"],
  },
  {
    id: "otan",
    type: "guess",
    topic: "OTAN",
    text: "Preparar planes de contingencia para que España pueda salir de la OTAN.",
    party: "sumar",
    why: "Lo pide el Grupo Parlamentario Sumar, no cada formación de la coalición. El punto 7 habla de planes de contingencia para una salida, no de irse de un día para otro. Es una proposición no de ley: no obliga al Gobierno y no es una ley.",
    distractors: ["psoe", "pp", "vox"],
  },
  {
    id: "anonimato",
    family: "expresion",
    type: "guess",
    topic: "Redes sociales",
    text: "Proteger el anonimato en redes cuando se usa para expresarse dentro de la Constitución y del Código Penal.",
    party: "vox",
    why: "Es el punto 8 de una proposición no de ley de Vox. El anonimato que pide tiene ese límite. Una proposición no de ley no obliga al Gobierno.",
    distractors: ["pp", "sumar", "psoe"],
  },
  {
    id: "odio",
    family: "expresion",
    type: "guess",
    topic: "Delito de odio",
    text: "Limitar el delito de odio a la inducción o la apología de actos criminales, cambiando el artículo 510 del Código Penal.",
    party: "vox",
    why: "Es el punto 9 de la misma proposición no de ley. No es borrar todos los delitos relacionados con lo que se dice. Una proposición no de ley no obliga al Gobierno.",
    distractors: ["pp", "psoe", "sumar"],
  },
  {
    id: "ilegalizar",
    type: "guess",
    topic: "Partidos",
    text: "Consultar a los españoles sobre ilegalizar los partidos independentistas, y promover esa ilegalización.",
    party: "vox",
    why: "Es la medida 21 de Vox. Primero, una consulta por el artículo 92 de la Constitución. Después, quitar subvenciones e ilegalizar partidos, asociaciones y ONG que persigan destruir la unidad territorial y la soberanía nacional.",
    distractors: ["pp", "psoe", "erc"],
  },
];

const AGREE_CONGRESO = [
  {
    id: "vivienda-congreso",
    type: "agree",
    topic: "Vivienda en el Congreso",
    originLabel: "Proposiciones de ley del Congreso, XV legislatura. Ninguna de estas es una ley ya aprobada.",
    prompt: "¿Con cuál estás más de acuerdo?",
    options: [
      {
        party: "psoe",
        text: "Poner el IVA del 21% a los alquileres de corta duración en municipios de más de 10.000 habitantes.",
        cite: "PSOE · BOCG 30 may 2025",
        note: "Proposición de ley del Grupo Socialista, publicada el 30 de mayo de 2025. No es una ley aprobada.",
      },
      {
        party: "psoe",
        text: "Un impuesto del 100 % de la base imponible para quien compre un inmueble en España sin residir en la UE, pudiendo descontar el impuesto de transmisiones ya pagado.",
        cite: "PSOE · BOCG 30 may 2025",
        note: "Está en el artículo 4 de la misma proposición. El criterio es residir fuera de la UE, no simplemente ser extranjero. No es una ley aprobada.",
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

const LANES = {
  "vivienda-alquiler": "bolsillo",
  "vivienda-compra": "bolsillo",
  turisticos: "bolsillo",
  "vivienda-congreso": "bolsillo",
  nuclear: "bolsillo",
  fortunas: "bolsillo",
  sucesiones: "bolsillo",
  smi: "bolsillo",
  jornada: "bolsillo",
  pensiones: "bolsillo",
  dental: "bolsillo",
  coches: "bolsillo",
  educacion: "bolsillo",
  inmigracion: "bolsillo",
  ocupacion: "bolsillo",
  sanidad: "bolsillo",
  "sanidad-listas": "bolsillo",
  iva: "bolsillo",
  autonomos: "bolsillo",
  transporte: "bolsillo",
  herencia: "bolsillo",
  bono: "bolsillo",
  anticonceptivos: "bolsillo",
  "ceuta-ayudas": "bolsillo",
  "ceuta-cuotas": "bolsillo",
  menas: "bolsillo",
  "jornada-sumar": "bolsillo",
  avales: "bolsillo",
  selectividad: "bolsillo",
  "desalojo-24": "bolsillo",
  creditos: "bolsillo",
  sociedades: "bolsillo",
  "sucesiones-ley": "bolsillo",
  "nuclear-ley": "bolsillo",
  "temporada-causa": "bolsillo",
  "temporada-plazo": "bolsillo",
  proxenetismo: "derechos",
  injurias: "derechos",
  "referendum-int": "territorial",
  peaje: "territorial",
  "inmigra-medidas": "bolsillo",
  anonimato: "derechos",
  odio: "derechos",
  otan: "territorial",
  ilegalizar: "territorial",
  lgtbi: "derechos",
  aborto: "derechos",
  eutanasia: "derechos",
  cannabis: "derechos",
  toros: "derechos",
  monarquia: "derechos",
  vientres: "derechos",
  violencia: "derechos",
  catalunya: "territorial",
  lenguas: "territorial",
  deficit: "territorial",
  aeropuertos: "territorial",
};

const HOUSING_EXTRA = ["vivienda-compra", "turisticos", "vivienda-congreso", "temporada-causa", "temporada-plazo", "avales", "desalojo-24"];

function allRounds() {
  return [...AGREE, ...GUESS, ...AGREE_CONGRESO, ...GUESS_CONGRESO].map((round) => ({
    ...round,
    lane: LANES[round.id],
  }));
}

function takeRounds(pool, count, usedFamilies) {
  const available = pool.filter((round) => !round.family || !usedFamilies.has(round.family));
  const fresh = shuffle(available.filter((round) => !previousIds.has(round.id)));
  const repeated = shuffle(available.filter((round) => previousIds.has(round.id)));
  const picked = [];
  const seenFamilies = new Set();
  for (const round of [...fresh, ...repeated]) {
    if (picked.length >= count) break;
    if (round.family && seenFamilies.has(round.family)) continue;
    picked.push(cloneRound(round));
    if (round.family) {
      seenFamilies.add(round.family);
      usedFamilies.add(round.family);
    }
  }
  return picked;
}

function freshGame() {
  const pool = allRounds();
  const usedFamilies = new Set();
  const byLane = (lane, skip = []) => pool.filter((round) => round.lane === lane && !skip.includes(round.id));
  const housing = [
    ...takeRounds(pool.filter((round) => round.id === "vivienda-alquiler"), 1, usedFamilies),
    ...takeRounds(pool.filter((round) => HOUSING_EXTRA.includes(round.id)), 1, usedFamilies),
  ];
  const bolsillo = takeRounds(
    byLane(
      "bolsillo",
      housing.map((round) => round.id)
    ),
    4,
    usedFamilies
  );
  const derechos = takeRounds(byLane("derechos"), 2, usedFamilies);
  const territorial = takeRounds(byLane("territorial"), 1, usedFamilies);
  const rounds = shuffle([...housing, ...bolsillo, ...derechos, ...territorial]);
  previousIds = new Set(rounds.map((round) => round.id));
  state = {
    rounds,
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

function coalitionMembers(id) {
  if (id === "psoe-sumar") return ["psoe", "sumar"];
  if (id === "psoe-junts") return ["psoe", "junts"];
  return null;
}

function partyMark(id) {
  const members = coalitionMembers(id);
  if (members) {
    return `<span class="coalition-logos">${members.map((member) => partyMark(member)).join("")}</span>`;
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
  const pills = Object.entries(PARTIES).filter(([id]) => !["psoe-sumar", "grupos-alquiler", "psoe-junts"].includes(id))
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
    <p class="lead">Nueve preguntas, y cada partida salen otras. Seis van de vivienda, trabajo, impuestos o servicios. Dos, de derechos. Una, de cómo se organiza el país.</p>
    <section class="panel">
      <p class="help">En unas eliges la propuesta que más te gusta y después te decimos de qué partido era. En otras te damos una frase y adivinas el partido.</p>
      <div class="parties">${pills}</div>
      <button class="primary" data-action="start">Empezar</button>
    </section>
    <p class="sources">Programas electorales del 23 de julio de 2023, publicados por RTVE, y textos del Boletín Oficial de las Cortes Generales de la XV legislatura. Las frases están resumidas. Una proposición de ley no es una ley aprobada. Una proposición no de ley no obliga al Gobierno.</p>
  `;
}

function questionView() {
  const round = state.rounds[state.index];
  const total = state.rounds.length;
  const width = ((state.index + (state.phase === "feedback" ? 1 : 0)) / total) * 100;
  const body = round.type === "agree" ? agreeBody(round) : guessBody(round);
  const feedback = state.phase === "feedback" ? feedbackView(round) : "";
  const mode = round.type === "agree" ? "Elige" : "Adivina";

  return `
    <div class="topbar">
      <span>Pregunta ${state.index + 1} de ${total}</span>
      <span>${mode}</span>
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
      const logos = coalitionMembers(id) ? partyMark(id) : "";
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

function signed(count) {
  return count > 0 ? `+${count}` : `${count}`;
}

function resultView() {
  const ranking = Object.entries(state.agrees)
    .filter(([id, count]) => !["psoe-sumar", "grupos-alquiler", "psoe-junts"].includes(id) || count !== 0)
    .sort((a, b) => b[1] - a[1] || partyLabel(a[0]).localeCompare(partyLabel(b[0]), "es"));
  const top = ranking[0][1];
  const winners = ranking.filter(([, count]) => count === top).map(([id]) => id);
  const correct = state.guesses.filter((guess) => guess.correct).length;
  const guessTotal = state.guesses.length;
  const names = joinNames(winners);
  const title =
    top > 0
      ? winners.length === 1
        ? `Has coincidido más con ${names}`
        : `Has empatado entre ${names}`
      : top === 0
        ? "Ningún partido queda en positivo"
        : winners.length === 1
          ? `La puntuación menos baja es la de ${names}`
          : `La puntuación menos baja está empatada entre ${names}`;
  const peak = Math.max(...ranking.map(([, count]) => Math.abs(count)), 1);

  const bars = ranking
    .map(([id, count]) => {
      const width = (Math.abs(count) / peak) * 100;
      return `
        <div class="bar-row">
          <strong>${partyLabel(id)}</strong>
          <div class="bar"><i class="${count < 0 ? "neg" : ""}" style="width:${width}%;background:${PARTIES[id].color}"></i></div>
          <span class="score-num ${count > 0 ? "pos" : count < 0 ? "neg" : ""}">${signed(count)}</span>
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
    <section class="panel">
      <h2>Con qué partido coincides</h2>
      <p class="help">Cada propuesta que eliges suma 1 al partido que la hizo.</p>
      <div class="bars">${bars}</div>
    </section>
    <section class="panel">
      <h2>Cuántas autorías has acertado</h2>
      <p class="score-party"><span class="party-name">${correct}/${guessTotal}</span></p>
      <ul class="review">${review}</ul>
      <div class="actions">
        <button class="primary" data-action="restart">Jugar otra vez</button>
      </div>
    </section>
    <p class="sources">Fuentes: programas electorales de 2023 publicados por RTVE, y el Boletín Oficial de las Cortes Generales de la XV legislatura. Una proposición de ley no es una ley aprobada. Una proposición no de ley no obliga al Gobierno. Una frase resumida no sustituye el texto oficial.</p>
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
