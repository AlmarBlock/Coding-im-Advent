const timer = document.getElementById('indexTimer');
const years = document.getElementById("years");
let yearText = document.getElementsByClassName("2023");
const directJump = document.getElementsByTagName('direktjump')[0]

if (month == 12) {
    //NOTE - Changes all thigs after the 24th of December
    if (today > 24) {
        directJump.style.display = "none";
    }
    else {
        directJump.style.display = "block";
    }
    //NOTE - Changes all thigs while it is December
    timer.style.display = "none";
    years.style.display = "none";
    for(let i = 0; i < yearText.length; i++) {
      yearText[i].style.display = "block";
    }
} else {
    //NOTE - Changes all thigs before/after December
    for(let i = 0; i < yearText.length; i++) {
      yearText[i].style.display = "none";
    }
    timer.style.display = "block";
    years.style.display = "block";
    directJump.style.display = "none";
}
