emailjs.init('HU-vlUM5I0H7iptRd');

let enviado = false;

const iconeEmail = document.createElement('i');

const btnSend = document.querySelector('#btn_send');
btnSend.addEventListener('click', (e) => {
    e.preventDefault();

    const nome = document.querySelector('#nome');
    const email = document.querySelector('#email')
    const message = document.querySelector('#mensagem');

    if (nome.value === '' || email.value === '' || message.value === '') {
        nome.style.borderColor = 'red';
        email.style.borderColor = 'red';
        message.style.borderColor = 'red';

        const campos = [nome, email, message];

        campos.forEach(campo => {
            if (campo.value === '') {
                campo.style.borderColor = 'red';
            } else {
                campo.style.borderColor = 'black';
            }
        });

    } else {

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);

        if (emailValido) {
            email.placeholder = '';

            btnSend.disabled = true;
            sendForm(nome.value, email.value, message.value);
            
            btnSend.textContent = 'Enviando...'
            iconeEmail.remove();
            
            nome.style.borderColor = 'black';
            email.style.borderColor = 'black';
            message.style.borderColor = 'black';
            
        } else {
            email.style.borderColor = 'red';
            email.value = '';
            email.placeholder = 'Email incorreto';
        }
    }
    
});

const form = document.querySelector('#contato-form');

function sendForm(nome, email, message) {
    emailjs.send('service_1yf2c09', 'template_qxxphqn', {
        name: nome,
        email: email,
        message: message
    }).then(() => {
        alert('Email enviado com sucesso!');

        btnSend.disabled = false;
        btnSend.textContent = 'Enviar';
        
        form.reset();
    }).catch((error) => {

        btnSend.disabled = false;
        btnSend.textContent = 'Enviar';

        alert('Erro ao enviar EMAIL:' + error);
    });
};