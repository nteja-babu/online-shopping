// Import records and card_content from Data_js.js
import { records, card_content,ele_content, gad_content, clo_content } from './Data_js.js';

//console.log(card_content) //#debugging

/* used for Devetional.HTML page */
function displayRecords() {
    const contentDiv = document.getElementById('content');
    records.forEach(record => {
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
       contentDiv.appendChild(postDiv);
    });
}

/*-----------------------------------------------------------------------------------------*/
/* used for index.HTML page */
function Showcards() {
    const contentDiv = document.getElementById('carcontents'); 
    if (!contentDiv) {
        console.error('Error: No element with id "card_content" found.');
        return;
    }

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

        contentDiv.appendChild(postDiv);
    });
}

/*-----------------------------------------------------------------------*/
/* used for Electornics.HTML page */

function eleShowcards() {
    const contentDiv = document.getElementById('elecontents'); // Get the content div

    if (!contentDiv) {
        console.error('Error: No element with id "card_content" found.');
        return;
    }
    ele_content.forEach(record => {        
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
        contentDiv.appendChild(postDiv);
    });
}

/*--------------------------------------------------------------------------------------------------*/
/* used for Gadgets.HTML page */

function gadShowcards() {
    const contentDiv = document.getElementById('gadcontents'); // Get the content div

    if (!contentDiv) {
        console.error('Error: No element with id "card_content" found.');
        return;
    }
    gad_content.forEach(record => {        
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
        contentDiv.appendChild(postDiv);
    });
}

/*--------------------------------------------------------------------------------------------------*/
/* used for Clothing.HTML page */

function cloShowcards() {
    const contentDiv = document.getElementById('clocontents'); // Get the content div

    if (!contentDiv) {
        console.error('Error: No element with id "card_content" found.');
        return;
    }
    clo_content.forEach(record => {        
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
        contentDiv.appendChild(postDiv);
    });
}
/*--------------------------------------------------------------------------------------------------*/
/* Dynamic page detuction should not*/


document.addEventListener('DOMContentLoaded', () => {
    // Check the page's URL or a specific element to determine which function to run
    if (window.location.pathname === '/online-shopping/Devotional.html') { // Replace '/page1.html' with the correct URL path
        displayRecords();
    } else if (window.location.pathname === '/online-shopping/') { // Replace '/page2.html' with the correct URL path
        Showcards();
    } else if (window.location.pathname === '/online-shopping/Electronic.html') { // Replace '/page2.html' with the correct URL path
        eleShowcards();
    } else if (window.location.pathname === '/online-shopping/Gadget.html') { // Replace '/page2.html' with the correct URL path
        gadShowcards();
    } else if (window.location.pathname === '/online-shopping/Clothing.html') { // Replace '/page2.html' with the correct URL path
        cloShowcards();
    }
})