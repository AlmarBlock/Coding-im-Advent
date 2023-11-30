if (month == 12) {
    window.location = "../toearly.html";
}

if (PageDate > today) {
    window.location = "../toearly.html";
}

const LastDay = document.getElementById("LastDay");
const NextDay = document.getElementById("NextDay");

if (PageDate == 1) {
    LastDay.innerHTML = "Zum vorherigen Tag";
    LastDay.href = "../index.html";
}
else {
    LastDay.innerHTML = "Zum vorherigen Tag";
    LastDay.href = `./day${PageDate-1}.html`;
}

if (PageDate < today) {
    if (PageDate == 27) {
        NextDay.style.display = "none";
    }
    NextDay.innerHTML = "Zum nächsten Tag";
    NextDay.href = `./day${PageDate+1}.html`;
}
else {
    NextDay.innerHTML = "Zum nächsten Tag";
    NextDay.href = `../dayisnotexisting.html`;
}
