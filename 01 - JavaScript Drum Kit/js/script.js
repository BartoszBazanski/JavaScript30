function main() {
    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);

    function keyDownHandler(event) {
        const keyCode = event.keyCode;
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${keyCode}"]`);
        if(!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }

    function keyUpHandler(event) {
        const keyCode = event.keyCode;
        const key = document.querySelector(`.key[data-key="${keyCode}"]`);
        if(!key) return;
        key.classList.remove('playing');
    }
}

document.addEventListener('DOMContentLoaded', main);
