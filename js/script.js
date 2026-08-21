(function(){
           "use strict";
         
          const questions = [
         { 
         q: "O que está no centro da cultura DPSP?", 
         a: ["Crescimento financeiro", "Saúde em primeiro lugar", "Expansão da marca", "Tecnologia"], 
         c: 1, 
         feedbackAcerto: "<img src='assets/0001.gif' class='emoji-img' alt='✔️'> Perfeito! A saúde é o núcleo de todas as decisões.", 
         feedbackErro: "<img src='assets/0002.gif' class='emoji-img' alt='💡'> Atenção: O foco principal da DPSP vai além de negócios — é sobre saúde." 
         },
         { 
         q: "Qual NÃO é um principio?", 
         a: ["Disciplina e discernimento", "Processos e pessoas", "Competição interna", "Integração e protagonismo"], 
         c: 2, 
         feedbackAcerto: "<img src='assets/0001.gif' class='emoji-img' alt='✔️'> Boa! A DPSP valoriza colaboração, não competição interna. Os princípios fortalecem o trabalho em conjunto.", 
         feedbackErro: "<img src='assets/0002.gif' class='emoji-img' alt='💬'> Atenção! Os princípios da DPSP são baseados em colaboração e construção conjunta — competição interna vai contra essa cultura." 
         },
         { 
         q: "“Nosso negócio é relacionamento” quer dizer:", 
         a: ["Vendas rápidas", "Construir conexões", "Reduzir custos", "Automatizar tudo"], 
         c: 1, 
         feedbackAcerto: "<img src='assets/0001.gif' class='emoji-img' alt='✔️'> Relacionamento é a base da confiança.", 
         feedbackErro: "<img src='assets/0002.gif' class='emoji-img' alt='💬'> Dica: Não é só vender, é se conectar." 
         },
         { 
         q: "Segundo nossa cultura, tudo é...", 
         a: ["Venda", "Estrategia", "Atendimento", "Lucro"], 
         c: 2, 
         feedbackAcerto: "<img src='assets/0001.gif' class='emoji-img' alt='✔️'> Perfeito! Na DPSP, toda ação impacta o cliente — tudo é atendimento.", 
         feedbackErro: "<img src='assets/0002.gif' class='emoji-img' alt='💬'> Quase lá! Na DPSP, não importa a área: toda interação influencia a experiência do cliente." 
         },
         { 
         q: "Qual é a aspiração da DPSP?", 
         a: ["Ser líder em tecnologia", "Ser a primeira opção", "Ser a mais barata", "Expandir globalmente"], 
         c: 1, 
         feedbackAcerto: "<img src='assets/0001.gif' class='emoji-img' alt='✔️'> Ser lembrado primeiro é o objetivo.", 
         feedbackErro: "<img src='assets/0002.gif' class='emoji-img' alt='❌'> A aspiração é estar no topo da mente de todos." 
         },
         { 
         q: "Quem faz parte dessa aspiração?", 
         a: ["Só clientes", "Clientes, colaboradores e acionistas", "Só líderes", "Só investidores"], 
         c: 1, 
         feedbackAcerto: "<img src='assets/0001.gif' class='emoji-img' alt='✔️'> A cultura envolve todos.", 
         feedbackErro: "<img src='assets/0002.gif' class='emoji-img' alt='❌'> Pense em quem constrói o ecossistema." 
         },
         { 
         q: "Qual é um princípio da empresa?", 
         a: ["Competição interna", "Disciplina e discernimento", "Redução de equipe", "Foco só no lucro"], 
         c: 1, 
         feedbackAcerto: "<img src='assets/0001.gif' class='emoji-img' alt='✔️'> Base para decisões consistentes.", 
         feedbackErro: "<img src='assets/0002.gif' class='emoji-img' alt='❌'> Reflita sobre os valores fundamentais." 
         },
         { 
         q: "“Integração e protagonismo” significa:", 
         a: ["Trabalhar sozinho", "Esperar ordens", "Colaborar e agir", "Evitar riscos"], 
         c: 2, 
         feedbackAcerto: "<img src='assets/0001.gif' class='emoji-img' alt='✔️'> Aqui todos fazem acontecer.", 
         feedbackErro: "<img src='assets/0002.gif' class='emoji-img' alt='❌'> É sobre união e atitude." 
         },
         { 
         q: "O que define a atuação da DPSP?", 
         a: ["Vendas rápidas", "Mobilizar o ecossistema de saúde", "Cortar custos", "Abrir lojas"], 
         c: 1, 
         feedbackAcerto: "<img src='assets/0001.gif' class='emoji-img' alt='✔️'> Vai além da farmácia — é um ecossistema.", 
         feedbackErro: "<img src='assets/0002.gif' class='emoji-img' alt='❌'> A visão é mais ampla que o balcão." 
         },
         { 
         q: "Ética é:", 
         a: ["Opcional", "A base de tudo", "Só para líderes", "Teórica"], 
         c: 1, 
         feedbackAcerto: "<img src='assets/0001.gif' class='emoji-img' alt='✔️'> Sem ética, nada se sustenta.", 
         feedbackErro: "<img src='assets/0002.gif' class='emoji-img' alt='❌'> É o alicerce de todas as relações." 
         }
         ];
         
           const startScr = document.getElementById('startScreen');
           const quizScr = document.getElementById('quizScreen');
           const resultScr = document.getElementById('resultScreen');
           const questionEl = document.getElementById('question');
           const answersDiv = document.getElementById('answers');
           const progressText = document.getElementById('progressText');
           const progressBar = document.getElementById('progressBar');
           const nextBtn = document.getElementById('nextBtn');
           const feedbackMsg = document.getElementById('feedbackMessage');
           const levelMsg = document.getElementById('levelMessage');
           const scoreDisplay = document.getElementById('scoreDisplay');
           const reviewEl = document.getElementById('review');
         
           let currentIndex = 0;
           let userAnswers = new Array(10).fill(null);
           let answerValidated = new Array(10).fill(false);
           let score = 0;
           let quizFinished = false;
           let canSelect = true;
         
           function computeScore() {
             let total = 0;
             userAnswers.forEach((ans, idx) => { if (ans === questions[idx].c) total += 10; });
             score = total;
             return total;
           }
         
           function showFeedback(text, isSuccess = true) {
         feedbackMsg.classList.remove('hidden');
         feedbackMsg.innerHTML = text;   // Permite renderizar HTML (imagens)
         feedbackMsg.classList.add('feedback-popup');
         if (isSuccess) {
         feedbackMsg.classList.remove('bg-red-100');
         feedbackMsg.classList.add('bg-green-100', 'text-green-800');
         } else {
         feedbackMsg.classList.remove('bg-green-100');
         feedbackMsg.classList.add('bg-red-100', 'text-red-800');
         }
         }
         
           function renderQuestion() {
             const q = questions[currentIndex];
             questionEl.innerText = `${currentIndex+1}. ${q.q}`;
             progressText.innerText = `${currentIndex+1}/10`;
             progressBar.style.width = `${(currentIndex+1)*10}%`;
         
             const selected = userAnswers[currentIndex];
             const validated = answerValidated[currentIndex];
             
             let html = '';
             q.a.forEach((opt, idx) => {
               const letter = String.fromCharCode(65+idx);
               let classes = 'bg-white border border-gray-200 text-[#103A6B]';
               
               if (validated) {
                 if (idx === q.c) classes = 'bg-green-500 text-white border-green-500';
                 else if (idx === selected && idx !== q.c) classes = 'bg-red-400 text-white border-red-400';
                 else classes = 'bg-white/80 text-gray-600 border-gray-200';
               } else {
                 if (idx === selected) classes = 'bg-blue-500 text-white border-blue-500';
               }
         
               html += `<div onclick="window.handleOptionClick(${idx})" id="opt${idx}" class="p-3.5 rounded-xl border cursor-pointer option-transition font-medium no-tap-highlight ${classes}">${letter}) ${opt}</div>`;
             });
             answersDiv.innerHTML = html;
         
             if (validated) {
               const isCorrect = (selected === q.c);
               showFeedback(isCorrect ? q.feedbackAcerto : q.feedbackErro, isCorrect);
               canSelect = false;
               nextBtn.disabled = false;
               nextBtn.innerText = (currentIndex === 9) ? 'Ver resultado' : 'Próxima';
             } else {
               feedbackMsg.classList.add('hidden');
               canSelect = true;
               nextBtn.disabled = (selected === null);
               nextBtn.innerText = (currentIndex === 9 && selected !== null) ? 'Ver resultado' : 'Próxima';
             }
           }
         
           window.handleOptionClick = function(idx) {
             if (!canSelect || answerValidated[currentIndex]) return;
             userAnswers[currentIndex] = idx;
             nextBtn.disabled = false;
             renderQuestion();
           };
         
           function validateCurrentAnswer() {
             const selected = userAnswers[currentIndex];
             if (selected === null) return false;
             const q = questions[currentIndex];
             const isCorrect = (selected === q.c);
             answerValidated[currentIndex] = true;
             canSelect = false;
             computeScore();
             showFeedback(isCorrect ? q.feedbackAcerto : q.feedbackErro, isCorrect);
             renderQuestion();
             if (currentIndex === 9) nextBtn.innerText = 'Ver resultado';
             return true;
           }
         
           window.handleNextOrValidate = function() {
             if (quizFinished) return;
             if (!answerValidated[currentIndex]) {
               if (userAnswers[currentIndex] === null) { alert('Selecione uma opção antes de continuar.'); return; }
               validateCurrentAnswer();
               return;
             }
             if (currentIndex < 9) { currentIndex++; renderQuestion(); }
             else { finishQuiz(); }
           };
         
           window.prevQuestion = function() {
             if (currentIndex > 0) { currentIndex--; renderQuestion(); }
           };
         
           function finishQuiz() {
             quizFinished = true;
             computeScore();
             quizScr.classList.add('hidden');
             resultScr.classList.remove('hidden');
             
             let levelText = '', description = '';
             if (score >= 90) { levelText = '⭐️⭐️⭐️⭐️⭐️ Guardião da Cultura'; description = 'Você vive a cultura DPSP no dia a dia.'; }
             else if (score >= 70) { levelText = '⭐️⭐️⭐️⭐️ Embaixador da Cultura'; description = 'Ótimo entendimento, continue aplicando!'; }
             else if (score >= 50) { levelText = '⭐️⭐️⭐️ Em Desenvolvimento'; description = 'Você está no caminho certo, revise alguns pontos.'; }
             else { levelText = '🌱 Precisa Evoluir'; description = 'Hora de se aprofundar mais na cultura DPSP.'; }
             
             levelMsg.innerText = description;
             scoreDisplay.innerText = `${score} pontos · ${levelText}`;
             
             let reviewHtml = '';
             questions.forEach((q, idx) => {
               const userAns = userAnswers[idx];
               const userLetter = (userAns !== null) ? String.fromCharCode(65+userAns) : '-';
               const correctLetter = String.fromCharCode(65+q.c);
               const isCorrect = (userAns === q.c);
               reviewHtml += `<div class="mb-3 border-b border-white/10 pb-2"><p class="font-semibold">${idx+1}. ${q.q}</p><p class="text-xs ${isCorrect ? 'text-green-300' : 'text-red-300'}">Sua resposta: ${userLetter}) ${userAns !== null ? q.a[userAns] : 'Não respondida'}</p><p class="text-green-300 text-xs">✓ Correta: ${correctLetter}) ${q.a[q.c]}</p></div>`;
             });
             reviewEl.innerHTML = reviewHtml;
           }
         
           window.startQuiz = function() {
             currentIndex = 0;
             userAnswers = new Array(10).fill(null);
             answerValidated = new Array(10).fill(false);
             score = 0;
             quizFinished = false;
             startScr.classList.add('hidden');
             quizScr.classList.remove('hidden');
             resultScr.classList.add('hidden');
             renderQuestion();
             nextBtn.disabled = true;
           };
         
           const alertEl = document.getElementById('customAlert');
         const alertBox = document.getElementById('alertBox');
         
         document.getElementById('resgateBtn').addEventListener('click', () => {
         alertEl.classList.remove('opacity-0', 'pointer-events-none');
         
         setTimeout(() => {
         alertBox.classList.remove('scale-90');
         alertBox.classList.add('scale-100');
         }, 50);
         });
         
         function closeAlert() {
         alertBox.classList.remove('scale-100');
         alertBox.classList.add('scale-90');
         
         setTimeout(() => {
         alertEl.classList.add('opacity-0', 'pointer-events-none');
         }, 200);
         }         
           window.onload = () => { feedbackMsg.classList.add('hidden'); };
         })();