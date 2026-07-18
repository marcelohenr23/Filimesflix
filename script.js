// Remove a animação inicial após 3 segundos
setTimeout(() => {
    const animacao = document.getElementById('animacao');
    if (animacao) animacao.style.display = 'none';
}, 3000);

// Troca de tela ao clicar no botão "Entrar"
function irParaHome() {
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('conteudo').style.display = 'block';
    window.scrollTo(0, 0); // Garante que comece do topo da página de filmes
}

// Desbloqueia os canais ao vivo
function liberar() {
    alert("Redirecionando para assinatura Premium...");
    
    const listaCanais = document.querySelector('.grid-canais');
    listaCanais.classList.remove('bloqueado');
    
    const icones = document.querySelectorAll('.icone-play');
    icones.forEach(icone => {
        icone.innerText = "▶️";
    });
    
    document.getElementById('btn-premium').style.display = 'none';
    document.querySelector('.aviso-privado').innerText = "Premium Ativado! Canais Liberados.";
    document.querySelector('.aviso-privado').style.color = "#46d369";
}
