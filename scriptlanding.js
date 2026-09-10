const btnTema = document.getElementById('btn-tema');
const body = document.body;

btnTema.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});
