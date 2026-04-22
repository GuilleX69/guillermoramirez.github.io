// LAST UPDATED
document.getElementById("last-update").innerText = document.lastModified;

// THEME SWITCHER
function setTheme(mode) {
    document.body.classList.remove("light", "hacker");

    if (mode === "light") {
        document.body.classList.add("light");
    } else if (mode === "hacker") {
        document.body.classList.add("hacker");
    }
}

// Save theme
function setTheme(mode) {
    document.body.classList.remove("light", "hacker");

    if (mode === "light") {
        document.body.classList.add("light");
    } else if (mode === "hacker") {
        document.body.classList.add("hacker");
    }

    localStorage.setItem("theme", mode);
}

// Load theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) setTheme(savedTheme);

// OPTIONAL: TERMINAL (if you enable it later)
/*
const lines = [
"$ git push origin main",
"Triggering pipeline...",
"Running CI...",
"Deploying...",
"Deployment successful 🚀"
];

let i = 0, j = 0;
const terminal = document.getElementById("terminal");

function type() {
    if (!terminal) return;

    if (i < lines.length) {
        if (j < lines[i].length) {
            terminal.textContent += lines[i][j++];
            setTimeout(type, 30);
        } else {
            terminal.textContent += "\n";
            i++; j = 0;
            setTimeout(type, 300);
        }
    }
}
type();
*/