update();

document.querySelectorAll("input").forEach(element => {
    element.addEventListener("input", update);
});

document.getElementById("copy").addEventListener("click", () => {
    navigator.clipboard.writeText(document.getElementById("output").value);
});

function update() {
    const emoji = document.getElementById("emoji").value;
    const size = document.getElementById("font-size").value;
    document.getElementById("output").value = generateHTML(emoji, size);
}

function generateHTML(emoji, size) {
    const y = size / 3 + 51 + 2 / 3;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="50%" y="${y.toFixed(2)}" font-size="${size}" text-anchor="middle">${emoji.trim()}</text></svg>`;
    return `<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(svg)}">`;
}