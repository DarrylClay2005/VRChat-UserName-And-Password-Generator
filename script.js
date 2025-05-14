const adjectives = ["Cool", "Fast", "Happy", "Mighty", "Brave", "Silly", "Smart", "Funky"];
    const nouns = ["Panda", "Tiger", "Eagle", "Wizard", "Ninja", "Robot", "Unicorn", "Dragon"];

    document.getElementById("generateUsername").addEventListener("click", () => {
        const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
        const randomNumber = Math.floor(Math.random() * 1000);
        const username = `${randomAdjective}${randomNoun}${randomNumber}`;
        
        // Display the current username
        document.getElementById("usernameDisplay").textContent = `Your username: ${username}`;
        // Center align the username display
        document.getElementById("usernameDisplay").style.textAlign = "center";

        // Center align the username history list
        document.getElementById("usernameHistory").style.textAlign = "center";
        // Add the username to the history list
        const historyList = document.getElementById("usernameHistory");
        const listItem = document.createElement("li");
        listItem.textContent = username;
        historyList.appendChild(listItem);
    // Add click event to copy username to clipboard
    listItem.addEventListener("click", () => {
        navigator.clipboard.writeText(username).then(() => {
        alert(`Copied "${username}" to clipboard!`);
        }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
    // Generate a new username after copying
    const newRandomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const newRandomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const newRandomNumber = Math.floor(Math.random() * 1000);
    const newUsername = `${newRandomAdjective}${newRandomNoun}${newRandomNumber}`;
    
    // Update the current username display
    document.getElementById("usernameDisplay").textContent = `Your username: ${newUsername}`;
    
    // Add the new username to the history list
    const newListItem = document.createElement("li");
    newListItem.textContent = newUsername;
    historyList.appendChild(newListItem);
    
    // Add click event to copy the new username to clipboard
    newListItem.addEventListener("click", () => {
        navigator.clipboard.writeText(newUsername).then(() => {
        alert(`Copied "${newUsername}" to clipboard!`);
        }).catch(err => {
        console.error('Failed to copy text: ', err);
        });
    });
    });

    // Limit the history list to a maximum of 5 usernames
    if (historyList.children.length > 5) {
        historyList.innerHTML = ''; // Clear the list
    }
    // Add a new username to the history list
        const listItem1 = document.createElement("li");
        listItem1.textContent = username;
        historyList.appendChild(listItem1);
    // Add click event to copy username to clipboard
    listItem1.addEventListener("click", () => {
        navigator.clipboard.writeText(username).then(() => {
            alert(`Copied "${username}" to clipboard!`);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
    // Generate a new username after copying
    const newRandomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const newRandomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const newRandomNumber = Math.floor(Math.random() * 1000);
    const newUsername = `${newRandomAdjective}${newRandomNoun}${newRandomNumber}`;
    // Update the current username display
    document.getElementById("usernameDisplay").textContent = `Your username: ${newUsername}`;
    // Add the new username to the history list
    if (historyList.children.length > 5) {
        historyList.removeChild(historyList.firstChild);
    }
// set background music to VRChat Midnight Rooftop Song Suisai - Calm down.mp3
    const audio = new Audio('VRChat Midnight Rooftop Song Suisai - Calm down.mp3');
    audio.loop = true;
    audio.play();
    // Set the volume to 0.5
    audio.volume = 0.5;
    // Pause the music when the user clicks the button again
    document.getElementById("generateUsername").addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});
// Add a volume slider to control background music
const volumeControl = document.createElement("input");
volumeControl.type = "range";
volumeControl.min = "0";
volumeControl.max = "1";
volumeControl.step = "0.01";
volumeControl.value = audio.volume;
volumeControl.style.display = "block";
volumeControl.style.margin = "10px auto";
document.body.appendChild(volumeControl);

// Update the audio volume when the slider value changes
volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value;
});