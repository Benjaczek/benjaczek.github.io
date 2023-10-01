// Get all menu links
/*const menuLinks = document.querySelectorAll('.menu-link');*/
const bioContainer = document.querySelector('.bio-container');
const viewMoreBtn = document.getElementById('viewMoreBtn');
const hiddenBio = document.getElementById('hiddenBio');
const menuLinks = document.querySelectorAll('.letter-section');



menuLinks.forEach((menuLink) => {
    const dropdown = menuLink.querySelector('.vertical');

    // Toggle the dropdown when the box is clicked
    menuLink.addEventListener('click', (event) => {
        // Check if the event target (the clicked element) is the dropdown/link
        if (event.target === dropdown || dropdown.contains(event.target)) {
            // If the dropdown or an element inside it is clicked, we don't prevent the default behavior (which allows links to work)
            return;
        }
        
        // Toggle the show-dropdown class on the letter-section
        menuLink.classList.toggle('show-dropdown');
        
        // Prevent the event from bubbling up further
        event.stopPropagation();
    });

    // Optionally, hide the dropdown when clicking anywhere outside the box
    document.body.addEventListener('click', (event) => {
        if (!menuLink.contains(event.target)) {
            menuLink.classList.remove('show-dropdown');
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
