const registerBtn = document.getElementById('registerBtn');
const errorDiv = document.getElementById('error');

registerBtn.addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validação básica
    if (!name || !email || !password || !confirmPassword) {
        errorDiv.style.color = 'red';
        errorDiv.textContent = 'Preencha todos os campos.';
        return;
    }

    if (password !== confirmPassword) {
        errorDiv.style.color = 'red';
        errorDiv.textContent = 'As senhas não coincidem.';
        return;
    }

    try {
        const response = await fetch(`${api_url}/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include', // caso o servidor use cookies
            body: JSON.stringify({
                nome:name,
                email:email,
                senha: password
            })
        });

        const data = await response.json();

        if (response.ok) {
            errorDiv.style.color = 'green';
            errorDiv.textContent = 'Registrado com sucesso!';

            // Redireciona após 1 segundo
            setTimeout(() => {
                window.location.href = "/login.html";
            }, 1000);

        } else {
            errorDiv.style.color = 'red';
            errorDiv.textContent = data.message || 'Erro ao registrar';
        }

    } catch (err) {
        console.error(err);
        errorDiv.style.color = 'red';
        errorDiv.textContent = 'Erro na conexão com o servidor';
    }
});
