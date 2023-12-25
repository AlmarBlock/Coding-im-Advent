const timer = document.getElementById('indexTimer');
const years = document.getElementById("years");
let yearText = document.getElementsByClassName("2023");
const directJump = document.getElementsByTagName('direktjump')[0]

if (month == 12) {
    if (today > 24) {
        directJump.style.display = "none";
    }
    else {
        directJump.style.display = "block";
    }
    timer.style.display = "none";
    years.style.display = "none";
    for(let i = 0; i < yearText.length; i++) {
      yearText[i].style.display = "block";
    }
} else {
    for(let i = 0; i < yearText.length; i++) {
      yearText[i].style.display = "none";
    }
    timer.style.display = "block";
    years.style.display = "block";
    directJump.style.display = "none";
}
