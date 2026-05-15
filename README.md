# Painel Equipe D - Portocel T32

Painel operacional estático da Equipe D Portocel T32, feito em HTML, CSS e JavaScript puro para consulta rápida no turno.

O painel reúne em uma única tela informações de DDS, máquinas disponíveis, campanha do mês, navios programados, composições ferroviárias, estoque do armazém, treinamentos e simulados, DNA - De Olho na Área, férias, aniversariantes, comunicados internos e frase de fechamento.

A proposta é manter os principais dados operacionais sempre visíveis, com atualização simples por arquivo, sem backend, sem banco de dados e com suporte a instalação como PWA.

---

## Estrutura do projeto

```text
painel/
├── index.html              # Estrutura visual e renderização do painel
├── dados.js                # Conteúdo e dados operacionais do painel
├── manifest.json           # Configuração PWA
├── service-worker.js       # Cache local/offline dos arquivos
├── logoPort.png            # Símbolo da Portocel usado no cabeçalho
├── Forklift icon.png       # Ícone de máquinas/empilhadeiras
├── vessel icon.png         # Ícone de navios
├── train icon.png          # Ícone de composições ferroviárias
├── DNA icon.png            # Ícone do bloco DNA
├── Comunicados Portocel*.jpg
├── Mascote*.png
├── *.pdf / *.png / *.jpeg  # Arquivos de apoio usados como fonte de dados
└── README.md
```

Regra principal: para atualizar o conteúdo do painel, edite preferencialmente apenas o arquivo `dados.js`.

Os PDFs, imagens e prints da pasta servem como fonte de informação. Eles não precisam aparecer como anexos no painel, exceto quando forem imagens usadas diretamente, como mascote, logo, ícones ou Comunicados Portocel.

---

## Blocos do painel

| Bloco | Finalidade |
|---|---|
| DDS | Mensagem diária de segurança do turno |
| Máquinas Disponíveis | Status da frota, equipamentos em uso, stand-by e manutenção |
| Campanha do Mês | Destaque visual de campanha/comunicado Portocel |
| Navios Programados | Line-up atual, terminal, tipo, agência, ETA e volume |
| Composições Ferroviárias | Prefixo, origem, chegada, vagões e produto programado |
| Estoque do Armazém | Estoque atual, saldo, entrada programada e projeção |
| Treinamentos e Simulados | Convocações e exercícios do período no mesmo card |
| DNA - De Olho na Área | Indicadores previstos, realizados e performance |
| Pessoas | Férias e aniversariantes, com função quando disponível |
| Comunicados | Materiais internos Portocel usados como apoio |
| Citação | Frase de fechamento do painel |

---

## Como atualizar os dados

1. Abra o arquivo `dados.js`.
2. Encontre o bloco correspondente à informação que mudou.
3. Altere os valores entre aspas ou números.
4. Atualize o campo `last_updated` do bloco alterado.
5. Salve o arquivo.
6. Publique a alteração no GitHub.

Formato do `last_updated`:

```javascript
last_updated: "2026-05-15T07:30:00-03:00"
```

Use sempre o horário de Brasília (`-03:00`).

---

## Estoque do armazém

O bloco `estoque` fica em `dados.js`.

Capacidade padrão considerada para o armazém:

```javascript
capacidade: 70000
```

O painel calcula automaticamente:

- estoque atual;
- saldo atual;
- entrada programada com base nas composições ferroviárias;
- estoque projetado;
- saldo projetado;
- percentual de ocupação.

A entrada programada é lida a partir do campo `produto` das composições. Exemplo:

```javascript
{ id: "L50", produto: "RSP-EP · 6.144" }
```

Nesse caso, o painel considera `6.144 tons` como entrada programada.

---

## Funções da equipe

As funções da Equipe D ficam no bloco `equipe_funcoes` em `dados.js`.

Quando uma pessoa aparece em férias ou aniversariante, o painel procura o nome nessa base e mostra a função automaticamente.

Exemplo:

```javascript
{ funcao: "Operador de Empilhadeira", nome: "Adilson Gomes de Lima" }
```

Se o nome estiver escrito de forma diferente entre os blocos, a função pode não aparecer. Para evitar isso, mantenha o mesmo nome usado em `equipe_funcoes`.

---

## Navios e composições

No bloco de navios:

- `tipo` representa o tipo de guindaste/equipamento, como `JIB`;
- `agencia` representa a agência, como `WPS`;
- `berco` representa o terminal/berço, como `T32`.

No bloco de composições, use apenas o prefixo após a barra quando o documento vier com dois prefixos.

Exemplo:

```text
L49/L50 -> usar L50
```

---

## Ícones e imagens

Os ícones principais são arquivos locais:

- `Forklift icon.png`
- `vessel icon.png`
- `train icon.png`
- `DNA icon.png`

Ao trocar qualquer ícone ou imagem usada pelo painel:

1. mantenha o arquivo dentro da pasta `painel`;
2. confira se o nome no `index.html` ou `dados.js` está igual ao nome do arquivo;
3. se necessário, atualize o cache no `service-worker.js`.

---

## Publicação no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos da pasta `painel`.
3. Vá em **Settings > Pages**.
4. Em **Source**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`.
6. Salve e aguarde o GitHub gerar o link.

O endereço ficará parecido com:

```text
https://seuusuario.github.io/painel-equipe-d/
```

---

## Atualização depois de publicado

Para atualizar o painel no GitHub:

1. Abra o repositório.
2. Clique em `dados.js`.
3. Clique no ícone de edição.
4. Altere os dados necessários.
5. Faça o commit.
6. Aguarde o GitHub Pages republicar.

Se alguém continuar vendo uma versão antiga, recarregue a página. Em mudanças maiores de HTML, CSS, imagens ou cache, atualize também o nome do cache em `service-worker.js`.

Exemplo:

```javascript
const CACHE_NAME = "painel-equipe-d-v1.10";
```

---

## Rodar localmente

Dentro da pasta do projeto:

```powershell
cd "C:\Users\Windows 11\Downloads\painel-equipe-d\painel"
python -m http.server 8787
```

Depois acesse:

```text
http://127.0.0.1:8787/index.html
```

---

## Privacidade

GitHub Pages público deixa o conteúdo visível para qualquer pessoa com o link.

Antes de publicar, confirme se os nomes, funções, dados operacionais, volumes e documentos podem ser exibidos publicamente. Caso exista restrição interna, use um repositório privado com solução de hospedagem apropriada ou publique o painel em ambiente interno.

---

## Stack

- HTML
- CSS
- JavaScript puro
- PWA com `manifest.json` e `service-worker.js`
- Sem backend
- Sem banco de dados
- Sem etapa de build

---

**Organização:** Thiago Nascimento de Oliveira - Equipe D - Operações Portocel T32
