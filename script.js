// Array of records
const records = [
    {
        title: "Title of the first blog post",
        lead: "First post content goes here. Inform readers about what this post is about."
    },
    {
        title: "Title of the second blog post",
        lead: "Second post content goes here. More information for readers about this post."
    },
    {
        title: "Title of the third blog post",
        lead: "Third post content goes here. A brief summary of this post for readers."
    },
    {
        title: "Title of the fourth blog post",
        lead: "Fourth post content goes here. An overview of the fourth post."
    },
    {
        title: "Title of the fifth blog post",
        lead: "Fifth post content goes here. A description or summary of the fifth blog post."
    },
    {
        title: "Hi tejat",
        lead: "Fifth sample content goes here. A description or summary of the fifth blog post."
    }
];

// Function to display the records
function displayRecords() {
    const contentDiv = document.getElementById('content'); // Get the content div

    // Loop through the records and create HTML for each
    records.forEach(record => {
        // Create the HTML structure
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

// Call the function to display records when the page loads
displayRecords();
