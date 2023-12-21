if (month == 12)
{
    document.getElementById("day_alternative").style.display = "none";
    if (today <= 24) { 
        for (let i = 1; i <= 24; i++) {
            const AufgabeDesTages = document.getElementById(`day${i}`);
            if (i !== today) {
                AufgabeDesTages.style.display = "none";
            }
            else {
                AufgabeDesTages.style.display = "block";
            }
        }
    }
    else {
        document.getElementById("day_alternative").style.display = "";
    }
}
else {
    document.getElementById("day_alternative").style.display = "";
}

input = document.getElementById('textbox_id')

function loadpage() {
    value = document.getElementById('textbox_id').value
    if (value < 1 || value == null || value > today) {
        alert("Bitte geben sie eine Zahl zwischen 1 und " + today + " ein.")
    }
    else {
        window.location.href = './years/2023/pages/day' + value + '.html'
    }
}

input.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        loadpage();
    }
});
