document.addEventListener('DOMContentLoaded', function () {
    const estudantes = document.querySelectorAll('.estudante-container');

    /* Para cada estudante, configura os eventos de mouse */
    estudantes.forEach(estudante => {
        const imagem = estudante.querySelector('.imagem-estudante');
        const gifCard = estudante.querySelector('.gif-card');
        const gifImagem = gifCard.querySelector('.gif-imagem');

        /* Quando o mouse entra na imagem do estudante */
        imagem.addEventListener('mouseenter', () => {
            const gifSrc = imagem.getAttribute('data-gif');
            gifImagem.src = `./Assets/Gifs/${gifSrc}`;
            gifCard.style.display = 'flex';
        });

        imagem.addEventListener('mouseleave', () => {
            gifCard.style.display = 'none';
        });
    });

    // Verifica se veio de redirecionamento do Forms
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('fromForms')) {
        showLetterAnimation();
    }
});

function showLetterAnimation() {
    const overlay = document.getElementById('cartaOverlay');
    overlay.style.display = 'flex';

    // Remove após 3 segundos
    setTimeout(() => {
        overlay.style.display = 'none';

        // Remove o parâmetro da URL sem recarregar
        history.replaceState(null, null, window.location.pathname);
    }, 3000);
}