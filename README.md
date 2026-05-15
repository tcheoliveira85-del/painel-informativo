# Painel Equipe D — Portocel T32

Painel vivo de comunicação operacional da Equipe D. Conteúdo é atualizado por bloco, com a frequência natural de cada informação. Sem cadência forçada, sem edições "perdidas".

---

## Arquitetura

```
painel/
├── index.html      ← Estrutura visual e renderização (NÃO EDITAR)
├── dados.js        ← TODO o conteúdo do painel (este é o único arquivo que você edita)
├── manifest.json   ← Configuração de instalação do PWA
├── service-worker.js ← Cache offline dos arquivos locais
├── *.pdf / *.jpg / *.png ← Arquivos de apoio usados para alimentar os dados
└── README.md       ← Este arquivo
```

**Regra de ouro:** para atualizar conteúdo, mexer apenas em `dados.js`. O `index.html` lê tudo de lá automaticamente. PDFs e prints da pasta servem como fonte de conferência; eles não precisam aparecer como anexos no painel.

---

## Como atualizar o conteúdo

1. Abra `dados.js` em qualquer editor (Bloco de Notas, VS Code, Notepad++).
2. Localize o bloco que mudou (cada bloco está comentado e tem cabeçalho claro).
3. Altere os valores entre aspas.
4. **Atualize o campo `last_updated`** do bloco que você mexeu.

Formato do `last_updated`:

```
"AAAA-MM-DDTHH:MM:SS-03:00"
```

Exemplo prático para `14/05/2026 às 07:30 da manhã`:

```javascript
last_updated: "2026-05-14T07:30:00-03:00"
```

5. Salve o arquivo.
6. Suba para o GitHub (ou copie para o servidor onde está hospedado).

### Como usar PDFs e imagens de apoio

1. Abra o PDF, print ou imagem recebido.
2. Copie as informações relevantes para o bloco correto em `dados.js`.
3. Atualize o `last_updated` do bloco alterado.
4. Só referencie imagem no `dados.js` quando ela realmente deve aparecer no painel, como o mascote ou os Comunicados Portocel.

---

## Indicador "Última Atualização" — como funciona

Cada bloco tem:

- `cadencia_dias`: com que frequência **deveria** ser atualizado
- `last_updated`: quando foi atualizado pela última vez

O painel calcula sozinho a cor do indicador:

| Bolinha | Significado |
|---|---|
| 🟢 verde  | Dentro do prazo |
| 🟡 amarelo | Atraso leve (1× a 2× a cadência) |
| 🔴 vermelho | Crítico — passou de 2× a cadência (pulsa pra chamar atenção) |

Para blocos esporádicos (comunicados, citação), use `cadencia_dias: null` — não há alerta de atraso.

### Cadências configuradas

| Bloco | Cadência | Como atualizar |
|---|---|---|
| DDS | Diária | Logo no início do turno |
| Máquinas | Diária | Print do grupo WhatsApp |
| Navios | Sob demanda (alerta após 7 dias) | Quando o line-up mudar |
| Composições | Sob demanda (alerta após 7 dias) | Quando houver previsão FIPS |
| DNA | Quinzenal | Fechamento da quinzena |
| Treinamentos | Sob demanda (alerta após 30 dias) | Convocação do RH |
| Simulados | Mensal | Calendário SESMT |
| Férias | Mensal | Início do mês |
| Aniversariantes | Mensal | Início do mês |
| Campanha do mês | Mensal | Virada do mês |
| Comunicados | Esporádico | Quando chegam |

---

## Como hospedar no GitHub Pages (gratuito)

### Passo 1 — Criar a conta GitHub (se ainda não tem)

Acesse https://github.com/signup e crie sua conta.

### Passo 2 — Criar o repositório

1. Clique em "+" no topo direito → "New repository".
2. Nome sugerido: `painel-equipe-d`
3. Marque **Public**.
4. Marque "Add a README file".
5. Clique em "Create repository".

### Passo 3 — Subir os arquivos

1. No repositório, clique em "Add file" → "Upload files".
2. Arraste os arquivos usados pelo site: `index.html`, `dados.js`, `manifest.json`, `service-worker.js`, mascote e imagens dos Comunicados Portocel.
3. Embaixo, mensagem: `Versão inicial do painel`.
4. Clique em "Commit changes".

### Passo 4 — Ativar o GitHub Pages

1. No repositório, vá em **Settings** (engrenagem no topo).
2. Menu lateral: **Pages**.
3. Em "Source", selecione **Deploy from a branch**.
4. Branch: **main** / pasta: **/ (root)**.
5. Clique em "Save".
6. Aguarde 1–2 minutos. O endereço aparece no topo: `https://SEUUSUARIO.github.io/painel-equipe-d/`.

### Passo 5 — Distribuir para a equipe

- Copie o link e gere um QR Code (https://www.qr-code-generator.com/ — gratuito).
- Imprima o QR e cole no posto de operação / mural da equipe.
- Compartilhe o link no grupo de WhatsApp da equipe.

---

## Atualizando após hospedado

Sempre que mudar `dados.js`:

1. Vá ao repositório no GitHub.
2. Clique no arquivo `dados.js`.
3. Clique no ícone de lápis ✏️ (canto superior direito).
4. Edite direto no navegador.
5. Embaixo, mensagem: `Atualização do DDS de 14/05` (ou o que for).
6. Clique em "Commit changes".
7. Em até 1 minuto o painel está atualizado para todos.

**Dica:** dá pra fazer isso pelo celular, em qualquer lugar.

---

## Privacidade — atenção

GitHub Pages é **público**. Antes de subir:

- ✅ **Não** coloque nomes completos sem autorização.
- ✅ **Não** coloque telefones, e-mails pessoais, fotos identificáveis sem consentimento.
- ✅ **Não** coloque dados sensíveis de operação (volumes confidenciais, contratos, contatos de cliente).
- ✅ DDS, indicadores genéricos, programações, campanhas: tudo OK.

**Alternativa privada:** GitHub Pages tem opção **Private** em planos pagos. Ou use a intranet da Portocel (peça apoio à TI).

---

## Manutenção

- O painel funciona offline depois de carregado uma vez em HTTPS ou `localhost`.
- Não usa banco de dados, não tem servidor.
- Funciona em qualquer celular, tablet, ou computador com navegador moderno.
- Fontes carregam do Google Fonts; se estiver offline, o navegador usa fontes do próprio sistema.
- Se trocar conteúdo e alguém continuar vendo versão antiga, recarregue a página. O `service-worker.js` também deve ter o nome do cache atualizado quando houver mudança grande.

---

## Roadmap sugerido (versões futuras)

Coisas que podem entrar quando o piloto provar valor:

- **v1.1** — Indicador de PTB médio diário (gráfico mini-sparkline)
- **v1.2** — Página específica de colaboração com Suzano (cliente)
- **v1.3** — Galeria de fotos da operação (rotativa)
- **v1.4** — Histórico de DDS (últimos 30)
- **v2.0** — Integração com Microsoft Graph (Outlook) para puxar line-up automaticamente

---

**Organizado por:** Thiago Nascimento de Oliveira · Equipe D · Operações
**Stack:** HTML + CSS + JavaScript puro · Sem dependências · Sem build
