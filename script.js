// Get all menu links
const menuLinks = document.querySelectorAll('.menu-link');
const bioContainer = document.querySelector('.bio-container');
const viewMoreBtn = document.getElementById('viewMoreBtn');
const hiddenBio = document.getElementById('hiddenBio');



menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', (event) => {
        const dropdown = menuLink.querySelector('.vertical');

        if (isMobileDevice() && dropdown) {
            if (!dropdown.classList.contains('sticky-dropdown')) {
                // Show dropdown on first click
                event.preventDefault();
                dropdown.classList.add('sticky-dropdown');
            } else {
                // Navigate on the second click
                navigateToLink(menuLink.querySelector('a').getAttribute('href'));
            }
        } else {
            // For non-mobile devices, navigate on click
            navigateToLink(menuLink.querySelector('a').getAttribute('href'));
        }
    });
});

function navigateToLink(href) {
    window.location.href = href;
}

function isMobileDevice() {
    return (window.innerWidth <= 800) && (window.innerHeight <= 600); 
}

// Existing info box logic
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

if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', function() {
        bioContainer.style.maxHeight = 'none';
        viewMoreBtn.style.display = 'none';
    });
}

let productions = document.getElementById('productions');
if (productions) {
    productions.addEventListener('click', function() {
        hideAllInfoBoxes();
        toggleInfoBox('productions-info');
    });
}

let compositions = document.getElementById('compositions');
if (compositions) {
    compositions.addEventListener('click', function() {
        hideAllInfoBoxes();
        toggleInfoBox('compositions-info');
    });
}

let more = document.getElementById('more');
if (more) {
    more.addEventListener('click', function() {
        hideAllInfoBoxes();
        toggleInfoBox('more-info');
    });
}

if (viewMoreBtn && hiddenBio) {
    viewMoreBtn.addEventListener('click', function() {
        if (hiddenBio.style.display === 'none') {
            hiddenBio.style.display = 'block';
            viewMoreBtn.innerHTML = "View Less";
        } else {
            hiddenBio.style.display = 'none';
            viewMoreBtn.innerHTML = "View More";
        }
    });
}
