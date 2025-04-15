function trocarImagem(nomeImagem, descricao) {
  const imagem = document.getElementById("main-image");
  const texto = document.getElementById("descricao");

  imagem.classList.remove("animar");

  imagem.style.opacity = 0;
  imagem.style.transform = "scale(1.1)";
  texto.style.opacity = 0;

  setTimeout(() => {
    imagem.src = nomeImagem;
    imagem.alt = descricao;
    texto.textContent = descricao;

    imagem.style.opacity = 1;
    imagem.style.transform = "scale(1)";
    texto.style.opacity = 1;

    imagem.classList.add("animar");
  }, 500);
}

// Acessibilidade - Contraste
function toggleContraste() {
  document.body.classList.toggle("contraste");

  // Força atualização das cores dos botões
  const botoes = document.querySelectorAll("button, .menu-acessibilidade a");
  botoes.forEach(btn => {
    btn.classList.toggle("contraste-btn");
  });
}

// Acessibilidade - Fonte
let fonteAtual = 16;
function aumentarFonte() {
  fonteAtual = Math.min(fonteAtual + 1, 22);
  document.documentElement.style.fontSize = `${fonteAtual}px`;
}

function diminuirFonte() {
  fonteAtual = Math.max(fonteAtual - 1, 12);
  document.documentElement.style.fontSize = `${fonteAtual}px`;
}

// ScrollReveal
ScrollReveal().reveal('.imagem-container', { delay: 300, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('.botoes', { delay: 500, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('.footer', { delay: 700, origin: 'bottom', distance: '50px' });
function toggleModoNoturno() {
  document.body.classList.toggle("modo-noturno");
}
function toggleModoNoturno() {
  document.body.classList.toggle("modo-noturno");

  // Desativa o contraste se estiver ligado
  if (document.body.classList.contains("contraste")) {
    document.body.classList.remove("contraste");
  }
}

function toggleContraste() {
  document.body.classList.toggle("contraste");

  // Desativa o modo noturno se estiver ligado
  if (document.body.classList.contains("modo-noturno")) {
    document.body.classList.remove("modo-noturno");
  }
}
