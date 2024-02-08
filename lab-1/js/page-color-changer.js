// Declare and initialize constants for input slider elements
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');

// Declare and initialize constants for html element
const pageHtml = document.documentElement;

// Event handler for slider changes
function handleSliderChange() {
    // Get the values of the red, green, and blue sliders
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    // Call function to update background color based on slider values
    updateBackgroundColor(redValue, greenValue, blueValue);
}

// Function to update background color based on slider values
function updateBackgroundColor(red, green, blue) {
    // Set the background color of the html element
    pageHtml.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// Attach event listeners to sliders
redSlider.addEventListener('input', handleSliderChange);
greenSlider.addEventListener('input', handleSliderChange);
blueSlider.addEventListener('input', handleSliderChange);
