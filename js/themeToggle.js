export function toggleTheme() {
    const themeToggleButton = document.getElementById('themeToggle');
    console.log("toggleTheme loaded"); // For debugging
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', function () {
            console.log("Button clicked"); // For debugging
            document.body.classList.toggle('dark-theme');
            console.log("Class toggled", document.body.classList); // For debugging
        });
    }
}

document.addEventListener('DOMContentLoaded', toggleTheme);
