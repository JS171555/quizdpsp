<div align="center">
  <img src="assets/0004.png" alt="Logo Quiz DPSP" width="160" />
</div>

# Quiz DPSP

<p align="center">
  <strong>Aplicação web interativa para apresentar, de forma leve e gamificada, os principais conceitos da cultura DPSP.</strong>
</p>

## Visão geral

O Quiz DPSP é uma experiência educativa e dinâmica pensada para reforçar os valores, princípios e conceitos da cultura organizacional da DPSP. A proposta combina aprendizagem, engajamento e feedback imediato em uma interface moderna, com foco em acessibilidade, usabilidade e estilo mobile-first.

A aplicação transforma conteúdos institucionais em um jogo de perguntas e respostas, incentivando a reflexão, a memorização e a revisão dos temas mais importantes de forma divertida.

## Destaques

- Quiz de múltipla escolha com perguntas sobre cultura DPSP
- Feedback visual imediato após cada resposta
- Barra de progresso e acompanhamento da jornada
- Pontuação final com classificação por nível
- Revisão das respostas e explicações
- Interface responsiva e visualmente moderna
- Uso simples sem necessidade de build ou dependências locais

## Stack tecnológica

- HTML5
- CSS3
- JavaScript Vanilla
- Tailwind CSS (via CDN)
- Animate.css
- Font Awesome

## Estrutura do projeto

```text
quizdpsp/
├── assets/                 # Imagens e animações do projeto
├── css/
│   └── style.css          # Estilos personalizados
├── js/
│   └── script.js          # Lógica do quiz, perguntas e interações
├── index.html             # Estrutura principal da aplicação
├── README.md              # Documentação do projeto
└── .gitignore             # Arquivos ignorados pelo Git (se aplicável)
```

## Como executar

### Opção 1: abrir diretamente no navegador

Basta abrir o arquivo `index.html` em um navegador moderno.

### Opção 2: executar via servidor local

Se preferir uma execução mais próxima do ambiente web, rode:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Como funciona

1. A tela inicial apresenta o projeto e o botão de início.
2. O usuário responde uma série de perguntas de múltipla escolha.
3. A aplicação valida a resposta e exibe feedback imediato.
4. Ao final, o sistema calcula a pontuação e apresenta:
   - nível alcançado
   - revisão das respostas
   - mensagem de classificação
5. O fluxo final pode incluir ação de resgate simbólico do prêmio/ badge.

## Fluxo de uso

- Início do quiz
- Resposta de cada questão
- Validação com feedback educativo
- Progressão sequencial
- Resultado final com revisão

## Regras de negócio do quiz

- Cada pergunta possui uma alternativa correta.
- A pontuação é calculada por questão respondida corretamente.
- O sistema mostra feedback positivo ou corretivo conforme o desempenho.
- O resultado final classifica o participante em diferentes níveis de entendimento da cultura DPSP.

## Personalização

O projeto é simples de adaptar para outras campanhas, treinamentos ou conteúdos institucionais. Você pode:

- alterar as perguntas em `js/script.js`
- modificar o estilo em `css/style.css`
- trocar imagens e elementos visuais em `assets/`
- ajustar textos, cores e mensagens da interface em `index.html`

## Boas práticas aplicadas

- Layout responsivo para dispositivos móveis
- Feedback visual para engajamento do usuário
- Separação de responsabilidades entre HTML, CSS e JavaScript
- Código estruturado para facilitar manutenção e evolução
- Interface visual intuitiva sem dependência de complexos frameworks

## Objetivo do projeto

Este projeto foi desenvolvido para tornar o aprendizado da cultura DPSP mais acessível, memorable e envolvente, promovendo a construção de conhecimento por meio de uma experiência gamificada e interativa.

## Contribuição

Contribuições são bem-vindas. Para propor melhorias:

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Realize as alterações
4. Abra um pull request com uma descrição clara do objetivo da melhoria

## Observações

- A aplicação depende de links externos para Tailwind CSS, Font Awesome e Animate.css via CDN.
- Para uso offline completo, será necessário ajustar os carregamentos para versões locais dos assets.

## Status do projeto

Status: em desenvolvimento / em uso interno

## Autor

Projeto desenvolvido por [JS171555](https://github.com/JS171555).

---

Se quiser, posso também criar uma segunda versão do README com foco em:
- apresentação mais comercial para portfólio
- README técnico mais detalhado
- README em inglês
- README com badges, screenshots e seções de roadmap
