const clickButtonAudio = new Audio('/click-button.wav');

export function playClickButtonAudio() {
    stopClickButtonAudio();
    clickButtonAudio.play();
}

function stopClickButtonAudio() {
    clickButtonAudio.pause();
    clickButtonAudio.currentTime = 0;
}