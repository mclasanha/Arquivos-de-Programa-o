function trocarImagem(nomeImagem, descricao) {
  const imagem = document.getElementById("main-image");
  const texto = document.getElementById("descricao");

  // Iniciar a transição suave para a imagem
  imagem.style.opacity = 0;
  imagem.style.transform = "scale(1.1)";  // Aumentar um pouco a imagem antes da troca
  texto.style.opacity = 0;

  setTimeout(() => {
    imagem.src = nomeImagem;
    texto.textContent = descricao;
    imagem.style.opacity = 1;
    imagem.style.transform = "scale(1)"; // Reduzir a imagem para o tamanho normal
    texto.style.opacity = 1;
  }, 500);
}
