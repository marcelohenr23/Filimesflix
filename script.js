// Remove a div da animação após 3 segundos
setTimeout(() => {
    const animacao = document.getElementById('animacao');
    if (animacao) animacao.style.display = 'none';
}, 3000);

// Faz a transição do Login para a Home
function irParaHome() {
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('conteudo').style.display = 'block';
    // Rola a página automaticamente para o topo
    window.scrollTo(0, 0);
}

// Desbloqueia os canais privados ao clicar em assinar
function liberar() {
    alert("Redirecionando para o sistema de pagamento seguro...");
    
    // Remove o efeito borrado e bloqueado da lista de canais
    const listaCanais = document.querySelector('.grid-canais');
    listaCanais.classList.remove('bloqueado');
    
    // Altera os ícones de cadeado para um ícone de play online
    const icones = document.querySelectorAll('.icone-play');
    icones.forEach(icone => {
        icone.innerText = "▶️";
    });
    
    // Esconde o botão de assinatura já que foi liberado
    document.getElementById('btn-premium').style.display = 'none';
    document.querySelector('.aviso-privado').innerText = "Premium Ativado! Aproveite os canais.";
    document.querySelector('.aviso-privado').style.color = "#46d369";
}
