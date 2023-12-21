const kara = document.getElementById("kara");
const world = document.getElementById("world");
const tools = document.getElementById("tools");

const button_kara = document.getElementById("button_kara");
const button_world = document.getElementById("button_world");
const button_tools = document.getElementById("button_tools");

button_kara.style.backgroundColor = "#f5f5f5";
button_kara.style.color = "black";
world.style.display = "none";
tools.style.display = "none";

function _kara() {
    button_kara.style.backgroundColor = "#f5f5f5";
    button_world.style.backgroundColor = "#1f1f1f";
    button_tools.style.backgroundColor = "#1f1f1f";
    button_kara.style.color = "black";
    button_world.style.color = "white";
    button_tools.style.color = "white";

    kara.style.display = "";
    world.style.display = "none";
    tools.style.display = "none";
}
function _world() {
    button_kara.style.backgroundColor = "#1f1f1f";
    button_world.style.backgroundColor = "#f5f5f5";
    button_tools.style.backgroundColor = "#1f1f1f";
    button_kara.style.color = "white";
    button_world.style.color = "black";
    button_tools.style.color = "white";

    kara.style.display = "none";
    world.style.display = "";
    tools.style.display = "none";
}
function _tools() {
    button_kara.style.backgroundColor = "#1f1f1f";
    button_world.style.backgroundColor = "#1f1f1f";
    button_tools.style.backgroundColor = "#f5f5f5";
    button_kara.style.color = "white";
    button_world.style.color = "white";
    button_tools.style.color = "black";

    kara.style.display = "none";
    world.style.display = "none";
    tools.style.display = "";
}