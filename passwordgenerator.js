// Select the button and output container
const button = document.getElementById('generatePasswords');
const output = document.getElementById('passwordOutput');

// Function to generate a random password
function generatePassword(length = 12) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

// Function to generate 5 unique passwords
function generatePasswords() {
    const passwords = new Set();
    while (passwords.size < 5) {
        passwords.add(generatePassword());
    }
    output.innerHTML = Array.from(passwords).map(pwd => `<p>${pwd}</p>`).join('');
}

// Add event listener to the button
button.addEventListener('click', () => {
    generatePasswords();
    output.style.display = 'block';
    output.style.backgroundColor = 'white';
    output.style.color = 'black';
    output.style.textAlign = 'center';
    output.style.padding = '20px';
    output.style.margin = '20px auto';
    output.style.width = '50%';
    output.style.borderRadius = '10px';
    output.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
});