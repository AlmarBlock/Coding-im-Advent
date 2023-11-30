for (let i = 1; i <= 28; i++) {
    const AufgabeDesTages = document.getElementById(`day${i < 10 ? '0' + i : i}`);
    if (i !== today && 12 !== month) {
        AufgabeDesTages.parentNode.removeChild(AufgabeDesTages);
    }
}
