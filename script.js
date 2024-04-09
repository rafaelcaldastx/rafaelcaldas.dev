document.getElementById("start").addEventListener("click", function() {
  this.style.display = "none"; // Esconde o botão inicial
  mostrarPista("Num reino não tão distante, sob a luz do luar, existe um lugar onde as estrelas descem para jantar. Entre risos e olhares, sob a luz de cem velas, um banquete nos aguarda, com sabores e cores belas. <br><br>Onde o tempo parece parar, e a música suavemente tocar, um cavaleiro e sua dama, em uma mesa estarão a se encontrar. <br><br>Decifra-me, ó bela dama, e aceita este convite singular: qual é este lugar encantado, onde juntos devemos estar? <br><br><br><strong>Clique em mim se quiser tentar adivinhar.</strong>"
  
  );
});

function mostrarPista(pista) {
  var divPistas = document.getElementById("pistas");
  divPistas.innerHTML = `<p>${pista}</p>`;
  divPistas.style.display = "block"; // Mostra a pista

  divPistas.addEventListener("click", function() {
      divPistas.innerHTML = "<h3>Quase lá! Onde gostaria de ir?</h3>";
      mostrarOpcoes();
  });
}

function mostrarOpcoes() {
  var divOpcoes = document.getElementById("opcoes");
  divOpcoes.style.display = "block"; // Mostra as opções

  // Lista de opções
  var opcoes = [
      { nome: "Cafeteria", mensagem: "Está quente, mas ainda não tão caloroso quanto seu sorriso." },
      { nome: "Restaurante Italiano", mensagem: "Parabéns! Você descobriu o convite! Que tal jantarmos juntos no final de semana?" },
      { nome: "Barzinho de Rock", mensagem: "Muito sedutor mas ainda não chega perto do seu olhar serrado." },
      { nome: "Cinema", mensagem: "Hmm parece excelente mas pensei em algo mais romantico pra você." }
  ];

  // Limpa opções anteriores
  divOpcoes.innerHTML = "";

  // Cria e adiciona os botões de opções
  opcoes.forEach(function(opcao) {
      var botao = document.createElement("button");
      botao.innerText = opcao.nome;
      botao.onclick = function() { alert(opcao.mensagem); }; // Mostra a mensagem correspondente
      divOpcoes.appendChild(botao);
  });
}

document.getElementById('recusar').addEventListener('mousemove', function(e) {
  var recusarBtn = this;
  var alturaMaxima = window.innerHeight - recusarBtn.offsetHeight;
  var larguraMaxima = window.innerWidth - recusarBtn.offsetWidth;

  // Gera novas posições X e Y dentro dos limites da janela
  var novaPosicaoX = Math.floor(Math.random() * larguraMaxima);
  var novaPosicaoY = Math.floor(Math.random() * alturaMaxima);

  // Aplica as novas posições ao botão
  recusarBtn.style.position = 'absolute';
  recusarBtn.style.left = novaPosicaoX + 'px';
  recusarBtn.style.top = novaPosicaoY + 'px';
});