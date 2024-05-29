// Navbar
function openNavbar() {
    const sideBar = document.getElementById('nav-bar');
    sideBar.classList.add('opacity-100','h-full');
}

function closeNavbar() {
    const sideBar = document.getElementById('nav-bar');
    sideBar.classList.remove('opacity-100','h-full');
}

// hero page 
// if(document.getElementById('mv-left-arrow')){
//     toggleHeroChildMovement();
//     setInterval(function(){
//         toggleHeroChildMovement();
//     }, 2000);
    
//     function toggleHeroChildMovement(){
//         var mv_left_arrow = document.getElementById('mv-left-arrow');
//         var mv_right_arrow = document.getElementById('mv-right-arrow');
       
//         mv_left_arrow.classList.toggle("mv-left-arrow-active");
//         mv_right_arrow.classList.toggle("mv-right-arrow-active");
//     }
// }
(function() {
    // Check if the element exists before proceeding
    var mv_left_arrow = document.getElementById('mv-left-arrow');
    var mv_right_arrow = document.getElementById('mv-right-arrow');

    if (mv_left_arrow && mv_right_arrow) {
        // Function to toggle classes
        function toggleHeroChildMovement() {
            mv_left_arrow.classList.toggle("mv-left-arrow-active");
            mv_right_arrow.classList.toggle("mv-right-arrow-active");
        }

        // Toggle classes initially
        toggleHeroChildMovement();

        // Use requestAnimationFrame to schedule the next toggle
        function scheduleNextToggle() {
            setTimeout(function() {
                toggleHeroChildMovement();
                scheduleNextToggle();
            }, 2000);
        }

        // Start the toggling process
        scheduleNextToggle();
    }
})();



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
          scrollPosition < sectionTop + sectionHeight - sectionHeight / 3 &&
          navLinks[index]) { 
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[index].classList.add('active');
      } else if (scrollPosition === 0) {
        navLinks.forEach(link => link.classList.remove('active'));
      }
    });
  });
  

// features page
const featuresNavbar = document.getElementById('features-hr-scroll');
const featuresBody = document.getElementById('features');
const allFeatures = document.querySelectorAll('.features-sec');
const featuresNavLinks = document.querySelectorAll('#features-hr-scroll a');
const featuresNavLinksHero = document.querySelectorAll('#featuresLinks a');
const featuresNavContainer = document.getElementById('featuresNav');
let scriptScrolling = false; // variable to control the scroll event actions
if (featuresNavbar) {
    window.addEventListener('scroll', toggleNav)
    var sticky = featuresBody.offsetTop - 100;
    var bt_non_sticky = featuresBody.offsetHeight + featuresBody.offsetTop;
    var runningSlider = document.getElementById('nav-slider');

    function toggleNav() {
        if (window.scrollY >= sticky) {
            featuresNavbar.classList.add("hr-scroll-sticky"); // make features navbar sticky.
            if (window.scrollY >= bt_non_sticky) {
                featuresNavbar.classList.remove("hr-scroll-sticky"); // remove sticky
            }
            allFeatures.forEach(feature => {
                let top = window.scrollY;
                let offset = feature.offsetTop;
                let id = feature.getAttribute('id');
                // running slider below features navbar.
                if (top >= offset - 200) {
                    const specificFeature = featuresNavContainer.querySelector(`a[href="#${id}"]`);
                    runningSlider.style.left = specificFeature.offsetLeft + "px";
                    runningSlider.style.width = specificFeature.offsetWidth + 'px';
                }
            })
            if (!scriptScrolling) {
                window.addEventListener('scroll', throttle(handleScroll, 200)); // re-attach scroll event 
            }
        } else {
            featuresNavbar.classList.remove("hr-scroll-sticky");
        }
    }

    // Get all the sections and convert the NodeList to an array
    const sections = Array.from(allFeatures);
    let lastCall = 0; // Variable to track the last time the throttle function was called
    let scrollAnimation; // Variable to hold the reference to the animation frame
    // Function to handle window scrolling
    function handleScroll() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;   // Calculate the current scroll position, adjusting for the center of the screen
        const currentSectionIndex = sections.findIndex(section => {  // Find the index of the section currently in view
            return scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight;
        });

        // If a section is in view, update the active navigation link and scroll the navigation bar
        if (currentSectionIndex > 0) {
            const activeLink = featuresNavLinks[currentSectionIndex];
            const navWidth = featuresNavContainer.offsetWidth;
            const linkWidth = activeLink.offsetWidth;
            const targetScrollLeft = activeLink.offsetLeft - navWidth / 2 + linkWidth / 2;
            const acitveLinkRight = activeLink.offsetLeft + linkWidth;
            const activeLinkLeft = activeLink.offsetLeft;

            // if (scrollAnimation) cancelAnimationFrame(scrollAnimation);
            const startScrollLeft = featuresNavContainer.scrollLeft;
            // scrollAnimation = requestAnimationFrame(function animate(time) {
            if (!scriptScrolling) {
                if (acitveLinkRight > navWidth) {
                    featuresNavContainer.scrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft)
                } else if (activeLinkLeft < (navWidth / 2) + 180) {
                    featuresNavContainer.scrollLeft = 0;
                }
            }
            // });
        }
    };

    // Throttle function limits the frequency of the handleScroll function
    function throttle(callback, delay) {
        return () => {
            const now = Date.now();
            // Check if enough time has passed since the last call
            if (now - lastCall >= delay) {
                callback();
                // Update the lastCall timestamp to the current time
                lastCall = now;
            }
        };
    };

    // remove event listener from navbar
    featuresNavLinks.forEach(link => {
        link.addEventListener('click', event => {
            window.removeEventListener(scroll, throttle(handleScroll, 1000))
            scrollNavBarOnClickOnNavLink(link)
        });
    });
    // remove event listener from hero section navigation
    featuresNavLinksHero.forEach(link => {
        link.addEventListener('click', event => {
            window.removeEventListener(scroll, throttle(handleScroll, 1000))
            scrollNavBarOnClickOnNavLink(link)
        });
    });
    function scrollNavBarOnClickOnNavLink(linkElement) {
        const targetId = linkElement.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        scriptScrolling = true;
        targetElement.scrollIntoView() // mannually scrolling to target section.
        var timer = null;
        window.addEventListener('scroll', function () {
            if (timer !== null) {
                clearTimeout(timer);
            }
            timer = setTimeout(function () {
                scriptScrolling = false;
                handleScroll();
            }, 300);
        }, false);
    }

    // Type writing Effect on hero section
    const sentences = [
        "smoothly,",
        "quickly,",
        "and securely."
    ];
    let sentenceIndex = 0;
    let charIndex = 0;
    let deleting = false; // Flag to track whether we're deleting text
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const textElement = document.getElementById("text-typewriting");
    const textElement_second = document.getElementById("text-typewriting-second");


    function typeWriter() {
        // alert("");
        if (deleting) {
            if (textElement.textContent.length > 0) {
                textElement.textContent = textElement.textContent.slice(0, -1);
                textElement_second.textContent = textElement_second.textContent.slice(0, -1);
                setTimeout(typeWriter, deletingSpeed);
            } else {
                deleting = false;
                sentenceIndex++;
                if (sentenceIndex >= sentences.length) {
                    sentenceIndex = 0;
                }
                charIndex = 0;
                typeWriter();
            }
        } else {
            if (charIndex < sentences[sentenceIndex].length) {
                textElement.textContent += sentences[sentenceIndex].charAt(charIndex);
                textElement_second.textContent += sentences[sentenceIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                setTimeout(() => {
                    deleting = true;
                    typeWriter();
                }, 1000);
            }
        }
    }
    typeWriter();
}