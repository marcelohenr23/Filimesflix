// Esconde o login após a animação (3 segundos)
setTimeout(() => {
    document.getElementById('animacao').style.display = 'none';
}, 3000);

// Função para entrar na Home
function irParaHome() {
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('conteudo').style.display = 'block';
}

// Função para desbloquear canais
function liberar() {
    alert("Redirecionando para assinatura...");
    document.getElementById('c1').classList.remove('bloqueado');
    document.getElementById('c2').classList.remove('bloqueado');
    document.getElementById('c1').innerText = "Canal 1";
    document.getElementById('c2').innerText = "Canal 2";
}
