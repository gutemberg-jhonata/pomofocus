const clickButtonAudio = new Audio('/sounds/click-button.wav');
const finishTimerAudio = new Audio('/sounds/kitchen-alarm.mp3');

export function playClickButtonAudio() {
    stopClickButtonAudio();
    clickButtonAudio.play();
}

function stopClickButtonAudio() {
    clickButtonAudio.pause();
    clickButtonAudio.currentTime = 0;
}

export function playFinishTimerAudio() {
    finishTimerAudio.play();
}