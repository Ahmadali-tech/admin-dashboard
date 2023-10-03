function toggleTheme() {
    const body = document.body;

    // Toggle the dark mode class on the body element
    body.classList.toggle('dark-mode');

    // Toggle the visibility of light and dark mode icons
    const lightModeIcon = document.querySelector('.light-mode-icon');
    const darkModeIcon = document.querySelector('.dark-mode-icon');
    lightModeIcon.classList.toggle('hidden');
    darkModeIcon.classList.toggle('hidden');
}
