const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('clear')
})

window.addEventListener('scroll', function () {
    var voltarMenu = document.getElementById('voltar-menu');
    if (window.scrollY > 200) {
        voltarMenu.style.display = 'block';
    } else {
        voltarMenu.style.display = 'none';
    }
});

var voltarMenu = document.getElementById('voltar-menu');
voltarMenu.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});