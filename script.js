// Funkcja do obsługi logowania
function handleLogin(event) {
    event.preventDefault(); // Zatrzymuje domyślne działanie formularza

    const validUsername = "milosz";
    const validPassword = "2131";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        alert("Zalogowano pomyślnie!");
        window.location.href = "/project-nihongo/html/dashboard/dashboard.html";
    } else {
        document.getElementById("loginMessage").style.display = "block";
    }
}

// Dodanie event listenera do formularza
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", handleLogin);
    }
});



//wyniki z formularza
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Zapobiega standardowemu zachowaniu formularza
        
        // Pobranie wartości z formularza
        const formData = new FormData(event.target);
        const params = new URLSearchParams(formData);

        // Otwarcie nowej karty z wynikami formularza
        const newWindow = window.open("", "_blank");
        newWindow.document.write(`
            <html lang="pl">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Wynik formularza</title>
                <link rel="stylesheet" href="style.css">
                <style>
                    .container h1, p{
                        color: black;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Wynik formularza</h1>
                    <p><strong>Imię:</strong> ${params.get("firstname")}</p>
                    <p><strong>Nazwisko:</strong> ${params.get("lastname")}</p>
                    <p><strong>E-mail:</strong> ${params.get("email")}</p>
                    <p><strong>Numer telefonu:</strong> ${params.get("phone")}</p>
                    <p><strong>Rodzaj lekcji:</strong> ${params.get("lesson-type")}</p>
                    <p><strong>Poziom zaawansowania:</strong> ${params.get("level")}</p>
                    <p><strong>Preferowany czas lekcji:</strong> ${params.get("availability")}</p>
                    <p><strong>Dodatkowe informacje:</strong> ${params.get("subject")}</p>
                    <a href="kontakt.html">Powrót</a>
                </div>
            </body>
            </html>
        `);
    });
