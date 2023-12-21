const Title = document.getElementById(`title`);
const meta = document.getElementsByTagName("meta"); 
const PageTitle = document.getElementById("pagetitle");
let PageDate = 0;

if (meta[1].getAttribute("name") == "day") { 
    PageDate = parseInt(meta[1].content);
}

Title.innerHTML = `Coding im Advent | Tag ${PageDate}`;

PageTitle.innerHTML = `Coding im Advent | Tag ${PageDate}`;