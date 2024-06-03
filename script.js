document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkbox');
    let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

    // Set initial mode based on stored value
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            isDarkMode = true;
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            isDarkMode = false;
        }
        // Store the current mode in local storage
        localStorage.setItem('isDarkMode', isDarkMode);
    });
});
