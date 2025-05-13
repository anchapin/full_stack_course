// Reference the <video> and the <source> elements
const video = document.getElementById('video'); 
const videoSource = document.getElementById('video-src')

// Reference other DOM elements
const videoList = document.getElementById("video-list");
const searchInput = document.getElementById('search-input');

// Create a copy of the original video playlist
const originalList = [...videos];

// Initialize variables to track the current video index and shuffle state
let currentvideoIndex = 0;
let isShuffle = false;

// Function to update the video playlist displayed in the UI
function updatePlayList(playlist) {
    // Clear the current playlist
    videoList.innerHTML = "";

    // Iterate through the playlist and create <li> elements
    playlist.forEach((video, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = video.title;
        listItem.dataset.index = index; // Store the index as a data attribute
        videoList.appendChild(listItem);
    });
}

// Function to update the UI with video information
function updateUI(currentvideoIndex, playlist) {
    document.getElementById('video-title').textContent = playlist[currentvideoIndex]["title"];
    document.getElementById('video-artist').textContent = playlist[currentvideoIndex]["artist-name"];
}

// Function to play the current video
function playvideo(playlist) {
    video.pause();
    // Set the video source
    videoSource.src = playlist[currentvideoIndex]["url"];    
    // Load and play the video after setting the source
    video.load();
    video.play();
    // Update the UI with video information
    updateUI(currentvideoIndex, playlist);
}

// Event delegation for video selection in the playlist
videoList.addEventListener('click', (e) => {
    const clickedItem = e.target;
    if (clickedItem.tagName === 'LI') {
        const index = parseInt(clickedItem.dataset.index, 10);
        currentvideoIndex = index;
        playvideo(isShuffle ? videos : originalList);
    }
});

// Event listeners for play, next, and previous buttons
document.getElementById('play-button').addEventListener('click', () => {
    playvideo(isShuffle ? videos : originalList);
});

document.getElementById('next-button').addEventListener('click', () => {
    currentvideoIndex = (currentvideoIndex + 1) % (isShuffle ? videos.length : originalList.length);
    playvideo(isShuffle ? videos : originalList);
});

document.getElementById('prev-button').addEventListener('click', () => {
    currentvideoIndex = (currentvideoIndex - 1 + (isShuffle ? videos.length : originalList.length)) % (isShuffle ? videos.length : originalList.length);
    playvideo(isShuffle ? videos : originalList);
});

// Function to shuffle the array in place
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        // Swap elements at i and randomIndex
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
}

// Event listener for the Shuffle button
document.getElementById('shuffle-button').addEventListener('click', (event) => {
    isShuffle = !isShuffle;

    if (isShuffle) {
        event.target.textContent = "Click to Unshuffle";
        // Shuffle the playlist, update it, and play the first video
        shuffleArray(videos);
        updatePlayList(videos);
        currentvideoIndex = 0;
        playvideo(videos);
    } else {
        event.target.textContent = "Click to Shuffle";
        // Restore the original playlist, update it, and play the first video
        updatePlayList(originalList);
        currentvideoIndex = 0;
        playvideo(originalList);
    }
});

// Event listener to filter the playlist based on search input
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredvideos = originalList.filter((video) =>
        video.title.toLowerCase().includes(searchTerm)
    );
    // Update the displayed playlist with the filtered videos
    updatePlayList(filteredvideos);
    updateUI(currentvideoIndex, originalList);
});

// Initialize the playlist and UI with the original list
updatePlayList(originalList);
updateUI(currentvideoIndex, originalList);