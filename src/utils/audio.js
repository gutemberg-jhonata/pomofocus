const clickButtonAudio = new Audio('../../public/click-button.wav');

export function playClickButtonAudio() {
    stopClickButtonAudio();
    clickButtonAudio.play();
}

function stopClickButtonAudio() {
    clickButtonAudio.pause();
    clickButtonAudio.currentTime = 0;
}