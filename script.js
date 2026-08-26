const form = document.getElementById('form');
const eyeIcon = document.querySelector('.password-icon');
const inputSenha = document.getElementById('password');

eyeIcon.addEventListener('click', () => {
    if (inputSenha.type === 'password') {
        inputSenha.type = 'text';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    } else {
        inputSenha.type = 'password';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    const email = document.getElementById('email').value;
    const senha = inputSenha.value;

    if (email.trim() === '' || senha.trim() === '') {
        alert('Ops! Preencha todos os campos antes de entrar.');
        return;
    }

    alert('Logado com sucesso!');
});