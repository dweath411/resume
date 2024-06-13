document.addEventListener("DOMContentLoaded", function() {
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', toggleDarkMode);
});
