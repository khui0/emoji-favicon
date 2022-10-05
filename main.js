update();

document.querySelectorAll("input").forEach(element => {
    element.addEventListener("input", update);
});

document.getElementById("copy").addEventListener("click", () => {
    navigator.clipboard.writeText(document.getElementById("output").value);
});

function update() {
    let emoji = document.getElementById("emoji").value;
    let font = document.getElementById("font").value;
    document.getElementById("output").value = generateHTML(emoji, font);
}

function generateHTML(emoji, font) {
    let y = font / 3 + 51 + 2 / 3;
    let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="50%" y="${y.toFixed(2)}" font-size="${font}" text-anchor="middle">${emoji.trim()}</text></svg>`;
    return `<link rel="icon" href="data:image/svg+xml,${svg.replaceAll(`"`, "%22")}">`;
}