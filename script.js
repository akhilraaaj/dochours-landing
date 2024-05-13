// Navbar
function openNavbar() {
    const sideBar = document.getElementById('nav-bar');
    sideBar.classList.add('opacity-100','h-full');
}

function closeNavbar() {
    const sideBar = document.getElementById('nav-bar');
    sideBar.classList.remove('opacity-100','h-full');
}

// Custom Button
const button = document.querySelector('.custom-btn');
const pathElement = document.querySelector('#arrow-path');

const originalD = 'M21 7L1 7M21 7L15.0511 1M21 7L15.0511 13';
const newD = 'M25 7L1 7M25 7L19.0511 1M25 7L19.0511 13';

if (button) {
    button.addEventListener('mouseover', () => {
        pathElement.setAttribute('d', newD);
    });
    button.addEventListener('mouseout', () => {
        pathElement.setAttribute('d', originalD);
    });
}

const customBtn1 = document.querySelector('.custom-btn-1');
const customBtn2 = document.querySelector('.custom-btn-2');
const customBtn3 = document.querySelector('.custom-btn-3');
const customBtn4 = document.querySelector('.custom-btn-4');
const contactBtn = document.querySelector('.contact-form-btn');

const arrowPath1 = document.querySelector('#arrow-path-1');
const arrowPath2 = document.querySelector('#arrow-path-2');
const arrowPath3 = document.querySelector('#arrow-path-3');
const arrowPath4 = document.querySelector('#arrow-path-4');
const arrowContactPath = document.querySelector('#arrow-contact-path');

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

if (contactBtn) {
    contactBtn.addEventListener('mouseover', () => {
        arrowContactPath.setAttribute('d', newD);
    });
    contactBtn.addEventListener('mouseout', () => {
        arrowContactPath.setAttribute('d', originalD);
    });
}

// pricing page
const pricingFreeBtn = document.querySelector('.pricing-btn-1');
const pricingBasicBtn = document.querySelector('.pricing-btn-2');
const pricingGrowthBtn = document.querySelector('.pricing-btn-3');
const arrowPathPrFree = document.querySelector('#pricing-arrow-path-1');
const arrowPathPrBasic = document.querySelector('#pricing-arrow-path-2');
const arrowPathPrGrowth = document.querySelector('#pricing-arrow-path-3');

if (pricingFreeBtn) {
    pricingFreeBtn.addEventListener('mouseover', () => {
        arrowPathPrFree.setAttribute('d', newD); 
    });
    pricingFreeBtn.addEventListener('mouseout', () => {
        arrowPathPrFree.setAttribute('d', originalD);
    });
}
if (pricingBasicBtn) {
    pricingBasicBtn.addEventListener('mouseover', () => {
        arrowPathPrBasic.setAttribute('d', newD);
    });
    pricingBasicBtn.addEventListener('mouseout', () => {
        arrowPathPrBasic.setAttribute('d', originalD);
    });
}
if (pricingGrowthBtn) {
    pricingGrowthBtn.addEventListener('mouseover', () => {
        arrowPathPrGrowth.setAttribute('d', newD);
    });
    pricingGrowthBtn.addEventListener('mouseout', () => {
        arrowPathPrGrowth.setAttribute('d', originalD);
    });
}

const toggleBtn = document.getElementById('pricing-toggle-btn');
if (toggleBtn) {
    toggleBtn.addEventListener('change', () => {
        const offerLabel = document.getElementById('pricing-save')
        const annuallyPayLabel = document.getElementById('annually-label');
        const montlyPayLabel = document.getElementById('monthly-label');
        if (toggleBtn.value == "on") {
            toggleBtn.value = "";
            counter('basic-price', 999, 1099, 200);
            counter('growth-price', 2999, 3099, 200);
            montlyPayLabel.classList.add('pricing-lable-active');
            annuallyPayLabel.classList.remove('pricing-lable-active');
            offerLabel.classList.remove('pricing-save-active');
        } else {
            toggleBtn.value = "on";
            counter('basic-price', 1099, 999, 200);
            counter('growth-price', 3099, 2999, 200);
            offerLabel.classList.add('pricing-save-active');
            annuallyPayLabel.classList.add('pricing-lable-active');
            montlyPayLabel.classList.remove('pricing-lable-active');
        }
    })
    // counter function for pricing page, from start price to end price give a counter transition
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
}

// Policy Section 
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.li-index h1 a');
  
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
  
      if (scrollPosition > 0 && 
          scrollPosition >= sectionTop - sectionHeight / 3 &&
          scrollPosition < sectionTop + sectionHeight - sectionHeight / 3) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[index].classList.add('active');
      } else if (scrollPosition === 0) {
        navLinks.forEach(link => link.classList.remove('active'));
      }
    });
});