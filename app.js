// Function to handle form submission
function handleFormSubmission(e) {
    e.preventDefault();

    // Get form values
    var animeName = document.getElementById('animeName').value;
    var animeYear = document.getElementById('animeYear').value;
    var animeRatings = document.getElementById('animeRatings').value;
    var animeCountry = document.getElementById('animeCountry').value;

    // Check if form is in edit mode
    var isEdit = document.getElementById('animeId').value !== '';

    if (isEdit) {
        // If in edit mode, update existing anime card
        var animeId = document.getElementById('animeId').value;
        var existingAnimeCard = document.getElementById(animeId);
        existingAnimeCard.querySelector('.card-title').innerText = animeName;
        existingAnimeCard.querySelector('.year').innerText = 'Year: ' + animeYear;
        existingAnimeCard.querySelector('.ratings').innerText = 'Ratings: ' + animeRatings;
        existingAnimeCard.querySelector('.country').innerText = 'Country: ' + animeCountry;
    } else {
        // If not in edit mode, create new anime card
        var animeCard = document.createElement('div');
        animeCard.classList.add('col-md-4');
        animeCard.id = Date.now(); // Unique ID for each anime card
        animeCard.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <h3 class="card-title">${animeName}</h3>
                    <p class="card-text year">Year: ${animeYear}</p>
                    <p class="card-text ratings">Ratings: ${animeRatings}</p>
                    <p class="card-text country">Country: ${animeCountry}</p>
                    <button class="btn btn-danger btn-sm delete">Delete</button>
                    <button class="btn btn-primary btn-sm edit">Edit</button>
                </div>
            </div>
        `;
        document.getElementById('portfolio').querySelector('.row').appendChild(animeCard);
    }

    // Clear form and reset edit mode
    document.getElementById('animeForm').reset();
    document.getElementById('animeId').value = '';
}

// Function to delete anime card
function deleteAnimeCard(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.parentElement.remove();
    }
}

// Function to edit anime card
function editAnimeCard(e) {
    if (e.target.classList.contains('edit')) {
        var cardBody = e.target.parentElement;
        var animeId = cardBody.parentElement.parentElement.id;
        var animeName = cardBody.querySelector('.card-title').innerText;
        var animeYear = cardBody.querySelector('.year').innerText.replace('Year: ', '');
        var animeRatings = cardBody.querySelector('.ratings').innerText.replace('Ratings: ', '');
        var animeCountry = cardBody.querySelector('.country').innerText.replace('Country: ', '');

        // Set form values for editing
        document.getElementById('animeId').value = animeId;
        document.getElementById('animeName').value = animeName;
        document.getElementById('animeYear').value = animeYear;
        document.getElementById('animeRatings').value = animeRatings;
        document.getElementById('animeCountry').value = animeCountry;
    }
}

// Event listeners
document.getElementById('animeForm').addEventListener('submit', handleFormSubmission);
document.getElementById('portfolio').addEventListener('click', deleteAnimeCard);
document.getElementById('portfolio').addEventListener('click', editAnimeCard);
