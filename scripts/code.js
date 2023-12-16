let codeElement = document.getElementById('code');
let lines = codeElement.innerText.split('\n');
let modifiedLines = lines.map(line => ' ' + line);
codeElement.innerText = modifiedLines.join('\n');

let preContent = document.getElementById('code').innerHTML;
let keywords = ['for', 'in', 'if', 'while', 'else', 'elif', 'return', 'break', 'continue', 'pass', 'import', 'from', 'as', 'try', 'except', 'finally', 'raise', 'assert', 'del', 'global', 'nonlocal', 'lambda', 'yield', 'with', 'is', 'not', 'or', 'and', 'var', 'const', 'let', 'func', 'def', 'True', 'False', 'None', 'range', 'str', 'append', 'print'];
let specialChars = ['(', ')', '[', ']', '{', '}'];
let numbers = ['len', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '-7'];
let operators = ['not', 'or', 'and', 'var', 'const', 'let', 'func', 'def'];
let specialOperators = ['True', 'False', 'None'];
let varibles = ['i', 'j', 'Blaetter', 'Blatt_war_auf_dem_weg', 'hoehe', 'breite', 'Variable', 'array', 'Variable1', 'Variable2', 'mushrooms', 'trees', 'anweisungen', 'number', 'zahl', 'turn', 'input', 'grade', 'bild', 'n', 'baum_hinten', 'x', 'Blatt_links'];
let specialKeywords = ['range', 'str'];
let strings = ['"True"', '"1"'];
let functs = ['append', 'print', '_goToMushroom', '_goToPilz', '_mushroomLeft', '_TreeLeft', '_Leaf_Hinten', '_baum_hinten', '_rechnen', '_ist_blatt_links'];


keywords.forEach(keyword => {
    let regex = new RegExp(`\\b${keyword}\\b`, 'g');
    preContent = preContent.replace(regex, `<purple>${keyword}</purple>`);
});

specialChars.forEach(char => {
    let regex = new RegExp(`\\${char}`, 'g');
    preContent = preContent.replace(regex, `<yellow>${char}</yellow>`);
});

numbers.forEach(number => {
    let regex = new RegExp(`\\b${number}\\b`, 'g');
    preContent = preContent.replace(regex, `<lime>${number}</lime>`);
});

operators.forEach(operator => {
    let regex = new RegExp(`\\b${operator}\\b`, 'g');
    preContent = preContent.replace(regex, `<blue>${operator}</blue>`);
});

specialOperators.forEach(specialOperator => {
    let regex = new RegExp(`\\b${specialOperator}\\b`, 'g');
    preContent = preContent.replace(regex, `<lightlightblue>${specialOperator}</lightlightblue>`);
});

varibles.forEach(varible => {
    let regex = new RegExp(`\\b${varible}\\b`, 'g');
    preContent = preContent.replace(regex, `<lightblue>${varible}</lightblue>`);
});

specialKeywords.forEach(specialKeyword => {
    let regex = new RegExp(`\\b${specialKeyword}\\b`, 'g');
    preContent = preContent.replace(regex, `<green>${specialKeyword}</green>`);
});

strings.forEach(t => {
    let regex = new RegExp(/"([^"]*)"/g);
    preContent = preContent.replace(regex, `<orange>"$1"</orange>`);
});

functs.forEach(funct  => {
    let regex = new RegExp(`\\b${funct}\\b`, 'g');
    preContent = preContent.replace(regex, `<lightyellow>${funct}</lightyellow>`);
});

document.getElementById('code').innerHTML = preContent;