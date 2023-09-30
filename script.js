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
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
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

.vertical {
    display: block;
    text-align: left;
    margin-top: 0.1em;
    opacity: 0; /* Initially set opacity to 0 (hidden) */
    transition: opacity 0.9s ease, color 0.9s ease; /* Add a transition for opacity and color */
}

.letter-section .boxed {
    color: white;
    border-color: white;
    transition: color 0.9s ease, border-color 0.9s ease; /* Add transitions for color and border-color */
}

.letter-section:hover .vertical {
    opacity: 1;
    color: grey;; /* Change the color to grey */
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


/* Styling for the bio container */
.bio-container {
    background-color: black; /* Set the background color to white */
    padding: 20px; /* Add padding to create space between content and box */
    border: 2px solid white; /* Add a white border */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Add a shadow effect */
    margin-top: 20px; /* Add margin to create space between the box and other elements */
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
    display: none;
    background: black;
    border: 2px solid white; /* Add a white border */
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
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


.impressum {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
    font-size: 10px;
    color: lightgrey;
    padding: 5px;
    background: black; /* Optional: Adds a slight white background for better readability */
}




@media screen and (max-width: 768px) {
    .name {
        font-size: 1em;
    }

    .letter-section:active .vertical {
        opacity: 1;
    }

    body {
        overflow-x: hidden;
        padding-top: 50px; /* Reduced from 150px */
    }

    .fixed-container {
        float: none;  /* reset any floats */
        margin-left: auto;  /* centering */
        margin-right: auto; /* centering */
        width: 100%; /* or any preferred width, e.g., 90% to allow some margin */
        max-width: none; /* ensure any desktop-specific width doesn't interfere */
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



