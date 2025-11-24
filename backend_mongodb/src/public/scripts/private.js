document.addEventListener("DOMContentLoaded", async () => {
    const contentBox = document.getElementById("content");
    const errorBox = document.getElementById("error");
    const logoutBtn = document.getElementById("logoutBtn");

    try {
        const response = await fetch(`${api_url}/user/private`, {
            method: "GET",
            credentials: "include" // Envia cookie automaticamente
        });

        if (!response.ok) {
            contentBox.innerHTML = "<p>Erro ao carregar informações.</p>";
            return;
        }

        const data = await response.json();

        // Preenche no HTML
        contentBox.innerHTML = `
            <div class="info">
                <p><strong>ID:</strong> ${data.id}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Nome:</strong> ${data.nome}</p>
            </div>
        `;
    } catch (error) {
        console.error("Erro:", error);
        errorBox.innerHTML = "Erro ao buscar dados.";
    }

    // Botão de logout
    logoutBtn.addEventListener("click", async () => {
        try {
            const res = await fetch(`${api_url}/user/logout`, {
                method: "POST",
                credentials: "include"
            });

            if (res.ok) {
                window.location.href = `${api_url}/user/login`;
            } else {
                errorBox.innerHTML = "Falha ao sair.";
            }
        } catch (e) {
            errorBox.innerHTML = "Erro ao sair.";
        }
    });
});
