// This file handles the theme toggle functionality, allowing users to switch between light, dark, and system themes, and manages the localStorage for theme preference.

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Apply the current theme
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Set the toggle button state
    themeToggle.checked = currentTheme === 'dark';

    themeToggle.addEventListener('change', () => {
        const newTheme = themeToggle.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});