document.addEventListener("DOMContentLoaded", () => {
    // 1. Mensagem de boas-vindas
    if (!sessionStorage.getItem("welcomeShown")) {
        alert("Bem-vindo à Dance Academy!");
        sessionStorage.setItem("welcomeShown", "true");
    }

    // 2. Contador de visitas com LocalStorage
    const visitCounterElem = document.getElementById("visit-counter");
    if (visitCounterElem) {
        let visits = parseInt(localStorage.getItem("pageVisits") || "0", 10) + 1;
        localStorage.setItem("pageVisits", visits);
        visitCounterElem.textContent = `Você já visitou esta página ${visits} vez(es).`;
    }

    // 3. Alternância de Modo Escuro
    const btnTheme = document.getElementById("btn-theme");
    if (btnTheme) {
        // Restaurar preferência anterior
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
            btnTheme.textContent = "Modo Claro";
        }

        btnTheme.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            btnTheme.textContent = isDark ? "Modo Claro" : "Modo Escuro";
            localStorage.setItem("theme", isDark ? "dark" : "light");
        });
    }

    // 4. Frases motivacionais interativas
    const frases = [
        "\"A dança é a linguagem escondida da alma.\"",
        "\"Dance primeiro. Pense depois. É a ordem natural.\"",
        "\"A dançar somos capazes de criar uma arte viva e em constante movimento.\"",
        "\"Não tente dançar melhor do que os outros. Tente dançar melhor do que você mesmo.\"",
        "\"Dança é movimento, ritmo e emoção sem necessidade de palavras.\""
    ];

    const btnFrase = document.getElementById("btn-frase");
    const fraseElem = document.getElementById("frase-motivacional");

    if (btnFrase && fraseElem) {
        btnFrase.addEventListener("click", () => {
            const indiceAleatorio = Math.floor(Math.random() * frases.length);
            fraseElem.textContent = frases[indiceAleatorio];
        });
    }

    // 5. Interação com formulário de contacto
    const formContacto = document.getElementById("form-contacto");
    if (formContacto) {
        formContacto.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Obrigado pelo seu contacto! Responderemos em breve.");
            formContacto.reset();
        });
    }
});