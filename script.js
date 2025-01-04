document.getElementById('check-btn').addEventListener('click', function () {
    const inputElement = document.getElementById('text-input');
    const resultElement = document.getElementById('result');
    const originalText = inputElement.value.trim();

    if (originalText === "") {
        alert("Please input a value");
        return;
    }

    // Function to sanitize the input: remove non-alphanumerics and convert to lowercase
    const sanitize = (str) => {
        return str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    };

    const sanitizedText = sanitize(originalText);
    const reversedText = sanitizedText.split('').reverse().join('');

    if (sanitizedText === reversedText) {
        resultElement.textContent = `${originalText} is a palindrome`;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = `${originalText} is not a palindrome`;
        resultElement.style.color = "red";
    }
});
