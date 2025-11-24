const loginBtn = document.getElementById('loginBtn');
const errorDiv = document.getElementById('error');

loginBtn.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (!email || !senha) {
        errorDiv.textContent = 'Preencha todos os campos.';
        return;
    }

    try {
        const response = await fetch(`${api_url}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include', // importante para receber cookies
            body: JSON.stringify({ email, senha })
        });

        if (response.ok) {
            // Login bem-sucedido, o cookie já estará armazenado
            errorDiv.style.color = 'green';
            errorDiv.textContent = 'Login realizado com sucesso!';
            // Redirecionar ou carregar página privada
            // window.location.href = '/dashboard.html';
        } else {
            const data = await response.json();
            errorDiv.style.color = 'red';
            errorDiv.textContent = data.message || 'Erro ao fazer login';
        }
    } catch (err) {
        console.error(err);
        errorDiv.style.color = 'red';
        errorDiv.textContent = 'Erro na conexão com o servidor';
    }
});
