// nav bar
function openNavbar() {
    const sideBar = document.getElementById('nav-bar');
    sideBar.classList.add('opacity-100','h-full');
}

function closeNavbar() {
    const sideBar = document.getElementById('nav-bar');
    sideBar.classList.remove('opacity-100','h-full');
}

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
        arrowPath1.setAttribute('d', newD);
    });
    customBtn1.addEventListener('mouseout', () => {
        arrowPath1.setAttribute('d', originalD);
    });
}

if (customBtn2) {
    customBtn2.addEventListener('mouseover', () => {
        arrowPath2.setAttribute('d', newD);
    });
    customBtn2.addEventListener('mouseout', () => {
        arrowPath2.setAttribute('d', originalD);
    });
}

if (customBtn3) {
    customBtn3.addEventListener('mouseover', () => {
        arrowPath3.setAttribute('d', newD);
    });
    customBtn3.addEventListener('mouseout', () => {
        arrowPath3.setAttribute('d', originalD);
    });
}

if (customBtn4) {
    customBtn4.addEventListener('mouseover', () => {
        arrowPath4.setAttribute('d', newD);
    });
    customBtn4.addEventListener('mouseout', () => {
        arrowPath4.setAttribute('d', originalD);
    });
}


// Policy Section 


document.addEventListener('DOMContentLoaded', function() {
    // Get all index items
    const indexItems = document.querySelectorAll('.index-item');

    // Add click event listener to each index item
    indexItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Get the target ID from the data-target attribute
            const targetId = item.getAttribute('data-target');
            // Scroll to the target element
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});