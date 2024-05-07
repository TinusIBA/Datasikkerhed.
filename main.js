// Funktion til at starte branching-scenariet
function startScenario() {
    let choice = prompt("Du modtager en e-mail, der angiveligt er fra din bank og beder om at opdatere dine kontodetaljer. Hvad gør du?\n\na) Klik på linket og indtast dine oplysninger.\nb) Kontroller afsenderens e-mail-adresse og undersøg e-mailens indhold nærmere.\nc) Ignorer e-mailen og slet den.");

    if (choice === 'a') {
        let choiceA = prompt("Du klikker på linket og indtaster dine oplysninger. Desværre var e-mailen en phishing-forsøg, og dine oplysninger er nu i hænderne på en hacker. Hvad gør du nu?\n\na) Rapporter e-mailen som phishing og slet den.\nb) Skift dine adgangskoder til alle dine konti og overvåg dine bankudtog nøje.");

        if (choiceA === 'a') {
            alert("Du rapporterer e-mailen som phishing og sletter den. Godt gået! Du har undgået et potentielt farligt phishing-forsøg.");
        } else if (choiceA === 'b') {
            alert("Du skifter dine adgangskoder og overvåger dine bankudtog nøje. Det er vigtigt at være proaktiv for at beskytte dine konti efter en phishing-hændelse.");
        } else {
            alert("Ugyldigt valg. Prøv igen.");
            startScenario();
        }
    } else if (choice === 'b') {
        let choiceB = prompt("Du undersøger nærmere og bemærker, at afsenderens e-mail-adresse ikke matcher den officielle e-mail-adresse fra din bank. Desuden indeholder e-mailen nogle stavefejl og virker generelt mistænkelig. Hvad gør du nu?\n\na) Rapporter e-mailen som phishing og slet den.\nb) Åbn e-mailen igen og klik på linket for at se, hvor det fører hen.");

        if (choiceB === 'a') {
            alert("Du rapporterer e-mailen som phishing og sletter den. Godt gået! Du har undgået et potentielt farligt phishing-forsøg.");
        } else if (choiceB === 'b') {
            alert("Du beslutter dig for at åbne e-mailen igen og klikker på linket. Desværre fører det til en ondsindet hjemmeside, der installerer skadelig software på din computer. Husk altid at være forsigtig med at klikke på links i mistænkelige e-mails.");
        } else {
            alert("Ugyldigt valg. Prøv igen.");
            startScenario();
        }
    } else if (choice === 'c') {
        alert("Du ignorerer e-mailen og sletter den. Det var en klog beslutning at undgå at interagere med en mistænkelig e-mail.");
    } else {
        alert("Ugyldigt valg. Prøv igen.");
        startScenario();
    }
}

// Tilføjer en eventlistener til knappen for at starte scenariet
document.getElementById("startButton").addEventListener("click", startScenario);

