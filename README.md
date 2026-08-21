# QUIZ — Sou Cultura DPSP

Aplicação web interativa desenvolvida para apresentar, de forma leve e gamificada, os principais conceitos da cultura DPSP.

O projeto transforma conteúdo institucional em uma experiência de quiz com perguntas de múltipla escolha, feedback imediato, progresso visual, pontuação, classificação e revisão das respostas.

## Visão geral

A aplicação foi desenvolvida com foco em uma experiência semelhante à de um aplicativo mobile, utilizando uma interface compacta, animações e interações visuais.

O fluxo principal é:

1. Tela inicial.
2. Início do quiz.
3. Exibição das perguntas.
4. Seleção de uma alternativa.
5. Validação da resposta.
6. Feedback imediato.
7. Avanço entre as questões.
8. Cálculo da pontuação.
9. Classificação final.
10. Revisão das respostas.

## Funcionalidades

- Quiz com 10 perguntas.
- Questões de múltipla escolha.
- Validação das respostas.
- Feedback visual para acertos e erros.
- Barra de progresso dinâmica.
- Navegação entre perguntas.
- Sistema automático de pontuação.
- Classificação baseada no desempenho.
- Tela de resultado.
- Revisão das respostas.
- Modal de alerta.
- Animações e microinterações.
- Interface responsiva.
- Layout inspirado em aplicações mobile.
- Assets gráficos personalizados.

## Tecnologias

| Tecnologia | Utilização |
|---|---|
| HTML5 | Estrutura da aplicação |
| CSS3 | Estilos personalizados, animações e responsividade |
| JavaScript | Lógica, estado, perguntas, pontuação e navegação |
| Tailwind CSS | Construção da interface |
| Animate.css | Animações |
| Font Awesome | Ícones |
| Google Fonts — Inter | Tipografia |
| GIF / PNG | Elementos visuais e feedback |

## Estrutura do projeto

O projeto utiliza uma estrutura separada por responsabilidade:

```text
quizdpsp/
├── assets/
│   ├── 0001.gif
│   ├── 0002.gif
│   ├── 0003.gif
│   ├── 0004.png
│   ├── 0005.gif
│   ├── 0006.gif
│   └── 0007.png
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── index.html
└── README.md
```

### `index.html`

Responsável pela estrutura e marcação da interface.

O HTML contém as principais telas da aplicação:

- tela inicial;
- tela do quiz;
- tela de resultado;
- área de perguntas e respostas;
- barra de progresso;
- área de feedback;
- elementos de navegação.

### `css/style.css`

Responsável pelos estilos que não dependem diretamente das classes utilitárias do Tailwind.

Inclui:

- sombras personalizadas;
- transições;
- animações;
- ajustes responsivos;
- estilos de feedback;
- scrollbar da revisão;
- animações de pulso;
- tratamento visual dos assets utilizados nas mensagens.

### `js/script.js`

Contém toda a lógica da aplicação.

Entre as principais responsabilidades estão:

- armazenamento das perguntas;
- controle da questão atual;
- armazenamento das respostas;
- renderização das alternativas;
- validação das respostas;
- cálculo da pontuação;
- exibição de feedback;
- controle da navegação;
- finalização do quiz;
- exibição dos resultados.

## Banco de perguntas

As perguntas são armazenadas diretamente no JavaScript através de um array de objetos.

Cada questão possui informações como:

```javascript
{
    q: "O que está no centro da cultura DPSP?",
    a: [
        "Crescimento financeiro",
        "Saúde em primeiro lugar",
        "Expansão da marca",
        "Tecnologia"
    ],
    c: 1,
    feedbackAcerto: "...",
    feedbackErro: "..."
}
```

Estrutura:

- `q` — pergunta;
- `a` — alternativas;
- `c` — índice da resposta correta;
- `feedbackAcerto` — mensagem apresentada quando o usuário acerta;
- `feedbackErro` — mensagem apresentada quando o usuário erra.

Essa estrutura facilita a manutenção e permite adicionar novas perguntas sem alterar a estrutura da interface.

## Sistema de pontuação

Cada questão possui valor de **10 pontos**.

A aplicação compara a alternativa selecionada pelo usuário com o índice da resposta correta.

```javascript
function computeScore() {
    let total = 0;

    userAnswers.forEach((ans, idx) => {
        if (ans === questions[idx].c) {
            total += 10;
        }
    });

    score = total;
    return total;
}
```

Com 10 perguntas, a pontuação máxima é de:

**100 pontos**

## Classificação

O desempenho do usuário é convertido em uma classificação final:

| Pontuação | Classificação |
|---:|---|
| 90–100 | Guardião da Cultura |
| 70–89 | Embaixador da Cultura |
| 50–69 | Em Desenvolvimento |
| 0–49 | Precisa Evoluir |

## Interface e experiência

A interface foi projetada para funcionar como uma experiência compacta e interativa.

Entre os elementos utilizados estão:

- cards com bordas arredondadas;
- gradientes;
- barra de progresso;
- feedback visual;
- animações;
- botões com estados interativos;
- hierarquia visual;
- layout adaptado para telas menores;
- elementos gráficos em GIF e PNG.

A aplicação também utiliza Tailwind CSS para acelerar a construção da interface e CSS próprio para comportamentos e animações específicas.

## Organização do JavaScript

A lógica principal está organizada em funções específicas para cada responsabilidade.

Entre elas:

```text
computeScore()
showFeedback()
renderQuestion()
validateCurrentAnswer()
finishQuiz()
closeAlert()
```

Essa separação permite que cada etapa do fluxo do quiz tenha uma responsabilidade clara.

## Como executar

O projeto é uma aplicação front-end estática e não necessita de backend ou banco de dados para funcionar.

### 1. Clone o repositório

```bash
git clone https://github.com/JS171555/quizdpsp.git
```

### 2. Entre na pasta

```bash
cd quizdpsp
```

### 3. Execute

Abra o arquivo:

```text
index.html
```

Também é recomendado utilizar o **Live Server** no VS Code para executar o projeto durante o desenvolvimento.

## Dependências externas

O projeto utiliza algumas bibliotecas através de CDN:

- Tailwind CSS
- Animate.css
- Font Awesome
- Google Fonts

Por esse motivo, é necessária uma conexão com a internet para carregar esses recursos quando a aplicação for executada dessa forma.

## Pontos técnicos demonstrados

Embora seja um projeto front-end relativamente compacto, ele demonstra conceitos importantes de desenvolvimento web:

- HTML semântico e estruturação de interface;
- CSS personalizado;
- CSS responsivo;
- utilização de classes utilitárias;
- manipulação do DOM;
- gerenciamento de estado no JavaScript;
- arrays e objetos;
- funções;
- eventos de interface;
- renderização dinâmica;
- validação de dados;
- lógica condicional;
- controle de fluxo;
- cálculo de pontuação;
- separação de responsabilidades entre HTML, CSS e JavaScript;
- integração de bibliotecas externas via CDN;
- construção de uma experiência interativa.

## Possíveis evoluções

A arquitetura atual permite evoluir o projeto para uma aplicação mais robusta.

### Melhorias de front-end

- [ ] Separar as perguntas em um arquivo JSON.
- [ ] Embaralhar as perguntas.
- [ ] Embaralhar as alternativas.
- [ ] Permitir configurar a quantidade de perguntas.
- [ ] Melhorar acessibilidade e navegação por teclado.
- [ ] Adicionar suporte a diferentes tamanhos de tela.
- [ ] Otimizar carregamento dos assets.
- [ ] Adicionar testes automatizados para a lógica do quiz.

### Persistência e backend

- [ ] Salvar resultados utilizando `localStorage`.
- [ ] Criar API para armazenamento dos resultados.
- [ ] Adicionar banco de dados.
- [ ] Criar identificação dos participantes.
- [ ] Criar ranking.
- [ ] Criar painel administrativo.
- [ ] Adicionar métricas de desempenho.

### Evolução da aplicação

Uma possível evolução seria transformar o projeto de uma aplicação estática em uma solução completa:

```text
Frontend
   ↓
API
   ↓
Backend
   ↓
Banco de dados
   ↓
Dashboard administrativo
```

Isso permitiria armazenar resultados, acompanhar desempenho dos participantes e gerar métricas sobre o quiz.

## Status

**Concluído — versão funcional**

O fluxo principal da aplicação está implementado, incluindo perguntas, respostas, validação, feedback, progresso, pontuação, classificação e resultado.

## Objetivo do projeto

O projeto foi desenvolvido como uma aplicação prática de desenvolvimento front-end, combinando **HTML, CSS e JavaScript** com princípios de UI/UX para transformar conteúdo corporativo em uma experiência interativa.

Além da aplicação em si, o projeto demonstra a evolução de uma estrutura inicialmente concentrada em um único arquivo para uma organização mais adequada, separando:

```text
HTML → Estrutura
CSS  → Apresentação
JS   → Comportamento
```

---

## Autor

**Junior santos**

Desenvolvedor Web

[GitHub](https://github.com/JS171555?tab=repositories)
