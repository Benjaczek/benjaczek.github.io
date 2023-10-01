// Detect if the device is touch-enabled
let isTouchDevice = ('ontouchstart' in window || navigator.maxTouchPoints);

const menuLinks = document.querySelectorAll('.menu-link');
const bioContainer = document.querySelector('.bio-container');
const viewMoreBtn = document.getElementById('viewMoreBtn');
const hiddenBio = document.getElementById('hiddenBio');

menuLinks.forEach((menuLink) => {
    const dropdown = menuLink.querySelector('.vertical');
    if (isTouchDevice) {
        menuLink.addEventListener('click', (event) => {
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            } else {
                dropdown.style.display = 'block';
                event.preventDefault(); // prevent the immediate navigation
            }
        });
    } else {
        // Desktop behavior: show on hover and hide on mouseout
        menuLink.addEventListener('mouseover', () => {
            dropdown.style.display = 'block';
        });
        menuLink.addEventListener('mouseout', () => {
            dropdown.style.display = 'none';
        });
    }
});

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

function hideAllInfoBoxes() {
    const infoBoxes = document.querySelectorAll('.info-box');
    infoBoxes.forEach(box => {
        box.classList.remove('showing');
    });
}
