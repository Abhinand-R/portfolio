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

document.querySelector('.download-section .btn').addEventListener('click', function(e) {
    // If you want to perform any actions before or after the download, you can do so here
    console.log('Download initiated');
    // The actual download will be handled by the browser due to the 'download' attribute
});