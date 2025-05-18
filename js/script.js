document.addEventListener("DOMContentLoaded", function () {
    // --- ESTILIZAÇÃO DA PÁGINA ---
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.backgroundColor = "#f4f4f4";
    document.body.style.color = "#333";

    const header = document.querySelector("header");
    header.style.backgroundColor = "#f64905ef";
    header.style.color = "#000";
    header.style.padding = "20px";
    header.style.textAlign = "center";
    header.style.position = "relative";

    const logo = document.querySelector(".logo-header");
    logo.style.width = "80px";
    logo.style.display = "block";
    logo.style.margin = "0 auto 15px auto";

    const navList = document.querySelector("nav ul");
    navList.style.listStyle = "none";
    navList.style.display = "flex";
    navList.style.justifyContent = "center";
    navList.style.flexWrap = "wrap";
    navList.style.padding = "0";

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.style.color = "#000";
        link.style.textDecoration = "none";
        link.style.margin = "5px 10px";
        link.style.fontWeight = "bold";
        link.style.transition = "color 0.3s";
        link.addEventListener("mouseover", () => {
            link.style.color = "#fff";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "#000";
        });
    });

    const faqContainer = document.querySelector(".faq");
    faqContainer.style.maxWidth = "800px";
    faqContainer.style.margin = "30px auto";
    faqContainer.style.backgroundColor = "#fff";
    faqContainer.style.padding = "20px";
    faqContainer.style.borderRadius = "8px";
    faqContainer.style.boxShadow = "4px 6px 10px rgba(0, 0, 0, 0.1)";

    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        item.style.padding = "15px 0";
    });

    const h3s = document.querySelectorAll(".faq-item h3");
    h3s.forEach(h3 => {
        h3.style.color = "#004080";
    });

    const main = document.querySelector("main");
    main.style.padding = "20px";

    const footer = document.querySelector("footer");
    footer.style.backgroundColor = "#000";
    footer.style.color = "#fff";
    footer.style.textAlign = "center";
    footer.style.padding = "10px";
    footer.style.marginTop = "40px";

    // --- VALIDAÇÃO DO FORMULÁRIO DE CONTATO ---
    const form = document.getElementById("formContato");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Evita envio automático

            // Remove mensagens de erro anteriores
            const mensagensErroAntigas = document.querySelectorAll(".mensagem-erro");
            mensagensErroAntigas.forEach(msg => msg.remove());

            let validado = true;

            const nome = document.getElementById("idNome");
            const email = document.getElementById("idEmail");
            const telefone = document.getElementById("idTelefone");
            const mensagem = document.getElementById("idMensagem");

            // Função para exibir erro abaixo do campo
            function mostrarErro(campo, mensagem) {
                const erro = document.createElement("div");
                erro.classList.add("mensagem-erro");
                erro.style.color = "red";
                erro.style.fontSize = "14px";
                erro.textContent = mensagem;
                campo.parentElement.appendChild(erro);
                validado = false;
            }

            // Validações
            if (!nome.value.trim()) {
                mostrarErro(nome, "Por favor, preencha seu nome completo.");
            } else if (nome.value.trim().split(" ").length < 2) {
                mostrarErro(nome, "Informe seu nome completo (nome e sobrenome).");
            }

            if (!email.value.trim()) {
                mostrarErro(email, "Por favor, preencha o campo de e-mail.");
            } else if (!email.value.includes("@") || !email.value.includes(".")) {
                mostrarErro(email, "Informe um e-mail válido.");
            }

            if (!telefone.value.trim()) {
                mostrarErro(telefone, "Por favor, preencha o telefone.");
            }

            if (!mensagem.value.trim()) {
                mostrarErro(mensagem, "Por favor, escreva sua mensagem.");
            }

            if (validado) {
                alert("Formulário enviado com sucesso!");
                form.reset(); // limpa os campos
            }
        });
    }
});
