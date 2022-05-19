// Select the checkbox
const check = document.querySelector(".checkbox-toggle");

// Check for dark mode preference at the OS level
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Get the user's theme preference from local storage, if it's available
let currentTheme = localStorage.getItem("theme");

// If the user's preference in localStorage is dark...
if (currentTheme == "dark") {
    // ...let's toggle the .dark-mode class on the body
    document.body.classList.toggle("dark-mode");
    check.checked = true;
// Otherwise, if the user's preference in localStorage is light...
} else if (currentTheme == "light") {
    // ...let's remove the .dark-mode class on the body
    document.body.classList.remove("dark-mode");
} else {
    let theme = "";
    if (prefersDarkScheme.matches) {
        document.body.classList.add("dark-mode");
        check.checked = true;
    } else {
        document.body.classList.remove("dark-mode");
    }
    theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);
    currentTheme = theme;
}

check.addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
    let theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    
    // Finally, let's save the current preference to localStorage to keep using it
    localStorage.setItem("theme", theme);
});