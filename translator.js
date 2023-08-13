function translateToAlienLanguage() {
    const englishWord = document.getElementById('englishWord').value;
    const alienWord = reverseString(englishWord);
    document.getElementById('alienWord').textContent = alienWord;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        translateToAlienLanguage();
    }
}

function reverseString(str) {
    return str.split('').reverse().join('');
}