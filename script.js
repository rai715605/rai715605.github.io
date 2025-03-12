// Function to create the dark mode toggle button
function createDarkModeButton() {
    const button = document.createElement('button');
    button.id = 'darkModeToggle';
    button.textContent = 'Toggle Dark Mode';
    button.style.position = 'fixed';
    button.style.top = '20px';
    button.style.right = '20px';
    button.style.padding = '10px';
    button.style.fontSize = '16px';
    button.style.cursor = 'pointer';
    button.style.backgroundColor = '#007bff';
    button.style.color = '#ffffff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.zIndex = '1000';
    document.body.appendChild(button);
}

// Function to toggle dark mode
function toggleDarkMode() {
    console.log("Triggered\")
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkModeEnabled); // Save preference
}

// Function to apply dark mode on page load
function applyDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
}

// Initialize dark mode functionality
function initDarkMode() {
    createDarkModeButton(); // Add the button to the page
    applyDarkMode(); // Apply dark mode if enabled

    // Add event listener to the button
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', toggleDarkMode);
}


// Run the initialization when the page loads
window.onload = initDarkMode;