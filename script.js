const containerEl = document.querySelector(".container"); // Select the container element

// Create an array containing the different careers to display dynamically
const careers = [
    "Full Stack Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "YouTuber",
    "ML Engineer"
];

let careersIndex = 0; // Index to keep track of the current career
let characterIndex = 0; // Index to keep track of the current character within the career

updateText(); // Call the function to start updating the text

// Function to update the text dynamically
function updateText() {
    // Update the container's inner HTML with a substring of the current career
    containerEl.innerHTML = `
    <h1>I am a ${careers[careersIndex].slice(0, characterIndex)}</h1>`;

    characterIndex++; // Increment the character index

    // If all characters of the current career have been displayed
    if (characterIndex === careers[careersIndex].length + 1) {
        careersIndex++; // Move to the next career
        characterIndex = 0; // Reset the character index
    }

    // If all careers have been displayed, reset to the first one
    if (careersIndex === careers.length) {
        careersIndex = 0;
    }

    // Set a timer to call updateText again after 300 milliseconds
    setTimeout(updateText, 300);
}
