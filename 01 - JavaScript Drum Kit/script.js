function PlaySound(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`div[data-key="${e.code}"]`);

    if(audio){
        audio.currentTime = 0;
        audio.play().catch(error => {
            console.error("Error playing sound:", error);
        });
        key.classList.add('playing');
        key.addEventListener('transitionend', () => {
            key.classList.remove('playing');
        });
    }
    else return;

}

window.addEventListener('keydown', PlaySound);