// Spotify controls
function toggleSpotify() {
    const player = document.getElementById('spotify-player');
    player.classList.toggle('minimized');
}

function closeSpotify() {
    const player = document.getElementById('spotify-player');
    const iframe = document.getElementById('spotify-iframe');
    iframe.src = '';
    player.style.display = 'none';
}

function openSpotify() {
    const player = document.getElementById('spotify-player');
    const iframe = document.getElementById('spotify-iframe');
    player.style.display = 'block';
    player.classList.remove('minimized');
    if (!iframe.src) {
        iframe.src = 'https://open.spotify.com/embed/playlist/5TOfvEvIr9y5SWbsCx4Dh8?si=c4207dcdebaf41b4?utm_source=generator';
    }
}