// Get all menu links
const menuLinks = document.querySelectorAll('.menu-link');

// Add click event listeners to each menu link
menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior

        // Get the href attribute of the clicked link
        const href = menuLink.getAttribute('href');

        // Check if the current page matches the link's href
        if (window.location.href.endsWith(href)) {
            // If it matches, go back to the index page
            window.location.href = 'index.html';
        } else {
            // If it doesn't match, go to the link's href
            window.location.href = href;
        }
    });
});
