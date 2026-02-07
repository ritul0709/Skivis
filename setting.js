const translations = { /* SAME CONTENT */ };

function changeLanguage(lang) { /* SAME CODE */ }

function toggleSettings() {
    let m = document.getElementById('settings-menu');
    m.style.display = m.style.display === 'block' ? 'none' : 'block';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
