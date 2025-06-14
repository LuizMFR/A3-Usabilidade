function toggleSenha(iconElement) {
    const input = iconElement.previousElementSibling;
    const isVisible = input.type === "text";
    input.type = isVisible ? "password" : "text";
    iconElement.style.fill = isVisible ? "#555" : "#1e88e5";
}
function salvarDadosPesquisa(event, inputId) {
    event.preventDefault();
    const valorPesquisa = document.getElementById(inputId).value;
    if (!valorPesquisa) {
        window.location.href = 'selecao_de_vagas.html'
        return;
    }
    sessionStorage.setItem('pesquisa', valorPesquisa);
    window.location = 'resultado_de_pesquisa.html';
}
function pesquisarTag(element) {
    const valor = element.textContent;
    sessionStorage.setItem('pesquisa', valor);
    window.location = 'resultado_de_pesquisa.html';
}
function verTrabalho(element) {
    const valor = element.textContent;
    sessionStorage.setItem('pesquisa', valor);
    window.location = 'visualizacao_de_vaga.html';
}