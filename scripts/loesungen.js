Day1 = 2;
Day2 = 1;
Day3 = 3;
Day4 = 1;
Day5 = 1;
Day6 = 1;
Day7 = 1;
Day8 = 1;
Day9 = 1;
Day10 = 1;
Day11 = 1;
Day12 = 1;
Day13 = 1;
Day14 = 1;
Day15 = 1;
Day16 = 1;
Day17 = 1;
Day18 = 1;
Day19 = 1;
Day20 = 1;
Day21 = 1;
Day22 = 1;
Day23 = 1;
Day24 = 1;
Day25 = 1;
Day26 = 1;
Day27 = 1;

InfoDay1 = "Richtig! </br> Kara lauft 5 Felder nach vorn, also bis zum Baum. Jedes mal wenn Kara auf ein Feld geht, überprüft er ob auf dem Feld ein Blatt ligt, solte dies der Fall sein, wird die variable &quot;<lightblue>Blatt_war_auf_dem_weg</lightblue>&quot; auf <blue>True</blue> (Wahr) gesetzt. Am Baum angekommen, überprüft Kara ob die Variable &quot;<lightblue>Blatt_war_auf_dem_weg</lightblue>&quot; auf <blue>True</blue> (Wahr) gesetzt ist, solte dies der Fall sein dreht sich Kara nach Links andernsfalls nach Rechts.";
InfoDay2 = "Richtig! </br> Kara lauft bis er am Baum ankommt, dabei wird jedes mal überpfüft ob auf dem Feld ein Blatt liegt, solte dies der Fall sein, wird die Variable &quot;<lightblue>Blaetter</lightblue>&quot; um <lime>1</lime> erhöht. Am Baum angekommen, dreht sich Kara so oft um 90° nach Links wie die Variable &quot;<lightblue>Blaetter</lightblue>&quot; angibt. Da nur überpft wird, wenn Kara nicht vor dem Baum ist, wir das Blatt vor dem Baum nicht mit gezählt.";
InfoDay3 = "Correkt! </br> Kara legt zuerst eine linie aus Blättern, die so lang ist wie die Variable &quot;<lightblue>breite</lightblue>&quot; angibt. Danach geht Kara die line wieder zurück und rück in die nächte Zeile vor, dies wiederholt Kara so oft wie die Variable &quot;<lightblue>hoehe</lightblue>&quot; angibt. Da &quot;<lightblue>hoehe</lightblue>&quot; mal <lime>2</lime> gerecht wird ist sie <lime>8</lime>, also werden 8X6 Blätter geleget. (48) ";
InfoDay4 = "1";
InfoDay5 = "1";
InfoDay6 = "1";
InfoDay7 = "1";
InfoDay8 = "1";
InfoDay9 = "1";
InfoDay10 = "1";
InfoDay11 = "1";
InfoDay12 = "1";
InfoDay13 = "1";
InfoDay14 = "1";
InfoDay15 = "1";
InfoDay16 = "1";
InfoDay17 = "1";
InfoDay18 = "1";
InfoDay19 = "1";
InfoDay20 = "1";
InfoDay21 = "1";
InfoDay22 = "1";
InfoDay23 = "1";
InfoDay24 = "1";
InfoDay25 = "1";
InfoDay26 = "1";
InfoDay27 = "Hallo!";

const Info = document.getElementById("Info");
Info.style.display = "none";

function a() {
    if (window[`Day${PageDate}`] == 1) {
        console.log(window[`InfoDay${PageDate}`]);
        Info.innerHTML = window[`InfoDay${PageDate}`];
        Info.style.display = "block";
    }
    else {
        Info.innerHTML = "<red>Leider Falsch, versuche es noch einmal!</red>";
        Info.style.display = "block";
    }
}
function b() {
    if (window[`Day${PageDate}`] == 2) {
        console.log(window[`InfoDay${PageDate}`]);
        Info.innerHTML = window[`InfoDay${PageDate}`];
        Info.style.display = "block";
    }
    else {
        Info.innerHTML = "<red>Leider Falsch, versuche es noch einmal!</red>";
        Info.style.display = "block";
    }
}
function c() {
    if (window[`Day${PageDate}`] == 3) {
        console.log(window[`InfoDay${PageDate}`]);
        Info.innerHTML = window[`InfoDay${PageDate}`];
        Info.style.display = "block";
    }
    else {
        Info.innerHTML = "<red>Leider Falsch, versuche es noch einmal!</red>";
        Info.style.display = "block";
    }
}
function d() {
    if (window[`Day${PageDate}`] == 4) {
        console.log(window[`InfoDay${PageDate}`]);
        Info.innerHTML = window[`InfoDay${PageDate}`];
        Info.style.display = "block";
    }
    else {
        Info.innerHTML = "<red>Leider Falsch, versuche es noch einmal!</red>";
        Info.style.display = "block";
    }
}