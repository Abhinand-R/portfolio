window.alert("please open in desktop mode its not responsive at this time")
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

document.getElementById('fullscreenImage').addEventListener('click', function(e) {
    if (e.target === this) {
        closeFullscreen();
    }
});

document.querySelector('.download-section .btn').addEventListener('click', function(e) {
     console.log('Download initiated');
});