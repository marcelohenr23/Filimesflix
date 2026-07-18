setTimeout(() => {
    document.getElementById('animacao').style.display = 'none';
    document.getElementById('conteudo').style.display = 'block';
}, 3000);

function liberar() {
    alert("Redirecionando para assinatura...");
    document.getElementById('c1').classList.remove('bloqueado');
    document.getElementById('c2').classList.remove('bloqueado');
}
