// Import records and card_content from Data_js.js
import { records, card_content } from './Data_js.js';

// Function to display the records (blog posts)
console.log(card_content)
function displayRecords() {
    const contentDiv = document.getElementById('content'); // Get the content div

    // Loop through the records and create HTML for each
    records.forEach(record => {
        // Create the HTML structure for each record (blog post)
        const postDiv = document.createElement('div');
        postDiv.classList.add('p-4', 'p-md-5', 'mb-4', 'rounded', 'text-body-emphasis', 'bg-body-secondary');

        postDiv.innerHTML = `
            <div class="col-lg-6 px-0">
                <h1 class="display-4 fst-italic text-center">${record.title}</h1>
                <p class="lead my-3">${record.lead}</p>
            </div>
        `;

        // Append the created div to the content div
        contentDiv.appendChild(postDiv);
    });
}

// Function to display the cards
function Showcards() {
    const contentDiv = document.getElementById('carcontents'); // Get the content div
    
    // Check if contentDiv is found (this prevents errors if the ID doesn't exist)
    if (!contentDiv) {
        console.error('Error: No element with id "card_content" found.');
        return;
    }

    // Loop through the card_content array and create HTML for each card
    card_content.forEach(record => {
        // Create the HTML structure for each card
        const postDiv = document.createElement('div');
        postDiv.classList.add('col-lg-4'); // Ensures 3 cards per row

        postDiv.innerHTML = `
            <div>
                <img class="bd-placeholder-img rounded-circle" src="${record.IMG}" alt="Image" style="width: 250px; height: 250px; object-fit: cover; object-position: center;">
                <h2 class="fw-normal">${record.HEADING}</h2>
                <p>${record.MATTER}</p>
                <p><a href="${record.PATH}" class="btn btn-outline-primary rounded-pill">Click Here</a></p>
            </div>
        `;

        // Append the created card to the content div
        contentDiv.appendChild(postDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Check the page's URL or a specific element to determine which function to run
    if (window.location.pathname === '/Devotional.html') { // Replace '/page1.html' with the correct URL path
        displayRecords();
    } else if (window.location.pathname === '/') { // Replace '/page2.html' with the correct URL path
        Showcards();
    }
});
