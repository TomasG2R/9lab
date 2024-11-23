document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.createElement('button');
    themeToggleButton.className = 'theme-toggle-button';
    themeToggleButton.innerText = 'Switch to Dark Mode';
    document.body.appendChild(themeToggleButton);

    // Retrieve and apply the saved theme from localStorage (default is light)
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark-background', currentTheme === 'dark');
    updateButtonText();

    // Add an event listener for the button
    themeToggleButton.addEventListener('click', () => {
        const isDarkMode = document.documentElement.classList.toggle('dark-background');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        updateButtonText();
    });

    function updateButtonText() {
        const isDarkMode = document.documentElement.classList.contains('dark-background');
        themeToggleButton.innerText = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
});

