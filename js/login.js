function login() {
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');

    if (email.value == 'admin' && senha.value == 'admin') {
        alert("acesso autorizado!")
    } else {
        alert("usuario nao autorizado!")
    }
}