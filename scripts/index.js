for (let i = 1; i <= 24; i++) {
    const AufgabeDesTages = document.getElementById(`day${i}`);
    if (i !== today) {
        AufgabeDesTages.style.display = "none";
    }
    else {
        AufgabeDesTages.style.display = "block";
    }
}
