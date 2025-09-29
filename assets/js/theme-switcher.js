document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('theme-switcher');
    const doc = document.documentElement;
    const themes = [
        { name: 'light', icon: '☀️' }, 
        { name: 'dark', icon: '🌙' }, 
        { name: 'system', icon: '💻' }
    ];

    // This media query detects OS-level theme preference
    const osThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Function to apply the theme
    const applyTheme = (themeName) => {
        let themeToApply = themeName;
        if (themeName === 'system') {
            // If system, check the OS preference
            themeToApply = osThemeQuery.matches ? 'dark' : 'light';
        }
        // Set the data-theme attribute on the <html> element
        doc.setAttribute('data-theme', themeToApply);
    };

    // Function to update the button icon
    const updateButton = (themeName) => {
        const theme = themes.find(t => t.name === themeName);
        if (theme) {
            themeSwitcher.textContent = theme.icon;
        }
    };

    // On page load, get the saved theme from localStorage
    let currentThemeName = localStorage.getItem('theme') || 'system';

    // Apply the theme and update the button
    applyTheme(currentThemeName);
    updateButton(currentThemeName);

    // Add a listener for when the OS theme changes
    osThemeQuery.addEventListener('change', (e) => {
        // Only re-apply theme if the current mode is 'system'
        if (localStorage.getItem('theme') === 'system') {
            applyTheme('system');
        }
    });

    // Handle button clicks to cycle through themes
    themeSwitcher.addEventListener('click', () => {
        const currentIndex = themes.findIndex(t => t.name === currentThemeName);
        const nextIndex = (currentIndex + 1) % themes.length;
        
        currentThemeName = themes[nextIndex].name;

        // Save the new preference
        localStorage.setItem('theme', currentThemeName);

        // Apply the new theme and update the button
        applyTheme(currentThemeName);
        updateButton(currentThemeName);
    });
});