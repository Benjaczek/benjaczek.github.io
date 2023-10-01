body {
    background-color: black;
    color: white;
    font-family: Arial, sans-serif;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start; /* Align items near the top */
    height: 200vh;
    padding-top: 150px; /* Add some top padding to create spacing */
    /*padding-left: px; Add some top padding to create spacing */

}

.name {
    font-size: 3em;
    margin-bottom: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    display: flex; /* This will align child elements horizontally by default */
    flex-wrap: wrap; /* This allows for wrapping in case the content exceeds the screen width */
    align-items: flex-start; /* This vertically aligns the items in the middle of the flex container */
    justify-content: flex-start; /* This centers the items horizontally */
}


.letter-section {
    display: inline-block;
    text-align: center;
    position: relative;
    margin-right: 50px; /* Add margin between each name */
}

.horizontal {
    display: flex;
    align-items: center;
}

.boxed {
    border: 2px solid white;
    padding: 5px;
    display: inline-block;
}

.next-to {
    display: inline-block;
    vertical-align: middle; /* Change top to middle */
    margin-left: 5px;
}



/* This is the default state of the dropdown when it's not being hovered over or clicked */
.vertical {
    display: none;
    text-align: left;
    margin-top: 0.1em;
    opacity: 0; /* Initially set opacity to 0 (hidden) */
    transition: opacity 0.9s ease, color 0.9s ease; /* Add a transition for opacity and color */
}

/* When hovering over the letter-section, display the dropdown */
.letter-section:hover .vertical {
    display: block; /* Display the dropdown on hover */
    opacity: 1;
    color: grey;; /* Change the color to grey */
    transition: color 0.9s ease, border-color 0.9s ease; /* Add transitions for color and border-color */
}

/* This is the state of the dropdown when it's clicked and should "stick" */
.sticky-dropdown {
    display: block !important;
    opacity: 1 !important;
}



.letter-section .boxed {
    color: white;
    border-color: white;
    transition: color 0.9s ease, border-color 0.9s ease; /* Add transitions for color and border-color */
}




.letter-section:hover .boxed {
    color:  grey; /* Change the color to grey */
    border-color: grey; /* Change the border color to grey */
    transition: color 0.9s ease, border-color 0.9s ease; /* Add transitions for color and border-color */
}



a {
    text-decoration: none; /* Remove underlines from links */
    color: white; /* Set link color to white */
}


.bio-container {
    position: relative;
    background-color: black;
    padding: 20px;
    border: 2px solid white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin-top: 20px;
    width: 800px;   /* Example width */
    height: 250px;  /* Example height */
    overflow: hidden; 
    height: auto;  /* Auto height for the container */
    max-height: 220px; 
    max-width: 800px;
    margin: 0 auto;
}

/* Styling for the bio container */
.art-container {
    background-color: black; /* Set the background color to white */
    padding: 20px; /* Add padding to create space between content and box */
    border: 2px solid white; /* Add a white border */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Add a shadow effect */
    margin-top: 20px; /* Add margin to create space between the box and other elements */
}

/* Styling for the bio container */
.kontakt-container {
    background-color: black; /* Set the background color to white */
    padding: 20px; /* Add padding to create space between content and box */
    border: 2px solid white; /* Add a white border */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Add a shadow effect */
    margin-top: 20px; /* Add margin to create space between the box and other elements */
}



.art-links {
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
    cursor: pointer;
}

.art-link {
    font-size: 24px;
    transition: color 0.3s;
}

.art-link:hover {
    color: #777; /* Change to desired hover color */
}

.info-box {
    opacity: 0;
    transition: opacity 0.9s ease-out; /* 0.5s is the duration; you can adjust it */
    visibility: hidden; 
    position: absolute; /* Add this */
    background: black;
    border: 2px solid white; /* Add a white border */
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
}

.info-box.showing {
    opacity: 1;
    visibility: visible;
    position: relative; /* Add this */
}

.video-container {
    position: relative;
    padding-bottom: 56.25%; /* Aspect Ratio 16:9 */
    padding-top: 25px;
    height: 0;
    overflow: hidden;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.button {
    color: white;
    border: 1px solid white; /* added border */
    padding: 10px 15px; /* padding to make buttons more visually appealing */
    display: inline-block; /* to ensure that padding and borders are applied */
    cursor: pointer; /* to indicate that it's clickable */
    transition: color 0.9s ease, border-color 0.9s ease; /* transitions */
}

.button:hover, .button:active {
    color: grey;
    border-color: grey;
}



.impressum {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: lightgrey;
    padding: 5px;
    background: black; /* Optional: Adds a slight white background for better readability */
}



.big_words_container {
    position: absolute;
    font-weight: bold;
    bottom: 200px;
    width: 100%;
    text-align: center;
    font-size: 20px;
    color: lightgrey;
    padding: 5px;
    background: black; /* Optional: Adds a slight white background for better readability */
}

#viewMoreBtn {
    display: inline-block;
    padding: 5px 5px;  /* Padding around the text for size */
    background-color: #333;  /* Dark background color */
    color: white;  /* Text color */
    font-size: 16px;  /* Text size */
    border: none;  /* Remove default borders */
    border-radius: 5px;  /* Rounded corners */
    cursor: pointer;  /* Change cursor to hand on hover */
    transition: background-color 0.3s ease;  /* Transition effect for hover */
    text-align: center;  /* Center the text */
    margin-top: 1px;  /* Add space above the button */
}

/* Change button color on hover */
#viewMoreBtn:hover {
    background-color: #555;
}



@media screen and (max-width: 600px) {
    .name {
        font-size: 1em;
        margin-bottom: 2rem;
    }

    body {
        overflow-x: hidden;
        padding-top: 50px; /* Reduced from 150px */
    }

    .letter-section {
        margin-right: 20px; /* Adjust the margin for mobile */
    }

    .boxed {
        padding: 3px; /* Reduce padding on mobile */
    }

    .fixed-container {
        float: none;  /* reset any floats */
        margin-left: auto;  /* centering */
        margin-right: auto; /* centering */
        width: 80%;/* or any preferred width, e.g., 90% to allow some margin */
        max-width: none;
        align-items: flex-start; /* This vertically aligns the items in the middle of the flex container */
        justify-content: flex-start; /* ensure any desktop-specific width doesn't interfere */
    }

    .bio-container, .art-container, .kontakt-container {
        margin-left: auto;
        margin-right: auto;
        padding: 5px; /* Reduced from 20px */
    }

    .art-links {
        font-size: 1em;
    }

    .art-link {
        font-size: 18px;
        transition: color 0.3s;
    }

    h1 {
        font-size: 20px; /* Adjust as needed */
    }
}

/* For screens smaller than 600px (typically smartphones) */
@media (max-width: 600px) {
    .bio-container {
        padding: 15px;
        /* Adjust any other styles as needed for smaller screens */
    }
}

/* For screens between 600px and 900px (typically tablets) */
@media (min-width: 601px) and (max-width: 900px) {
    .bio-container {
        padding: 20px;
        /* Adjust other styles for medium screens if needed */
    }
}


@media (max-width: 600px) {
    .bio-container h1 {
        font-size: 24px; /* or whatever size you find appropriate */
        width: 95%; /* You can adjust this as per your design */
    }
    .bio-container p {
        font-size: 16px; /* or another suitable size */
    }
}

@media (max-width: 600px) {
    #viewMoreBtn {
        padding: 12px 20px; /* Increase the button's padding */
        font-size: 18px; /* Increase font size for better visibility */
    }
}



