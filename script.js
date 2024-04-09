document.getElementById("start").addEventListener("click", function() {
  this.style.display = "none"; // Esconde o botão inicial
  mostrarPista("Qual é o prato que fala? (Resposta: 'comunicado')");
});

function mostrarPista(pista) {
  var divPistas = document.getElementById("pistas");
  divPistas.innerHTML = `<p>${pista}</p>`;
  divPistas.style.display = "block"; // Mostra a pista

  // Aqui você pode adicionar lógica para verificar a resposta e, se correta, mostrar a próxima pista ou o convite final.
  // Para simplificar, vamos apenas mostrar uma mensagem após um clique.
  divPistas.addEventListener("click", function() {
      divPistas.innerHTML = "<h3>Parabéns! Você descobriu o convite!<br>Que tal jantarmos juntos sexta-feira?</h3>";
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