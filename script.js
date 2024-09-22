// timeline.js
function openFullscreen(imgSrc) {
    const fullscreenImg = document.getElementById('fullscreenImg');
    const fullscreenContainer = document.getElementById('fullscreenImage');
    
    fullscreenImg.src = imgSrc;
    fullscreenImg.onload = function() {
        fullscreenContainer.style.display = 'flex';
    };
}

function closeFullscreen() {
    document.getElementById('fullscreenImage').style.display = 'none';
}

// Close fullscreen view when clicking outside the image
document.getElementById('fullscreenImage').addEventListener('click', function(e) {
    if (e.target === this) {
        closeFullscreen();
    }
});