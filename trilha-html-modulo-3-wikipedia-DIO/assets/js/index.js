/*

<!-- Código desenvolvido por Rafael V. Gogge -->
<!-- Direitos reservados © 2025 -->
<!-- GitHub: https://github.com/RafaelGogge -->

*/

// Função simples para demonstrar interação
document.addEventListener('DOMContentLoaded', function () {
    // Adiciona comportamento à busca
    const searchButton = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');

    searchButton.addEventListener('click', function () {
        if (searchInput.value.trim() !== '') {
            alert('Você buscou por: ' + searchInput.value);
            // Em uma implementação real, isso redirecionaria para os resultados
        }
    });

    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && searchInput.value.trim() !== '') {
            alert('Você buscou por: ' + searchInput.value);
        }
    });

    // Melhoria de acessibilidade: foco na busca ao pressionar "/"
    document.addEventListener('keydown', function (e) {
        if (e.key === '/' && e.target !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
    });
});
