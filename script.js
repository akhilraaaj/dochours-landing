// Get the button element and the SVG path element
const button = document.querySelector('.custom-btn');
const button_2 = document.querySelector('.custom-btn-2');

const pathElement = document.querySelector('#arrow-path');
const pathElement_2 = document.querySelector('#arrow-path-bt');

// Define the original and new d attribute values
const originalD = 'M21 7L1 7M21 7L15.0511 1M21 7L15.0511 13';
const newD = 'M25 7L1 7M25 7L19.0511 1M25 7L19.0511 13';

// Add event listeners to the button
button.addEventListener('mouseover', () => {
    // Change the d attribute to the new value when hovered
    pathElement.setAttribute('d', newD);
});

button.addEventListener('mouseout', () => {
    // Revert the d attribute to the original value when not hovered
    pathElement.setAttribute('d', originalD);
});

button_2.addEventListener('mouseover', () => {
    // Change the d attribute to the new value when hovered
    pathElement_2.setAttribute('d', newD);
});

button_2.addEventListener('mouseout', () => {
    // Revert the d attribute to the original value when not hovered
    pathElement_2.setAttribute('d', originalD);
});