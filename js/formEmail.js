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
        const campos = [nome, email, message];

        campos.forEach(campo => {
            if (campo.value === '') {
                campo.style.borderColor = 'red';
                campo.placeholder = 'Preencha esse campo!'
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
const windowSuccess = document.getElementById('window_success');
const windowFailed = document.getElementById('window_failed');
const paraWindowFailed = document.getElementById('para_error');

function sendForm(nome, email, message) {
    emailjs.send('service_1yf2c09', 'template_qxxphqn', {
        title: 'Entrou em contato para mais informações',
        name: nome,
        email: email,
        message: message
    }).then(() => {
        windowForm.classList.remove('active')
        overlay.classList.remove('ativo');
        setTimeout(() => {
            windowSuccess.classList.add('active');
        }, 700);

        setTimeout(() => {
            windowSuccess.classList.remove('active');
        }, 4000);

        btnSend.disabled = false;
        btnSend.textContent = 'Enviar';
    
        form.reset();
    }).catch((error) => {
        windowForm.classList.remove('active')
        overlay.classList.remove('ativo');

        setTimeout(() => {
            windowFailed.classList.add('active');
            paraWindowFailed.innerText = error;
        }, 700);

        setTimeout(() => {
            windowFailed.classList.remove('active');
        }, 5000);

        btnSend.disabled = false;
        btnSend.textContent = 'Enviar';
    });
};

const closeBtn = document.querySelector('#close_btn');

closeBtn.addEventListener('click', () => {
    windowForm.classList.remove('active')
    overlay.classList.remove('ativo');
});