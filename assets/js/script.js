// Navbar
function openNavbar() {
    const sideBar = document.getElementById('nav-bar');
    sideBar.classList.add('opacity-100', 'h-full');

    // Remove scrolling
    document.body.style.overflow = 'hidden';
}

function closeNavbar() {
    const sideBar = document.getElementById('nav-bar');
    sideBar.classList.remove('opacity-100', 'h-full');

    // Restore scrolling
    document.body.style.overflow = '';
}

document.addEventListener("DOMContentLoaded", () => {

    // Hero Play Button Modal
    var openmodal = document.querySelectorAll('.modal-open');
    for (var i = 0; i < openmodal.length; i++) {
        openmodal[i].addEventListener('click', function (event) {
            event.preventDefault();
            toggleModal();
        });
    }

    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', toggleModal);
    }

    var closemodal = document.querySelectorAll('.modal-close');
    for (var i = 0; i < closemodal.length; i++) {
        closemodal[i].addEventListener('click', toggleModal);
    }

    document.onkeydown = function (evt) {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc");
        } else {
            isEscape = (evt.keyCode === 27);
        }
        if (isEscape && document.body.classList.contains('modal-active')) {
            toggleModal();
        }
    };

    function toggleModal() {
        const body = document.querySelector('body');
        const modal = document.querySelector('.modal');
        const iframe = document.querySelector('#modal-video');

        modal.classList.toggle('opacity-0');
        modal.classList.toggle('pointer-events-none');
        body.classList.toggle('modal-active');

        if (modal.classList.contains('opacity-0')) {
            // Remove the src attribute to stop the video
            iframe.removeAttribute('src');
        } else {
            // Re-add the src attribute to start the video
            iframe.setAttribute('src', 'https://www.youtube.com/embed/j90-QRILido');
        }
    }

    (function () {
        // Check if the elements exist before proceeding
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

            // Use requestAnimationFrame for better performance
            let lastToggleTime = 0;
            const toggleInterval = 2000; // 2000ms or 2 seconds

            function scheduleNextToggle(timestamp) {
                if (timestamp - lastToggleTime >= toggleInterval) {
                    toggleHeroChildMovement();
                    lastToggleTime = timestamp;
                }
                requestAnimationFrame(scheduleNextToggle);
            }

            // Start the toggling process
            requestAnimationFrame(scheduleNextToggle);
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

    let free, growth, enterprise;

  

    function fetchPricingData() {
        fetch('https://irisdoctors.in/api/v1/subscription/plans')
            .then(response => response.json())
            .then(data => {
                free = data[0];
                growth = data[1];
                enterprise = data[2];
                console.log(free);
                console.log(growth);
                console.log(enterprise);
            })
    }

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
        fetchPricingData();
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

    // Footer year
    const currentYear = new Date().getFullYear();
    // Set the content of the span with id "year" to the current year
    document.getElementById('year').textContent = currentYear;

    // Policy & Terms Section 
    window.addEventListener('scroll', function () {
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
    const runningSlider = document.getElementById('nav-slider');

    let scriptScrolling = false; // variable to control the scroll event actions
    let lastCall = 0; // Variable to track the last time the throttle function was called
    let scrollAnimation; // Variable to hold the reference to the animation frame

    if (featuresNavbar && featuresBody && runningSlider) {
        const sticky = featuresBody.offsetTop - 100;
        const bt_non_sticky = featuresBody.offsetHeight + featuresBody.offsetTop;

        window.addEventListener('scroll', toggleNav);

        function toggleNav() {
            const scrollY = window.scrollY;
            if (scrollY >= sticky) {
                featuresNavbar.classList.add("hr-scroll-sticky"); // make features navbar sticky.
                if (scrollY >= bt_non_sticky) {
                    featuresNavbar.classList.remove("hr-scroll-sticky"); // remove sticky
                }
                allFeatures.forEach(feature => {
                    let offset = feature.offsetTop;
                    let id = feature.getAttribute('id');
                    if (scrollY >= offset - 200) {
                        const specificFeature = featuresNavContainer.querySelector(`a[href="#${id}"]`);
                        runningSlider.style.left = specificFeature.offsetLeft + "px";
                        runningSlider.style.width = specificFeature.offsetWidth + 'px';
                    }
                });
                if (!scriptScrolling) {
                    window.addEventListener('scroll', throttle(handleScroll, 200)); // re-attach scroll event 
                }
            } else {
                featuresNavbar.classList.remove("hr-scroll-sticky");
            }
        }

        function handleScroll() {
            const scrollPosition = window.scrollY + window.innerHeight / 2; // Calculate the current scroll position, adjusting for the center of the screen
            const currentSectionIndex = Array.from(allFeatures).findIndex(section => {
                return scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight;
            });

            if (currentSectionIndex > 0) {
                const activeLink = featuresNavLinks[currentSectionIndex];
                const navWidth = featuresNavContainer.offsetWidth;
                const linkWidth = activeLink.offsetWidth;
                const targetScrollLeft = activeLink.offsetLeft - navWidth / 2 + linkWidth / 2;
                const activeLinkRight = activeLink.offsetLeft + linkWidth;
                const activeLinkLeft = activeLink.offsetLeft;

                const startScrollLeft = featuresNavContainer.scrollLeft;

                if (!scriptScrolling) {
                    if (activeLinkRight > navWidth) {
                        featuresNavContainer.scrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft);
                    } else if (activeLinkLeft < (navWidth / 2) + 180) {
                        featuresNavContainer.scrollLeft = 0;
                    }
                }
            }
        }

        function throttle(callback, delay) {
            return () => {
                const now = Date.now();
                if (now - lastCall >= delay) {
                    callback();
                    lastCall = now;
                }
            };
        }

        function scrollNavBarOnClickOnNavLink(linkElement) {
            const targetId = linkElement.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                scriptScrolling = true;
                targetElement.scrollIntoView(); // manually scrolling to target section
                let timer = null;
                window.addEventListener('scroll', function onScroll() {
                    if (timer !== null) {
                        clearTimeout(timer);
                    }
                    timer = setTimeout(function () {
                        scriptScrolling = false;
                        handleScroll();
                        window.removeEventListener('scroll', onScroll);
                    }, 300);
                }, false);
            }
        }

        featuresNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                window.removeEventListener('scroll', throttle(handleScroll, 200));
                scrollNavBarOnClickOnNavLink(link);
            });
        });

        featuresNavLinksHero.forEach(link => {
            link.addEventListener('click', () => {
                window.removeEventListener('scroll', throttle(handleScroll, 200));
                scrollNavBarOnClickOnNavLink(link);
            });
        });

        // Type writing Effect on hero section
        const sentences = ["smoothly", "quickly", "securely"];
        let sentenceIndex = 0;
        let charIndex = 0;
        let deleting = false; // Flag to track whether we're deleting text
        const typingSpeed = 150;
        const deletingSpeed = 100;
        const textElement = document.getElementById("text-typewriting");
        const textElementSecond = document.getElementById("text-typewriting-second");

        function typeWriter() {
            if (deleting) {
                if (textElement.textContent.length > 0) {
                    textElement.textContent = textElement.textContent.slice(0, -1);
                    textElementSecond.textContent = textElementSecond.textContent.slice(0, -1);
                    setTimeout(typeWriter, deletingSpeed);
                } else {
                    deleting = false;
                    sentenceIndex = (sentenceIndex + 1) % sentences.length;
                    charIndex = 0;
                    typeWriter();
                }
            } else {
                if (charIndex < sentences[sentenceIndex].length) {
                    textElement.textContent += sentences[sentenceIndex].charAt(charIndex);
                    textElementSecond.textContent += sentences[sentenceIndex].charAt(charIndex);
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
});