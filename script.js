// Remove animação inicial
setTimeout(() => {
    const animacao = document.getElementById('animacao');
    if (animacao) animacao.style.display = 'none';
}, 3000);

// Vai do Login para a Seleção de Perfis
function irParaPerfis() {
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('perfil-area').style.display = 'block';
}

// Ativa o perfil escolhido e entra na Home
function escolherPerfil(nome) {
    document.getElementById('perfil-area').style.display = 'none';
    document.getElementById('conteudo').style.display = 'block';
    
    // Escreve o nome do perfil ativo lá no topo da home
    document.getElementById('nome-perfil-ativo').innerText = "Perfil: " + nome;
    window.scrollTo(0, 0);
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
