# QUIZ — Sou Cultura DPSP

Aplicação web interativa desenvolvida para apresentar, de forma leve e gamificada, os principais conceitos da cultura DPSP.

O projeto transforma um conteúdo institucional em uma experiência de quiz com perguntas de múltipla escolha, feedback imediato, sistema de pontuação, classificação final e revisão das respostas.

## Visão geral

O fluxo da aplicação foi pensado para uma experiência semelhante a um aplicativo mobile:

1. Tela inicial com identidade visual da DPSP.
2. Início do quiz.
3. Exibição de 10 perguntas com progresso visual.
4. Seleção e validação das respostas.
5. Feedback imediato para acertos e erros.
6. Navegação entre perguntas.
7. Cálculo automático da pontuação.
8. Classificação de acordo com o desempenho.
9. Revisão completa das respostas.
10. Simulação de resgate de uma badge de participação.

## Funcionalidades

- Quiz com 10 perguntas.
- Sistema de múltipla escolha.
- Validação individual das respostas.
- Feedback visual para respostas corretas e incorretas.
- Barra de progresso dinâmica.
- Navegação para voltar às perguntas anteriores.
- Cálculo automático da pontuação.
- Sistema de classificação:
  - **90–100 pontos:** Guardião da Cultura
  - **70–89 pontos:** Embaixador da Cultura
  - **50–69 pontos:** Em Desenvolvimento
  - **0–49 pontos:** Precisa Evoluir
- Tela de resultado com revisão das respostas.
- Modal de confirmação para o resgate da badge.
- Interface responsiva e orientada para dispositivos móveis.
- Animações e microinterações para melhorar a experiência.
- Assets gráficos integrados ao projeto.

## Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| HTML5 | Estrutura da aplicação |
| CSS3 | Estilos personalizados e animações |
| JavaScript | Lógica do quiz e gerenciamento de estado |
| Tailwind CSS | Construção da interface |
| Animate.css | Animações de entrada |
| Font Awesome | Ícones da interface |
| Google Fonts / Inter | Tipografia |
| GIF / PNG | Elementos visuais e feedback |

## Arquitetura

O projeto possui uma estrutura simples e adequada para uma aplicação front-end estática:

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
└── index.html
```

A lógica atualmente está centralizada no `index.html`, incluindo:

- banco de perguntas;
- controle de estado;
- seleção de respostas;
- validação;
- pontuação;
- classificação;
- renderização da revisão;
- controle das telas;
- modal de resgate.

## Como executar

Como o projeto é uma aplicação front-end estática, não é necessário instalar dependências ou configurar um servidor backend.

### Execução local

Clone o repositório:

```bash
git clone https://github.com/JS171555/quizdpsp.git
```

Entre na pasta:

```bash
cd quizdpsp
```

Abra o arquivo:

```text
index.html
```

Também é possível utilizar uma extensão como **Live Server** no VS Code para executar a aplicação localmente.

## Como funciona a pontuação

Cada questão vale **10 pontos**.

A pontuação é calculada comparando a alternativa escolhida pelo usuário com o índice da resposta correta.

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

Isso permite uma pontuação máxima de **100 pontos**.

## Estrutura das perguntas

As perguntas são armazenadas em um array JavaScript, permitindo alterar ou adicionar questões sem precisar modificar a estrutura visual da aplicação.

Exemplo:

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

Cada pergunta possui:

- `q` — enunciado;
- `a` — alternativas;
- `c` — índice da resposta correta;
- `feedbackAcerto` — mensagem exibida quando o usuário acerta;
- `feedbackErro` — mensagem exibida quando o usuário erra.

## Experiência do usuário

A interface foi desenvolvida priorizando uma experiência rápida e intuitiva.

Alguns elementos utilizados:

- cards com cantos arredondados;
- gradientes;
- barra de progresso;
- feedback visual;
- animações;
- microinterações;
- hierarquia visual clara;
- layout compacto inspirado em interfaces mobile.

A aplicação também utiliza estados visuais diferentes para alternativas selecionadas, corretas e incorretas.

## Pontos de destaque técnico

Apesar de ser uma aplicação pequena e sem backend, o projeto demonstra conceitos importantes de desenvolvimento front-end:

- manipulação do DOM;
- gerenciamento de estado no JavaScript;
- renderização dinâmica de conteúdo;
- tratamento de eventos;
- validação de entrada;
- lógica condicional;
- cálculo de pontuação;
- controle de fluxo;
- criação de componentes visuais reutilizáveis através de classes;
- integração de bibliotecas externas via CDN;
- desenvolvimento de interface responsiva.

## Possíveis evoluções

O projeto possui uma base simples que pode ser expandida para uma aplicação mais completa.

### Próximas melhorias

- [ ] Separar HTML, CSS e JavaScript em arquivos independentes.
- [ ] Mover as perguntas para um arquivo JSON.
- [ ] Criar um sistema de configuração para quantidade de perguntas.
- [ ] Adicionar banco de perguntas aleatórias.
- [ ] Implementar embaralhamento das alternativas.
- [ ] Persistir resultados com `localStorage`.
- [ ] Criar ranking de participantes.
- [ ] Adicionar identificação do participante.
- [ ] Criar backend para armazenamento dos resultados.
- [ ] Gerar badge ou certificado automaticamente.
- [ ] Adicionar painel administrativo.
- [ ] Adicionar métricas de desempenho.
- [ ] Criar testes automatizados para a lógica do quiz.
- [ ] Melhorar acessibilidade e navegação por teclado.
- [ ] Otimizar o carregamento das bibliotecas externas.

## Status

**Concluído — versão funcional**

O projeto já possui o fluxo principal completo de quiz, pontuação, classificação e revisão de respostas.

## Objetivo do projeto

Este projeto foi desenvolvido como uma aplicação prática de front-end, combinando desenvolvimento de interfaces, JavaScript e experiência do usuário para transformar um conteúdo corporativo em uma experiência interativa.

---

## Autor

Junior santos

Desenvolvedor Web

[GitHub](https://github.com/JS171555?tab=repositories)
