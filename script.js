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

let filmScore = document.getElementById('filmScores');
if (filmScore) {
    filmScore.addEventListener('click', function() {
        hideAllInfoBoxes();
        toggleInfoBox('filmScore-info');
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
    var letterSections = document.querySelectorAll('.letter-section, .art-link, .info-box, .bio-container');
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

function showWorkDetails(workId) {
  var details = document.getElementById(workId + '-details');
  if (details) {
    details.style.display = 'block';
    details.classList.add('showing');
  }
}

// Function to close work details
function closeWorkDetails(workId) {
    var details = document.getElementById(workId + '-details');
    if (details) {
        // Find all iframes within the details section
        var iframes = details.getElementsByTagName('iframe');
        
        // Loop through each iframe and reset its src attribute to stop the video
        for (var i = 0; i < iframes.length; i++) {
            var iframeSrc = iframes[i].src;
            iframes[i].src = iframeSrc; // Resetting the src attribute to its current value reloads the iframe and stops the video
        }

        // Hide the details section
        details.style.display = 'none';
        details.classList.remove('showing');
    }
}


// Remove the inline 'onclick' in your HTML and add this to your script.js
document.addEventListener('DOMContentLoaded', function() {
   
    document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('click', function() {
      var workId = this.getAttribute('data-work-id');
      showWorkDetails(workId);
    });
  });

  // Event listeners for closing work details
  document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function() {
      var workId = this.getAttribute('data-work');
      closeWorkDetails(workId);
    });
  });
});




document.querySelectorAll('.work-btn').forEach(button => {
  button.addEventListener('click', function() {
    var infoBox = this.nextElementSibling;
    // First close all other info boxes
    document.querySelectorAll('.info-box').forEach(box => {
      if (box !== infoBox) {
        box.style.maxHeight = '0';
        box.classList.remove('showing');
      }
    });

    if (infoBox.classList.contains('showing')) {
      // Close the current info box
      infoBox.style.maxHeight = '0';
      infoBox.classList.remove('showing');
    } else {
      // Open the new info box
      // Show the element to measure scrollHeight
      infoBox.style.display = 'block'; 
      infoBox.style.maxHeight = infoBox.scrollHeight + 'px';
      // Delay adding 'showing' class until after max-height is set
      setTimeout(() => {
        infoBox.classList.add('showing');
      }, 10); // Timeout allows max-height to apply
    }
  });
});

