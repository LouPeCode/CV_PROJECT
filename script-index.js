document.addEventListener("DOMContentLoaded", () => {
    
    /*** Heading - automatic text ***/
    const heading = document.getElementById("heading");
    const text = "Toto je projekt pro HR náboráře za účelem získat práci jako front-end developer.";
    let idletter = 1;

    function printText() {
        heading.innerText = text.slice(0, idletter);
        idletter++;

        if (idletter > text.length) {
            clearInterval(intervalId);
        }
    }
    const intervalId = setInterval(printText, 100);
    
    /*** Login form ***/
    const loginButton = document.getElementById("loginButton");
    const loginForm = document.getElementById("loginForm");
    const loader = document.getElementById("loader");
    const loaderText = document.getElementById("loaderText");
    const headingText = document.getElementById("heading");

    loginButton.addEventListener("click", () => {
        checkLogin();
    });

    function checkLogin() {
        let yourName = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        
        if (yourName.trim() !== "") {
            if (password === "Petr") {
                localStorage.setItem('yourname', yourName);
                loginForm.style.display = "none";
                loader.style.display = "block";
                loaderText.style.display = "block";
                headingText.style.display = "none";
                setTimeout(() => {
                    window.location.href = "project.html";
                }, 3000);
            } else {
                let alertPassword = document.querySelector(".alert-password");
                alertPassword.style.display = "block";
                alertPassword.innerHTML = `<p>Bohužel ${yourName}, vaše heslo je špatné. Zkuste to znovu nebo opusťte stránku. Děkuji.</p>`;
            }
        } else {
            let alertName = document.querySelector(".alert-name");
            alertName.style.display = "block";
            alertName.innerHTML = "<p>Prosím, vyplňte vaše jméno nebo název firmy.</p>";
        }
    }

    /* // Kontrola podpory Local Storage
    function isLocalStorageSupported() {
        try {
            const testKey = "test";
            localStorage.setItem(testKey, testKey);
            localStorage.removeItem(testKey);
            return true;
        } catch (e) {
            return false;
        }
    }

    // Event listener pro tlačítko přihlášení
    loginButton.addEventListener("click", () => {
        if (isLocalStorageSupported()) {
            checkLogin();
        } else {
            alert("Prohlížeč nepodporuje Local Storage. Pro lepší fungování aplikace použijte modernější prohlížeč.");
        }
    });*/

});