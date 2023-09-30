// Get all menu links
const menuLinks = document.querySelectorAll('.menu-link');

let touchedLinks = {};

// Add click event listeners to each menu link
menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', (event) => {
        if (isMobileDevice()) {
            const dropdown = menuLink.querySelector('.vertical');
            if (dropdown) {
                if (dropdown.style.opacity !== "1") {
                    event.preventDefault();
                    event.stopPropagation();
                    dropdown.style.opacity = "1";
                    touchedLinks[menuLink] = true;
                } else if (touchedLinks[menuLink]) {
                    navigateToLink(menuLink.querySelector('a').getAttribute('href'));
                }
            }
        } else {
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
    // Adjust the values to suit your requirements
}

// These are the new functions and event listeners
function hideAllInfoBoxes() {
    const infoBoxes = document.querySelectorAll('.info-box');
    infoBoxes.forEach(box => {
        box.style.display = 'none';
    });
}

function toggleInfoBox(id) {
    const infoBox = document.getElementById(id);
    if (infoBox.style.display === 'none' || infoBox.style.display === '') {
        infoBox.style.display = 'block';
    } else {
        infoBox.style.display = 'none';
    }
}

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
