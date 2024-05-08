// Gør at vi kan starte scenariet ved at klikke på knappen
document.getElementById("startButton").addEventListener("click", startScenarie);

function startScenarie() {
    let mulighed = prompt("Du modtager en e-mail, der angiveligt er fra din bank og beder om at opdatere dine kontodetaljer. Hvad gør du?\n\na) Klik på linket og indtast dine oplysninger.\nb) Kontroller afsenderens e-mail-adresse og undersøg e-mailens indhold nærmere.\nc) Ignorer e-mailen og slet den.\nd) Rapporter e-mailen som phishing og bloker afsenderen.");

    switch (mulighed) {
        case 'a':
            let mulighedA = prompt("Du klikker på linket og indtaster dine oplysninger. Desværre var e-mailen en phishing-forsøg, og dine oplysninger er nu i hænderne på en hacker. Hvad gør du nu?\n\na) Skift dine adgangskoder til alle dine konti og overvåg dine bankudtog nøje.\nb) Luk alle browservinduer og kør en antivirus-scanning på din computer.");
            switch (mulighedA) {
                case 'a':
                    alert("Du skifter dine adgangskoder og overvåger dine bankudtog nøje. Det er vigtigt at være proaktiv for at beskytte dine konti efter en phishing-hændelse.");
                    break;
                case 'b':
                    alert("Du lukker alle browservinduer og kører en antivirus-scanning på din computer for at sikre dig, at der ikke er skadelig software installeret. Det er en vigtig foranstaltning for at beskytte din computer og dine data.");
                    break;
                default:
                    alert("Ugyldigt valg. Prøv igen.");
            }
            break;
        case 'b':
            let mulighedB = prompt("Du undersøger nærmere og bemærker, at afsenderens e-mail-adresse ikke matcher den officielle e-mail-adresse fra din bank. Desuden indeholder e-mailen nogle stavefejl og virker generelt mistænkelig. Hvad gør du nu?\n\na) Rapporter e-mailen som phishing og slet den.\nb) Åbn e-mailen igen og klik på linket for at se, hvor det fører hen.");
            switch (mulighedB) {
                case 'a':
                    alert("Du rapporterer e-mailen som phishing og sletter den. Godt gået! Du har undgået et potentielt farligt phishing-forsøg.");
                    break;
                case 'b':
                    alert("Du beslutter dig for at åbne e-mailen igen og klikker på linket. Desværre fører det til en ondsindet hjemmeside, der installerer skadelig software på din computer. Husk altid at være forsigtig med at klikke på links i mistænkelige e-mails.");
                    break;
                default:
                    alert("Ugyldigt valg. Prøv igen.");
            }
            break;
        case 'c':
            alert("Du ignorerer e-mailen og sletter den. Det var en klog beslutning at undgå at interagere med en mistænkelig e-mail.");
            break;
        case 'd':
            alert("Du rapporterer e-mailen som phishing og blokerer afsenderen for at forhindre yderligere forsøg på at kontakte dig. Det er vigtigt at rapportere phishing-forsøg for at beskytte dig selv og andre mod svindel.");
            break;
        default:
            alert("Ugyldigt valg. Prøv igen.");
    }
}