// Get the button element by its id
var button = document.getElementById("switch-button");

// Function to generate a random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to update frame color
function updateFrameColor() {
  var img = document.querySelector("img");
  var randomFrameColor = getRandomColor();
  img.style.borderColor = randomFrameColor;
}

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Get the body element
  var body = document.body;

  // Get all the elements that contain text
  var textElements = document.querySelectorAll("h1,h2, h3, ul, li, p, span");

  // Generate random background and font colors
  var randomBackgroundColor = getRandomColor();
  var randomFontColor = getRandomColor();

  // Apply random colors to the body and text elements
  body.style.backgroundColor = randomBackgroundColor;

  for (var i = 0; i < textElements.length; i++) {
    textElements[i].style.color = randomFontColor;
  }

  // Apply random colors to the button
  button.style.color = randomFontColor;
  button.style.borderColor = randomFontColor;
  button.style.backgroundColor = randomBackgroundColor;

  // Update frame color
  updateFrameColor();
});