for (let i = 1; i <= 24; i++) {
    const AufgabeDesTages = document.getElementById(`day${i}`);
    if (i !== today) {
        AufgabeDesTages.style.display = "none";
    }
    else {
        AufgabeDesTages.style.display = "block";
    }
}

input = document.getElementById('textbox_id')
input.max = today

function loadpage() {
    value = document.getElementById('textbox_id').value
    if (value < 1 || value > today || value == null) {
        alert("Bitte geben sie eine Zahl zwischen 1 und " + today + " ein.")
    }
    else {
        window.location.href = './pages/day' + value + '.html'
    }
}

input.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        loadpage();
    }
});
