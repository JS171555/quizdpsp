# Quiz DPSP

<div align="center">
  <img src="assets/0004.png" alt="Logo Quiz DPSP" width="180" />
</div>

Aplicação web interativa desenvolvida para apresentar, de forma leve e gamificada, os principais conceitos da cultura DPSP.

O projeto transforma conteúdo institucional em uma experiência de quiz com perguntas de múltipla escolha, feedback imediato, progresso visual, pontuação, classificação e revisão das respostas.

## Sobre o projeto

A aplicação foi desenvolvida com foco em uma experiência semelhante à de um aplicativo mobile, combinando interface compacta, animações, microinterações e um fluxo intuitivo de navegação.

Durante a jornada, o usuário percorre as etapas de:

1. tela inicial;
2. início do quiz;
3. leitura da pergunta;
4. seleção da alternativa;
5. validação da resposta;
6. feedback imediato;
7. avanço para a próxima questão;
8. cálculo da pontuação final;
9. classificação do desempenho;
10. revisão das respostas.

## Funcionalidades

- Quiz com 10 perguntas
- Perguntas de múltipla escolha
- Validação automática das respostas
- Feedback visual para acertos e erros
- Barra de progresso dinâmica
- Navegação entre perguntas
- Sistema de pontuação
- Classificação por desempenho
- Tela de resultado final
- Revisão das respostas
- Modal de alerta
- Animações e microinterações
- Interface responsiva
- Layout inspirado em aplicativos mobile
- Assets gráficos personalizados

## Stack tecnológica

| Tecnologia | Utilização |
| --- | --- |
| HTML5 | Estrutura e organização da interface |
| CSS3 | Estilos, responsividade e animações |
| JavaScript | Lógica do quiz, estado, perguntas e pontuação |
| Tailwind CSS | Construção rápida da interface |
| Animate.css | Animações visuais |
| Font Awesome | Ícones |
| Google Fonts | Tipografia |
| GIF / PNG | Elementos visuais e feedback gráfico |

## Estrutura do projeto

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
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
├── README.md
└── .gitignore
```

### `index.html`

Responsável pela estrutura principal da aplicação, incluindo:

- tela inicial;
- painel do quiz;
- área de feedback;
- tela de resultado;
- barra de progresso;
- navegação entre perguntas.

### `css/style.css`

Contém os estilos personalizados que complementam a interface, incluindo:

- sombras e bordas;
- transições;
- animações;
- responsividade;
- estilos de feedback;
- scroll customizado;
- efeitos visuais de destaque.

### `js/script.js`

Arquivo central da lógica da aplicação. Nele ficam:

- armazenamento das perguntas;
- controle da questão atual;
- registro das respostas do usuário;
- renderização das alternativas;
- validação das respostas;
- cálculo da pontuação;
- exibição de feedback;
- controle de fluxo do quiz;
- finalização e classificação do usuário.

## Banco de perguntas

As perguntas são armazenadas diretamente no JavaScript em um array de objetos. Cada item contém:

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
  feedbackAcerto: "Resposta correta!",
  feedbackErro: "Resposta incorreta."
}
```

### Campos principais

- `q`: pergunta;
- `a`: alternativas;
- `c`: índice da resposta correta;
- `feedbackAcerto`: mensagem exibida no acerto;
- `feedbackErro`: mensagem exibida no erro.

Esse formato facilita a manutenção e permite expandir o conteúdo do quiz sem alterar a estrutura da interface.

## Sistema de pontuação

Cada questão vale 10 pontos e a aplicação compara a resposta selecionada com o índice da alternativa correta.

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

Com 10 perguntas, a nota máxima é:

- 100 pontos

## Classificação

| Pontuação | Classificação |
| ---: | --- |
| 90–100 | Guardião da Cultura |
| 70–89 | Embaixador da Cultura |
| 50–69 | Em Desenvolvimento |
| 0–49 | Precisa Evoluir |

## Como executar

O projeto é uma aplicação front-end estática, então não exige backend nem banco de dados.

### 1. Clone o repositório

```bash
git clone https://github.com/JS171555/quizdpsp.git
```

### 2. Acesse a pasta do projeto

```bash
cd quizdpsp
```

### 3. Execute a aplicação

Abra o arquivo `index.html` diretamente no navegador ou utilize a extensão Live Server no VS Code para uma melhor experiência durante o desenvolvimento.

## Dependências externas

O projeto utiliza recursos via CDN, incluindo:

- Tailwind CSS
- Animate.css
- Font Awesome
- Google Fonts

Portanto, é recomendável ter conexão com a internet na primeira execução para que esses recursos sejam carregados corretamente.

## Status do projeto

Status: concluído

O fluxo principal da aplicação está implementado com sucesso, incluindo:

- perguntas;
- respostas;
- validação;
- feedback;
- progresso;
- pontuação;
- classificação;
- resultado final.

## Objetivo do projeto

O projeto foi criado como uma experiência prática de desenvolvimento front-end, unindo HTML, CSS e JavaScript para transformar conteúdo corporativo em uma interface interativa, visualmente atrativa e fácil de compreender.

Além disso, o projeto demonstra uma evolução importante na organização do código, separando responsabilidades entre:

```text
HTML → Estrutura
CSS  → Apresentação
JS   → Comportamento
```

## Possíveis evoluções

### Melhorias de front-end

- [ ] separar as perguntas em um arquivo JSON;
- [ ] embaralhar as perguntas;
- [ ] embaralhar as alternativas;
- [ ] permitir configurar a quantidade de perguntas;
- [ ] melhorar acessibilidade e navegação por teclado;
- [ ] otimizar carregamento de assets;
- [ ] adicionar testes automatizados para a lógica do quiz.

### Persistência e backend

- [ ] salvar resultados em localStorage;
- [ ] criar API para armazenamento de resultados;
- [ ] integrar banco de dados;
- [ ] criar identificação dos participantes;
- [ ] criar ranking;
- [ ] criar painel administrativo;
- [ ] adicionar métricas de desempenho.

## Autor

**Júnior Santos**

Desenvolvedor Web

- [GitHub](https://github.com/JS171555)
- [Repositório do projeto](https://github.com/JS171555/quizdpsp)

---

Feito com foco em experiência, clareza visual e aprendizado prático em desenvolvimento web.
