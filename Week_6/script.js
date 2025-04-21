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
            <h1>${club.name}</h1>
            <img src="${club.image}" alt="${club.name} Logo" style="width:200px; height:auto;">
            <p><b>League:</b> ${club.league}</p>
            <p><b>City:</b> ${club.city}</p>
            <p><b>Stadium:</b> ${club.stadium}</p>
            <p><b>Description:</b> ${club.description}</p>
            <div style="display: flex; justify-content: center; gap: 20px; margin-top: 20px;">
                <button id="back-button">Back</button>
                <button id="view-players-button">View Players</button>
            </div>
        </div>
    `;

    // Replace the content of the main body with club details
    document.getElementById('main').innerHTML = detailsHTML;

    // Add event listener to the Back button
    document.getElementById('back-button').addEventListener('click', function() {
        // Restore the original HTML structure
        document.getElementById('main').innerHTML = `
            <h1>Football Clubs Database</h1>
            <input type="text" id="search" placeholder="Search for a football club">
            <div id="club-list"></div>
        `;

        // Re-initialize the search input and display all clubs
        const searchInput = document.getElementById('search');
        searchInput.addEventListener('input', handleSearchInput);
        displayClubs(clubData);
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
            <h1>${club.name} Players</h1>
            <table style="width:80%; margin:20px auto; border-collapse:collapse;">
                <thead>
                    <tr style="background-color:#333; color:white;">
                        <th style="padding:10px; text-align:left;">Name</th>
                        <th style="padding:10px; text-align:left;">Position</th>
                        <th style="padding:10px; text-align:center;">Number</th>
                        <th style="padding:10px; text-align:center;">Goals</th>
                        <th style="padding:10px; text-align:center;">Assists</th>
                    </tr>
                </thead>
                <tbody>
    `;

    // Add player rows to the table
    club.players.forEach(player => {
        playersHTML += `
            <tr style="border-bottom:1px solid #ddd;">
                <td style="padding:10px;">${player.name}</td>
                <td style="padding:10px;">${player.position}</td>
                <td style="padding:10px; text-align:center;">${player.number}</td>
                <td style="padding:10px; text-align:center;">${player.goals}</td>
                <td style="padding:10px; text-align:center;">${player.assists}</td>
            </tr>
        `;
    });

    // Close the table and add a Back button
    playersHTML += `
                </tbody>
            </table>
            <button id="back-button" style="margin-top:20px;">Back</button>
        </div>
    `;

    // Replace the content of the main body with player details
    document.getElementById('main').innerHTML = playersHTML;

    // Add event listener to the Back button
    document.getElementById('back-button').addEventListener('click', function() {
        // Restore the original HTML structure
        document.getElementById('main').innerHTML = `
            <h1>Football Clubs Database</h1>
            <input type="text" id="search" placeholder="Search for a football club">
            <div id="club-list"></div>
        `;

        // Re-initialize the search input and display all clubs
        const searchInput = document.getElementById('search');
        searchInput.addEventListener('input', handleSearchInput);
        displayClubs(clubData);
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