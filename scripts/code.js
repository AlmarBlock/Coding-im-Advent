let codeElement = document.getElementById('code');
let lines = codeElement.innerText.split('\n');
let modifiedLines = lines.map(line => ' ' + line);
codeElement.innerText = modifiedLines.join('\n');

let preContent = document.getElementById('code').innerHTML;
let keywords = ['for', 'in', 'if', 'while', 'else'];
let specialChars = ['(', ')'];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let operators = ['not', 'or', 'and', 'True', 'False', 'None', 'var', 'const', 'let', 'func', 'def'];
let varibles = ['i', 'j', 'Blaetter', 'Blat_war_auf_dem_weg', 'hoehe', 'breite', 'Variable'];
let specialKeywords = ['range'];
let strings = ['"True"'];



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
    preContent = preContent.replace(regex, `<orange>${strings}</orange>`);
});

document.getElementById('code').innerHTML = preContent;