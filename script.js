// Select DOM elements
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const submitBtn = document.getElementById("btn");
const outputDiv = document.getElementById("output");

// Utility function to wait
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to show message after delay
async function showMessage() {
  const message = textInput.value.trim();
  const delay = parseInt(delayInput.value);

  // Validation
  if (!message || isNaN(delay) || delay < 0) {
    return;
  }

  // Wait for the given delay
  await wait(delay);

  // Display the message AFTER the delay
  outputDiv.textContent = message;
}

// Attach event
submitBtn.addEventListener("click", showMessage);
