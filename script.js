document.getElementById("formulario-contato").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "") {
        alert("Por favor, preencha o campo Nome.");
        return;
    }

    if (email === "") {
        alert("Por favor, preencha o campo Email.");
        return;
    }

    if (!email.includes("@")) {
        alert("Por favor, insira um email válido.");
        return;
    }

    if (mensagem === "") {
        alert("Por favor, preencha o campo Mensagem.");
        return;
    }

    alert("Formulário enviado com sucesso!");
});


