if (month !== 12 || PageDate > today) {
    window.location = "../toearly.html";
}

const LastDay = document.getElementById("LastDay");
const NextDay = document.getElementById("NextDay");

if (PageDate == 1) {
    LastDay.style.display = "none";
}
else {
    LastDay.innerHTML = "Zum vorherigen Tag";
    LastDay.href = `./day${PageDate-1}.html`;
}

if (PageDate < today) {
    if (PageDate == 24) {
        NextDay.style.display = "none";
    }
    NextDay.innerHTML = "Zum nächsten Tag";
    NextDay.href = `./day${PageDate+1}.html`;
}
else {
    NextDay.style.display = "none";
}
