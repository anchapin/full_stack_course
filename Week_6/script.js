// Get references to HTML elements
const clubList = document.getElementById('club-list');
const searchInput = document.getElementById('search');
const clubDetailsContainer = document.getElementById('main');

// Attach an input event listener for the search input
searchInput.addEventListener('input', handleSearchInput);

// Initialize football club data and display all clubs
let clubData = footballClubs;
displayClubs(footballClubs);


// Display football clubs in the club list
function displayClubs(clubs) {
    // Generate HTML for club cards and set it in the clubList element
    const clubCardsHTML = clubs.map(createClubCardHTML).join('');
    clubList.innerHTML = clubCardsHTML;
}

// Create HTML for a football club card
function createClubCardHTML(club) {
    return `
        <div class="club-card" onclick="handleClubClick(this);"><!-- Add onclick event -->
            <h2>${club.name}</h2>
            <img src="${club.image}" alt="${club.name} Image" style="width:100%; height:20vh;">
            <p><b>League: </b>${club.league}</p>
            <p><b>City: </b>${club.city}</p>
            <button onclick="viewClubPlayers('${club.name}'); event.stopPropagation();" style="width:100%;">View Players</button>
        </div>
    `;
}

// Handle clicking on a football club card
function handleClubClick(element) {
    // Extract the club name from the card element
    const clubName = element.querySelector('h2').textContent;

    // Find the club object in the clubData array
    const club = clubData.find(club => club.name === clubName);

    // Call displayClubDetails with the found club object
    if (club) {
        displayClubDetails(club);
    }
}

// Display football club details
function displayClubDetails(club) {
    // Create HTML content for club details
    const detailsHTML = `
        <div id="club-details">
            <button id="back-button">Back</button>

            <h2>${club.name}</h2>

            <img src="${club.image}" alt="${club.name} Logo" style="display: block; width: 250px; height: auto; margin: 0 auto 30px auto;">

            <div style="text-align: center;">
                <p><b>League:</b> ${club.league}</p>
                <p><b>City:</b> ${club.city}</p>
                <p><b>Stadium:</b> ${club.stadium}</p>
            </div>

            <button id="view-players-button">View Players</button>

            <p style="text-align: left;"><b>Description:</b> ${club.description}</p>
        </div>
        <script src="script.js"></script>
    `;

    // Replace the content of the main body with club details
    document.getElementById('main').innerHTML = detailsHTML;

    // Add event listener to the Back button
    document.getElementById('back-button').addEventListener('click', function() {
        // Reset the body to its original state
        document.body.innerHTML = `
            <h1>Football Clubs Database</h1>
            <input type="text" id="search" placeholder="Search for a football club">
            <div id="club-list">
                <!-- Football club cards will be displayed here -->
            </div>
            <script src="script.js"></script>
        `;
        // reload the page
        window.location.reload();
    });

    // Add event listener to the View Players button
    document.getElementById('view-players-button').addEventListener('click', function() {
        viewClubPlayers(club.name);
    });
}

// Function to view club players
function viewClubPlayers(clubName) {
    // Find the club object in the clubData array
    const club = clubData.find(club => club.name === clubName);

    if (!club) {
        console.error(`Club with name ${clubName} not found`);
        return;
    }

    // Create HTML content for player details
    let playersHTML = `
        <div id="club-details">
            <button id="back-button">Back</button>

            <h2>${club.name} Players</h2>
    `;

    // Add player cards
    club.players.forEach(player => {
        playersHTML += `
            <div style="border-bottom: 1px solid #ccc; padding: 15px 0;">
                <p><b>Name:</b> ${player.name}</p>
                <p><b>Position:</b> ${player.position}</p>
                <p><b>Goals:</b> ${player.goals}</p>
                <p><b>Assists:</b> ${player.assists}</p>
            </div>
        `;
    });

    // Close the container
    playersHTML += `
        </div>
        <script src="script.js"></script>
    `;

    // Replace the content of the main body with player details
    document.getElementById('main').innerHTML = playersHTML;

    // Add event listener to the Back button
    document.getElementById('back-button').addEventListener('click', function() {
        // Instead of rebuilding the entire HTML structure, let's just reset the body content
        // and re-initialize the necessary elements

        // Reset the body to its original state
        document.body.innerHTML = `
            <h1>Football Clubs Database</h1>
            <input type="text" id="search" placeholder="Search for a football club">
            <div id="club-list">
                <!-- Football club cards will be displayed here -->
            </div>
            <script src="script.js"></script>
        `;
        // reload the page
        window.location.reload();
    });
}

// Handle search input and filter clubs
function handleSearchInput() {
    // Get the value from the search input field
    const searchValue = searchInput.value.toLowerCase().trim();

    // If the search value is empty, display all clubs
    if (searchValue === '') {
        displayClubs(clubData);
        return;
    }

    // Filter the clubData array to find clubs whose name, city, or league contains the search value
    const filteredClubs = clubData.filter(club => {
        return (
            club.name.toLowerCase().includes(searchValue) ||
            club.city.toLowerCase().includes(searchValue) ||
            club.league.toLowerCase().includes(searchValue)
        );
    });

    // Call the displayClubs function with the filtered clubs array
    displayClubs(filteredClubs);
}