// Get all menu links
const menuLinks = document.querySelectorAll('.menu-link');

let touchedLinks = {};

// Add click event listeners to each menu link
menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', (event) => {
        const href = menuLink.getAttribute('href');

        if (isMobileDevice()) {
            // If the link hasn't been touched yet, show the dropdown or hover effect
            if (!touchedLinks[href]) {
                event.preventDefault();

                // Add your dropdown/hover effect here
                // For example: menuLink.classList.add('hover-effect');

                // Mark this link as touched
                touchedLinks[href] = true;
            } else {
                // If the link has been touched once, then navigate
                navigateToLink(href);
            }
        } else {
            // Not on a mobile device, just navigate
            navigateToLink(href);
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
