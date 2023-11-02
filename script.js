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

let composition = document.getElementById('compositions');
if (composition) {
    composition.addEventListener('click', function() {
        hideAllInfoBoxes();
        toggleInfoBox('composition-info');
    });
}

let production = document.getElementById('productions');
if (production) {
    production.addEventListener('click', function() {
        hideAllInfoBoxes();
        toggleInfoBox('production-info');
    });
}

let soundArt = document.getElementById('soundArts');
if (soundArt) {
    soundArt.addEventListener('click', function() {
        hideAllInfoBoxes();
        toggleInfoBox('soundArt-info');
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

document.addEventListener('DOMContentLoaded', function() {
    var letterSections = document.querySelectorAll('.letter-section, .art-link, .info-box');
    var overlay = document.querySelector('.overlay');

    letterSections.forEach(function(section) {
        section.addEventListener('mouseover', function() {
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        });
        section.addEventListener('mouseout', function() {
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        });
    });
});



// JavaScript to show work details
function showWorkDetails(workId) {
  var details = document.getElementById(workId + '-details');
  if (details) {
    details.style.display = 'block'; // Or use 'flex', depending on your layout
  }
}

// JavaScript to close work details
function closeWorkDetails(workId) {
  var details = document.getElementById(workId + '-details');
  if (details) {
    details.style.display = 'none';
  }
}

