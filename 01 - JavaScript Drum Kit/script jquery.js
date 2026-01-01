function PlaySound(e) {
    const audio = $(`audio[data-key="${e.code}"]`)[0]; // Get DOM element
    const $key = $(`div[data-key="${e.code}"]`);       // Get jQuery object

    if(audio){
        audio.currentTime = 0;
        audio.play().catch(error => {
            console.error("Error playing sound:", error);
        });
        
        $key.addClass('playing');
        
        $key.one('transitionend', function() {
            $key.removeClass('playing');
        });
    }
}

$(document).on('keydown', PlaySound);