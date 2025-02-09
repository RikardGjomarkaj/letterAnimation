const alphabet = [];

// Add lowercase letters
for (let i = 0; i < 26; i++) {
    alphabet.push(String.fromCharCode(97 + i)); // 'a' to 'z'
}

// Add uppercase letters
for (let i = 0; i < 26; i++) {
    alphabet.push(String.fromCharCode(65 + i)); // 'A' to 'Z'
}

alphabet.push(" "); // Add space

const idp = document.getElementById("output");

const scrollToBottom = () => {
    idp.scrollTop = idp.scrollHeight;
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const loopWithDelay = async () => {
    const inputValue = document.getElementById("myInput").value;
    const hello = inputValue.split('');
    let a = [];

    idp.innerHTML = "";

    for (let i = 0; i < hello.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (hello[i] !== alphabet[j]) {
                a[i] = alphabet[j];
                idp.innerHTML += a.join('') + '<br>';
                scrollToBottom();
            } else {
                a[i] = alphabet[j];
                idp.innerHTML += a.join('') + '<br>';
                scrollToBottom();
                break; // Stop inner loop when match is found
            }
            await delay(10);
        }
    }
};

// Function to clear the output and input field
function clearOutput() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("myInput").value = "";
}

// Function to start animation when Enter is pressed
document.getElementById("myInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevents accidental form submissions
        loopWithDelay(); // Starts the animation
    }
});