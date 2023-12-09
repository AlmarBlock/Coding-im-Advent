Day1 = 2;
Day2 = 1;
Day3 = 3;
Day4 = 1;
Day5 = 3;
Day6 = 2;
Day7 = 2;
Day8 = 3;
Day9 = 3;
Day10 = 2;
Day11 = 4;
Day12 = 2;
Day13 = 4;
Day14 = 0;//
Day15 = 0;//
Day16 = 4;
Day17 = 0;//
Day18 = 0;//
Day19 = 0;//
Day20 = 0;//
Day21 = 0;//
Day22 = 0;//
Day23 = 0;//
Day24 = 0;//

InfoDay1 = "Richtig! </br> Kara lauft 5 Felder nach vorn, also bis zum Baum. Jedes Mal, wenn Kara auf ein Feld geht, überprüft er ob auf dem Feld ein Blatt liegt, sollte dies der Fall sein, wird die variable &quot;<lightblue>Blatt_war_auf_dem_weg</lightblue>&quot; auf <blue>True</blue> (Wahr) gesetzt. Am Baum angekommen, überprüft Kara ob die Variable &quot;<lightblue>Blatt_war_auf_dem_weg</lightblue>&quot; auf <blue>True</blue> (Wahr) gesetzt ist, sollte dies der Fall sein dreht sich Kara nach Links andernfalls nach rechts.";
InfoDay2 = "Richtig! </br> Kara lauft bis er am Baum ankommt, dabei wird jedes Mal überprüft ob auf dem Feld ein Blatt liegt, sollte dies der Fall sein, wird die Variable &quot;<lightblue>Blaetter</lightblue>&quot; um <lime>1</lime> erhöht. Am Baum angekommen, dreht sich Kara so oft um 90° nach Links wie die Variable &quot;<lightblue>Blaetter</lightblue>&quot; angibt. Da nur überprüft wird, wenn Kara nicht vor dem Baum ist, wir das Blatt vor dem Baum nicht mitgezählt.";
InfoDay3 = "Korrekt! </br> Kara legt zuerst eine Linie aus Blättern, die so lang ist wie die Variable &quot;<lightblue>breite</lightblue>&quot; angibt. Danach geht Kara die Linie wieder zurück und rück in die nächste Zeile vor, dies wiederholt Kara so oft wie die Variable &quot;<lightblue>hoehe</lightblue>&quot; angibt. Da &quot;<lightblue>hoehe</lightblue>&quot; mal <lime>2</lime> gerecht wird ist sie <lime>8</lime>, also werden 8X6 Blätter gelegt. (48) ";
InfoDay4 = "Gut gemacht! </br> Kara geht immer ein Feld nach vorne, wenn ein Mushroom (Pilz) vor ihm ist oder wenn dort keiner ist, also immer. Bei jedem Schritt überprüft er ob ein Blatt unter ihm ist, wenn dies der Fall ist, nimmt er es auf. Wenn Kara auf dem Feld vor dem ersten Pilz ist, geht er ein Feld nach vorne uns schiebt den Pilz mit nach vorne, da Kara aber nur ein Pilz zurzeit schieben kann, kommt es beim nächsten versuch nach vorne zu gehen zu einem Error (Fehler), da Kara versucht zwei Pilze zu schieben.";
InfoDay5 = "Richtig! </br> Kara schaut ob auf dem Feld, wo er steht, bereits ein Blatt liegt, sollte dies der Fall sein, nimmt der das Blatt auf, andernfalls legt er ein Blatt hin. Insgesamt gibt es <lime>3</lime> Zeilen wo <lime>4</lime> Blätter fehlen und <lime>2</lime> Zeilen wo <lime>5</lime> Blätter fehlen also kann man die Fehlenden Blätter sehr leicht ausrechnen: </br> </br> <lime>3</lime> x <lime>4</lime> + <lime>2</lime> x <lime>5</lime> = <lime>22</lime>";
InfoDay6 = "Sehr gut! </br> Die Variable &quot;<lightblue>Variable</lightblue>&quot; bekommt am Beginn den String-Wert: &quot;<orange><code>&quot;True&quot;</code></orange>&quot;. Bei der if/else Abfrage wird dann überprüft, ob der Wert von &quot;<lightblue>Variable</lightblue>&quot; gleich zu True (Wahr) ist, dies ist nicht der Fall, da True eine ein Boolean ist und das die Variable ein String darstellt. </br> (String &#8800; Boolean)";
InfoDay7 = "Richtig! </br> Denn die for-Zählschläfe wiederholt den Code in ihr 8-mal, dabei hat &quot;<lightblue>i</lightblue>&quot; immer einen höheren Wert, also im ersten Durchgang ein Wert von: <lime>0</lime>, im zweiten einen Wert von: <lime>1</lime>, im dritten ein Wert von: <lime>2</lime> und immer so weiter. In der Zählschleife wird nun jedes Mal überprüft, ob der Wert an der Stelle im <lightblue>array</lightblue> den Wert <lime>1</lime>, hat. Sollte dies der Fall sein, legt Kara ein Blatt. Anschließend geht Kara immer ein Feld nach vorne.";
InfoDay8 = "Richtig! <br> Denn man kann von der Abfrage vom &quot;<purple>while</purple>-Loop&quot; ein Großteil entfernen, um genau zu sein alles hinter dem &quot;<lightlightblue>False</lightlightblue>&quot;, denn man überprüft, ob &quot;<lightlightblue>False</lightlightblue>&quot; den Wert &quot;<lightlightblue>False</lightlightblue>&quot; hat (was es immer hat) und ob Kara nicht vor einem Baum steht, da &quot;<lightlightblue>False</lightlightblue>&quot; aber schon ausreicht, dass es nicht ausgeführt wird, können wir den Rest wegnehmen, dann steht dort nur noch: <br> <br> <purple>while</purple> <lightlightblue>False</lightlightblue>: <br><br>Und dies sorgt dafür das der Code im &quot;<purple>while</purple>-Loop&quot; nie ausgeführt wird, und damit auch dafür das Kara sich nie bewegt.<br> <br> <purple>while</purple> <lightlightblue>True</lightlightblue>: <br><br>Würde wiederrum dafür sorgen, das der Code unendlich oft ausgeführt werden würde.";
InfoDay9 = "Sehr gut! <br> Denn Python versucht die &quot;<lightblue>Variable1</lightblue>&quot; neu zu belegen, und zwar mit dem Ergebnis aus einer Rechnung, die ein String und ein Integer enthält, also ein Text und eine Zahl, dies ist allerdings nicht möglich und es kommt zu einem Error (Fehler). Damit hört das Programm auf, bevor es überhaupt bis zum if-Statement kommt.";
InfoDay10 = "Korrekt! <br> Denn der &quot;<purple>while</purple>-Loop&quot; wiederholt den Code, der in ihm ist, bis Kara auf einem Blatt steht. Dabei überprüft Kara bei jeden Feld, ob ein Pilz und/oder ein Baum links oder rechts steht. Dafür dreht er sich erst nach links und schaut, ob ein Baum oder Pilz vor ihm steht, wenn dies der Fall ist, wird die dem entsprechende Variable um <lime>1</lime> erhöht. Anschließend dreht sich Kara um 180° und schaut wieder, ob ein Baum oder Pilz vor ihm steht und addiert wieder zu der dementsprechenden Variable <lime>1</lime> dazu. Zuletzt dreht sich Kara wieder in seine ausgangs Position, und geht ein Feld nach vorne, dort wiederholt sich der Vorgang. ";
InfoDay11 = "Gut gemacht! <br> Denn die for-Schleife wiederholt den Code so lange, wie das array lang ist. Bei den if-Statements wird dann überprüft, welchen Wert das array an dem dementsprechenden Punkt hat. Bei einer <lime>1</lime> dreht sich Kara um 90° nach links, bei einer <lime>2</lime> dreht sich Kara nach rechts und bei einer <lime>3</lime> geht Kara ein Feld nach vorne, bei einer <lime>4</lime> legt Kara ein Blatt ab. Nun muss man sich nur vorstellen, wo Kara lang gehen muss, und welche Zahlen man dafür brauch.";
InfoDay12 = "Korrekt! <br> Zuerst werden zwei Funktionen definiert. Der restliche Code läuft so lange, bis Kara auf einem Blatt steht. Während dessen werden beide Funktionen wiederholt aufgerufen. Diese Funktionen geben zurück, ob Kara einen Baum, einen Pilz oder nichts links neben sich hat. Sollte dies der Fall sein, gibt die Funktion &quot;<lightlightblue>True</lightlightblue>&quot; zurück, und Kara geht ein Feld nach vorne. In diesem Fall wird allerdings nur die linke Seite überprüft. Somit ist die rechte Seite zwar vorhanden, aber für Kara irrelevant.";
InfoDay13 = "Sehr gut! <br> Denn in der ersten Zeile wird eine Variable mit dem Namen &quot;<lightblue>number</lightblue>&quot; erstellt. Im &quot;<purple>for</purple>-Loop&quot; wird dann jedes Mal der Wert der Variable &quot;<lightblue>i</lightblue>&quot; zur Variable &quot;<lightblue>number</lightblue>&quot; hinzugefügt, wobei &quot;<lightblue>i</lightblue>&quot; mit jedem Durchgang um <lime>1</lime> erhöht wird. <br><br>Durchgang 1: <lightblue>number</lightblue> += <lightblue>i</lightblue> → 0 &nbsp;&nbsp;+ 0 = 0<br>Durchgang 2: <lightblue>number</lightblue> += <lightblue>i</lightblue> → 0 &nbsp;&nbsp;+ 1 = 1<br>Durchgang 3: <lightblue>number</lightblue> += <lightblue>i</lightblue> → 1 &nbsp;&nbsp;+ 2 = 3<br>Durchgang 4: <lightblue>number</lightblue> += <lightblue>i</lightblue> → 3 &nbsp;&nbsp;+ 3 = 6<br>Durchgang 5: <lightblue>number</lightblue> += <lightblue>i</lightblue> → 6 &nbsp;&nbsp;+ 4 = 10<br>Durchgang 6: <lightblue>number</lightblue> += <lightblue>i</lightblue> → 10 + 5 = 15<br>Durchgang 7: <lightblue>number</lightblue> += <lightblue>i</lightblue> → 15 + 6 = 21";
InfoDay14 = "1";
InfoDay15 = "1";
InfoDay16 = "Gut gemacht! <br> Das <lightblue>array</lightblue> hat nach der ersten for-Zählschläfe den Wert: <yellow>[</yellow><lime>0</lime><white>, </white><lime>1</lime><white>, </white><lime>2</lime><white>, </white><lime>3</lime><white>, </white><lime>4</lime><white>, </white><lime>5</lime><white>, </white><lime>6</lime><yellow>]</yellow>. In der zweiten Schleife geht Kara von links nach rechts jede Spalte durch und legt, wenn es das <lightblue>array</lightblue> angibt Blätter, wenn er alle Blätter abgelegt hat, dreht er um und geht wieder zurück zum unteren Ende, dort angekommen, geht er zur Nächten Spalte und wiederholt dasselbe. Da das <lightblue>array</lightblue> immer aufsteigende Werte hat, steigt auch die Anzahl der Blätter, die Kara legt, und so entsteht eine Rampe, von unten links nach oben rechts.";
InfoDay17 = "1";
InfoDay18 = "1";
InfoDay19 = "1";
InfoDay20 = "1";
InfoDay21 = "1";
InfoDay22 = "1";
InfoDay23 = "1";
InfoDay24 = "1";

Falsch1 = "<red>Leider Falsch, versuche es noch einmal!</red>";
Falsch2 = "<red>Nicht ganz, versuche es noch einmal!</red>";
Falsch3 = "<red>Leider Falsch, aber du Schaft das, versuche es noch mal!</red>";
Falsch4 = "<red>Leider nicht ganz die richtige Antwort. Versuch es doch bitte noch einmal.</red>";
Falsch5 = "<red>Leider nicht die korrekte Lösung. Möchtest du es nochmals versuchen?</red>";
Falsch6 = "<red>Leider nicht die richtige Antwort. Versuch es erneut, diesmal klappt es bestimmt!</red>";
Falsch7 = "<red>Denkfehler passieren, versuche es nochmal!</red>";

const Info = document.getElementById("Info");
Info.style.display = "none";

function _getRandomInt() {
    let randomNumber = Math.floor(Math.random() * 7) + 1;
    return randomNumber;
}

function a() {
    if (window[`Day${PageDate}`] == 1) {
        console.log(window[`InfoDay${PageDate}`]);
        Info.innerHTML = window[`InfoDay${PageDate}`];
        Info.style.display = "block";
        window.scrollBy(0, 1000000);
    }
    else {
        Info.innerHTML = window[`Falsch${_getRandomInt()}`];
        Info.style.display = "block";
        window.scrollBy(0, 1000000);
    }
}

function b() {
    if (window[`Day${PageDate}`] == 2) {
        console.log(window[`InfoDay${PageDate}`]);
        Info.innerHTML = window[`InfoDay${PageDate}`];
        Info.style.display = "block";
        window.scrollBy(0, 1000000);
    }
    else {
        Info.innerHTML = window[`Falsch${_getRandomInt()}`];
        Info.style.display = "block";
        window.scrollBy(0, 1000000);
    }
}

function c() {
    if (window[`Day${PageDate}`] == 3) {
        console.log(window[`InfoDay${PageDate}`]);
        Info.innerHTML = window[`InfoDay${PageDate}`];
        Info.style.display = "block";
        window.scrollBy(0, 1000000);
    }
    else {
        Info.innerHTML = window[`Falsch${_getRandomInt()}`];
        Info.style.display = "block";
        window.scrollBy(0, 1000000);
    }
}

function d() {
    if (window[`Day${PageDate}`] == 4) {
        console.log(window[`InfoDay${PageDate}`]);
        Info.innerHTML = window[`InfoDay${PageDate}`];
        Info.style.display = "block";
        window.scrollBy(0, 1000000);
    }
    else {
        Info.innerHTML = window[`Falsch${_getRandomInt()}`];
        Info.style.display = "block";
        window.scrollBy(0, 1000000);
    }
}