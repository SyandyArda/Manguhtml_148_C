document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('video');
    const audio = document.querySelector('audio');
    const img = document.querySelector('img');

    if (video) {
        video.addEventListener('play', function() {
            alert('Video mulai diputar!');
        });
    }

    if (audio) {
        audio.addEventListener('play', function() {
            alert('Audio mulai diputar!');
        });
    }

    if (img) {
        img.addEventListener('click', function() {
            alert('Anda mengklik gambar!');
        });
    }
});