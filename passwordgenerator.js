// passwordgenerator.js

document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.createElement("button");
    generateButton.textContent = "Generate Passwords";
    generateButton.style.display = "block";
    generateButton.style.margin = "20px auto";
    document.body.appendChild(generateButton);

    const passwordList = document.createElement("ul");
    passwordList.style.listStyleType = "none";
    passwordList.style.textAlign = "center";
    document.body.appendChild(passwordList);

    generateButton.addEventListener("click", () => {
        passwordList.innerHTML = ""; // Clear previous passwords
        for (let i = 0; i < 5; i++) {
            const password = generatePassword(12); // Generate a 12-character password
            const listItem = document.createElement("li");
            listItem.textContent = password;
            listItem.style.cursor = "pointer";
            listItem.title = "Click to copy";
            listItem.addEventListener("click", () => {
                navigator.clipboard.writeText(password).then(() => {
                    alert("Password copied to clipboard!");
                    const newPassword = generatePassword(12); // Generate a new password
                    listItem.textContent = newPassword; // Replace the copied password
                }).catch(err => {
                    console.error("Failed to copy password: ", err);
                });
            });
            passwordList.appendChild(listItem);
        }
    });

    function generatePassword(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return password;
    }
});