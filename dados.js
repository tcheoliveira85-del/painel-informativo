// ============================================================
// PAINEL EQUIPE D · PORTOCEL T32
// Arquivo de conteúdo — edite apenas este arquivo para atualizar o painel.
//
// COMO ATUALIZAR:
// 1. Abra este arquivo em qualquer editor (Bloco de Notas serve)
// 2. Altere os valores entre aspas
// 3. ATUALIZE o campo "last_updated" do bloco que você mexeu
//    Formato: "AAAA-MM-DDTHH:MM:SS-03:00"  (horário de Brasília)
//    Exemplo: "2026-05-14T07:30:00-03:00"
// 4. Salve e suba o arquivo (se estiver no GitHub Pages, faça commit)
//
// ============================================================

window.PAINEL_DATA = {

  // ---------- METADADOS GERAIS ----------
  meta: {
    titulo: "Painel Equipe D",
    subtitulo: "Portocel · Terminal 32",
    responsavel: "Thiago N. Oliveira",
    versao: "1.4",
    logo: "logoPort.png",
    mascote: {
      principal: "Mascote equipe D.png",
      recorte: "Mascote turma D.png",
      fundo: "Mascote.png"
    }
  },

  // ---------- DDS DO DIA (cadência: diária) ----------
  dds: {
    titulo: "Olhar treinado vê o que ainda não aconteceu",
    corpo: "Antes da movimentação, percorra mentalmente a trajetória da carga. A maior parte dos incidentes não nasce do erro de execução — nasce de um sinal sutil ignorado: um local mal sinalizado, uma distração, um piso desnivelado. Treine o olhar para o que ainda está por acontecer. Sua atenção é o primeiro EPI.",
    autor: "Equipe TST · Portocel",
    cadencia_dias: 1,
    last_updated: "2026-05-14T07:30:00-03:00"
  },

  // ---------- MÁQUINAS DISPONÍVEIS (cadência: diária) ----------
  // Spreaders e Jib Cranes: sem dados disponíveis no momento
  maquinas: {
    grupos: [
      { nome: "Empilhadeiras", total: 14, disponiveis: 5, obs: "5 em uso, 4 em stand-by e 5 em manutenção" }
    ],
    detalhes: {
      uso: ["T-3216 (Garfo)", "T-3203", "T-3202", "T-3201", "T-3212"],
      standby: ["T-3209", "T-3207", "T-3206", "T-3210"],
      manutencao: [
        { frota: "T-3208", motivo: "Pneus desgastados · necessário substituição" },
        { frota: "T-3211", motivo: "Pneus desgastados · necessário substituição" },
        { frota: "T-3213", motivo: "Baixa pressão de óleo / pneus desgastados · em tratativas" },
        { frota: "T-3214", motivo: "Vazamento de óleo hidráulico · em tratativas" },
        { frota: "T-3215", motivo: "Baixa pressão de óleo · em tratativas" }
      ]
    },
    fonte: "Escala de máquinas 15/05 + Matriz de status operacional",
    cadencia_dias: 1,
    last_updated: "2026-05-15T06:00:00-03:00"
  },

  // ---------- NAVIOS PROGRAMADOS (cadência: sob demanda — atualizar quando o line-up mudar) ----------
  navios: {
    items: [
      { navio: "CITRIODORA", tipo: "JIB", agencia: "WPS", eta: "22/05", berco: "T32", carga: "22.150", status: "previsto" }
    ],
    fonte: "Line-up",
    cadencia_dias: 7,
    last_updated: "2026-05-14T23:20:00-03:00"
  },

  // ---------- COMPOSIÇÕES FERROVIÁRIAS (cadência: sob demanda) ----------
  composicoes: {
    items: [
      { id: "L50", origem: "Carreg. 13/05 11:00", chegada: "16/05 13:00", vagoes: 64, produto: "RSP-EP · 6.144" },
      { id: "L46", origem: "Carreg. 18/05 04:00", chegada: "21/05 06:00", vagoes: 64, produto: "RSP-EP · 6.144" }
    ],
    fonte: "Composição de vagões · destino T32",
    cadencia_dias: 7,
    last_updated: "2026-05-14T23:00:00-03:00"
  },

  // ---------- ESTOQUE DO ARMAZÉM ----------
  estoque: {
    capacidade: 70000,
    atual: 30758,
    unidade: "tons",
    skus: [
      { nome: "RSP-EP", qtd: 14276, tons: 28552 },
      { nome: "RSP-PP", qtd: 1103, tons: 2206 }
    ],
    fonte: "Dashboard de estoque · Programação de vagões T32",
    cadencia_dias: 1,
    last_updated: "2026-05-15T07:00:00-03:00"
  },

  // ---------- FUNÇÕES DA EQUIPE D ----------
  equipe_funcoes: [
    { funcao: "Supervisor", nome: "Aline Aparecida Rodrigues Alves Teixeira" },
    { funcao: "Assistente Operacional", nome: "Thiago Nascimento de Oliveira" },
    { funcao: "Controlador Operacional", nome: "Edinaldo Francisco de Oliveira" },
    { funcao: "Controlador Operacional", nome: "Djalma Severino Melo de Sousa Junior" },
    { funcao: "Pórtico", nome: "Marcos Alves Rangel" },
    { funcao: "Pórtico", nome: "Flávio Eduardo de Castro Jaques" },
    { funcao: "Operador de Empilhadeira", nome: "Adilson Gomes de Lima" },
    { funcao: "Auxiliar Abastecedor", nome: "Lucas de Oliveira Lopes" },
    { funcao: "Auxiliar Abastecedor", nome: "Cristiano Pacheco de Almeida" },
    { funcao: "Auxiliar", nome: "Anderson Passos de Santos Silva" },
    { funcao: "Auxiliar", nome: "Bruno da Costa Damasceno" },
    { funcao: "Auxiliar", nome: "Marcio Augusto de Oliveira Santos" }
  ],

  // ---------- DNA · DE OLHO NA ÁREA (cadência: quinzenal) ----------
  dna: {
    periodo: "Maio/2026",
    previsto: {
      count: 12,
      sufixo: "colaboradores",
      destaques: [
        "Base prevista no registro DNA"
      ]
    },
    realizado: {
      count: 10,
      sufixo: "realizados",
      destaques: [
        "Registros concluídos no período"
      ]
    },
    performance: {
      count: "83%",
      sufixo: "performance",
      destaques: [
        "10 realizados de 12 previstos"
      ]
    },
    cadencia_dias: 15,
    last_updated: "2026-05-14T23:03:00-03:00"
  },

  // ---------- TREINAMENTOS (cadência: sob demanda) ----------
  // Sem programação de treinamentos no momento
  treinamentos: {
    items: [],
    cadencia_dias: 30,
    last_updated: "2026-05-14T07:00:00-03:00"
  },

  // ---------- SIMULADOS DE BRIGADA (cadência: mensal) ----------
  simulados: {
    items: [],
    cadencia_dias: 30,
    last_updated: "2026-05-14T23:10:00-03:00"
  },

  // ---------- FÉRIAS DO MÊS (cadência: mensal) ----------
  ferias: {
    mes_referencia: "Maio–Jun/2026",
    items: [
      { nome: "Adilson Gomes de Lima",      periodo: "03/05 a 01/06" },
      { nome: "Bruno da Costa Damasceno",   periodo: "03/05 a 01/06" }
    ],
    cadencia_dias: 30,
    last_updated: "2026-05-14T07:00:00-03:00"
  },

  // ---------- ANIVERSARIANTES DO MÊS (cadência: mensal) ----------
  // Dados não disponíveis no momento
  aniversariantes: {
    mes_referencia: "Maio/2026",
    items: [],
    cadencia_dias: 30,
    last_updated: "2026-05-14T07:00:00-03:00"
  },

  // ---------- CAMPANHA DO MÊS (cadência: mensal) ----------
  campanha_mes: {
    titulo: "Comunicado Portocel: Energia elétrica",
    chamada: "Use com inteligência",
    descricao: "Desligue luzes e equipamentos ao sair de salas. Use luz natural sempre que possível.",
    imagem: "Comunicados Portocel2.jpg",
    cadencia_dias: 30,
    last_updated: "2026-05-14T21:03:00-03:00"
  },

  // ---------- COMUNICADOS PORTOCEL (cadência: esporádica — sem alerta de atraso) ----------
  comunicados: {
    items: [],
    fonte: "Comunicados Portocel",
    imagens: [
      {
        titulo: "Crenças transformam estratégia em atitude",
        descricao: "Material do programa Dedicação Carrega o Mundo.",
        arquivo: "Comunicados Portocel.jpg"
      },
      {
        titulo: "Hábitos saudáveis que transformam",
        descricao: "Conteúdo de saúde e bem-estar para compartilhar com a equipe.",
        arquivo: "Comunicados Portocel1.jpg"
      }
    ],
    cadencia_dias: null,
    last_updated: "2026-05-14T21:04:00-03:00"
  },

  // ---------- CITAÇÃO / FECHAMENTO ----------
  citacao: {
    texto: "Seja obcecado! O morno nunca fez história.",
    autor: "Equipe D",
    cadencia_dias: null,
    last_updated: "2026-05-14T23:20:00-03:00"
  }
};
