//your JS code here. If required.
// Select DOM elements
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const submitBtn = document.getElementById("btn");
const outputDiv = document.getElementById("output");

// Utility function to wait for given ms
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle delay and show message
async function showMessage() {
  const message = textInput.value.trim();
  const delay = parseInt(delayInput.value);

  // Validation
  if (!message) {
    outputDiv.textContent = "⚠️ Please enter a message.";
    return;
  }
  if (isNaN(delay) || delay < 0) {
    outputDiv.textContent = "⚠️ Please enter a valid delay in milliseconds.";
    return;
  }

  // Clear output while waiting
  outputDiv.textContent = "⏳ Waiting...";

  // Wait for given time
  await wait(delay);

  // Show the message after delay
  outputDiv.textContent = message;
}

// Event listener for button
submitBtn.addEventListener("click", showMessage);
