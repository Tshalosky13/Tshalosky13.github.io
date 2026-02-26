const SPOTIFY_SRC = 'https://open.spotify.com/embed/playlist/5TOfvEvIr9y5SWbsCx4Dh8?utm_source=generator';

function toggleSpotify() {
    const player = document.getElementById('spotify-player');
    player.classList.toggle('minimized');
}

function closeSpotify() {
    const player = document.getElementById('spotify-player');
    // Hide but DON'T clear the src — clearing causes the reopen bug
    player.style.display = 'none';
    player.classList.remove('minimized');
}

function openSpotify() {
    const player = document.getElementById('spotify-player');
    const iframe = document.getElementById('spotify-iframe');

    // Restore src if it was ever cleared
    if (!iframe.src || iframe.src === 'about:blank' || iframe.src === '') {
        iframe.src = SPOTIFY_SRC;
    }

    player.style.display = 'block';
    player.classList.remove('minimized');

    // Bring to front
    let highestZ = 0;
    document.querySelectorAll('.window, .spotify-player').forEach(el => {
        highestZ = Math.max(highestZ, parseInt(el.style.zIndex) || 0);
    });
    player.style.zIndex = highestZ + 1;
}

// Note on autoplay: Spotify's embed API intentionally blocks autoplay
// without user interaction due to browser autoplay policies.
// The embed will load paused — user must press play the first time.
// There is no workaround for this within browser security constraints.