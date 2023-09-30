// Get all menu links
const menuLinks = document.querySelectorAll('.menu-link');

let touchedLinks = {};
const tapCounts = {};

menuLinks.forEach((menuLink) => {
    tapCounts[menuLink] = 0;  // Initialize each link with a tap count of 0
});

// Add click event listeners to each menu link
menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', (event) => {
        const dropdown = menuLink.querySelector('.vertical');
        if (isMobileDevice() && dropdown) {
            tapCounts[menuLink] += 1;  // Increment the tap count

            if (tapCounts[menuLink] === 1) {
                // First tap, show dropdown
                event.preventDefault();
                dropdown.style.opacity = "1";
            } else if (tapCounts[menuLink] === 2) {
                // Second tap, do nothing but keep the dropdown visible
                event.preventDefault();
            } else if (tapCounts[menuLink] === 3) {
                // Third tap, navigate to the link and reset tap count
                navigateToLink(menuLink.querySelector('a').getAttribute('href'));
                tapCounts[menuLink] = 0;
            }
        } else {
            // Not on a mobile device, just navigate
            navigateToLink(menuLink.querySelector('a').getAttribute('href'));
        }
    });
});

function navigateToLink(href) {
    if (window.location.href.endsWith(href)) {
        window.location.href = 'index.html';
    } else {
        window.location.href = href;
    }
}

function isMobileDevice() {
    return (window.innerWidth <= 800) && (window.innerHeight <= 600); 
}

// The following two functions seem to be repeated in your code, so I'm only keeping the class-based version.
function hideAllInfoBoxes() {
    const infoBoxes = document.querySelectorAll('.info-box');
    infoBoxes.forEach(box => {
        box.classList.remove('showing');
    });
}

function toggleInfoBox(id) {
    const infoBox = document.getElementById(id);
    if (!infoBox.classList.contains('showing')) {
        infoBox.classList.add('showing');
    } else {
        infoBox.classList.remove('showing');
    }
}

document.getElementById('productions').addEventListener('click', function() {
    hideAllInfoBoxes();
    toggleInfoBox('productions-info');
});

document.getElementById('compositions').addEventListener('click', function() {
    hideAllInfoBoxes();
    toggleInfoBox('compositions-info');
});

document.getElementById('more').addEventListener('click', function() {
    hideAllInfoBoxes();
    toggleInfoBox('more-info');
});

// Reset tap count if user clicks outside of a menu link.
document.addEventListener('click', (event) => {
    if (!event.target.closest('.menu-link')) {
        menuLinks.forEach((menuLink) => {
            tapCounts[menuLink] = 0;
            const dropdown = menuLink.querySelector('.vertical');
            if (dropdown) {
                dropdown.style.opacity = "0";  // Hide the dropdown
            }
        });
    }
});
