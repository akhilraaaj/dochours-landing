// Get the button element and the SVG path element
const button = document.querySelector('.custom-btn');
const pathElement = document.querySelector('#arrow-path');

// Define the original and new d attribute values
const originalD = 'M21 7L1 7M21 7L15.0511 1M21 7L15.0511 13';
const newD = 'M25 7L1 7M25 7L19.0511 1M25 7L19.0511 13';

// Add event listeners to the button
if (button) {
    button.addEventListener('mouseover', () => {
        // Change the d attribute to the new value when hovered
        pathElement.setAttribute('d', newD);
    });
    button.addEventListener('mouseout', () => {
        // Revert the d attribute to the original value when not hovered
        pathElement.setAttribute('d', originalD);
    });
}

const customBtn1 = document.querySelector('.custom-btn-1');
const customBtn2 = document.querySelector('.custom-btn-2');
const customBtn3 = document.querySelector('.custom-btn-3');
const customBtn4 = document.querySelector('.custom-btn-4');

const arrowPath1 = document.querySelector('#arrow-path-1');
const arrowPath2 = document.querySelector('#arrow-path-2');
const arrowPath3 = document.querySelector('#arrow-path-3');
const arrowPath4 = document.querySelector('#arrow-path-4');

if (customBtn1) {
    customBtn1.addEventListener('mouseover', () => {
        // Change the d attribute to the new value when hovered
        arrowPath1.setAttribute('d', newD);
    });
    customBtn1.addEventListener('mouseout', () => {
        // Revert the d attribute to the original value when not hovered
        arrowPath1.setAttribute('d', originalD);
    });
}

if (customBtn2) {
    customBtn2.addEventListener('mouseover', () => {
        // Change the d attribute to the new value when hovered
        arrowPath2.setAttribute('d', newD);
    });
    customBtn2.addEventListener('mouseout', () => {
        // Revert the d attribute to the original value when not hovered
        arrowPath2.setAttribute('d', originalD);
    });
}

if (customBtn3) {
    customBtn3.addEventListener('mouseover', () => {
        // Change the d attribute to the new value when hovered
        arrowPath3.setAttribute('d', newD);
    });
    customBtn3.addEventListener('mouseout', () => {
        // Revert the d attribute to the original value when not hovered
        arrowPath3.setAttribute('d', originalD);
    });
}

if (customBtn4) {
    customBtn4.addEventListener('mouseover', () => {
        // Change the d attribute to the new value when hovered
        arrowPath4.setAttribute('d', newD);
    });
    customBtn4.addEventListener('mouseout', () => {
        // Revert the d attribute to the original value when not hovered
        arrowPath4.setAttribute('d', originalD);
    });
}

// side bar
function openSideBar() {
    const sideBar = document.getElementById('side-menu-bar');
    sideBar.classList.add('opacity-100','h-full');
}

function closeSideBar() {
    const sideBar = document.getElementById('side-menu-bar');
    sideBar.classList.remove('opacity-100','h-full');
}

