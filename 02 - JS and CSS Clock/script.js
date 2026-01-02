function setDate() {
    const $secondHand = $('.second-hand');
    const $minsHand = $('.min-hand');
    const $hourHand = $('.hour-hand');

    const now = new Date();
    const seconds = now.getSeconds(); 
    const mins = now.getMinutes();    
    const hours = now.getHours();     
    
    const secondsDegrees = ((seconds / 60) * 360) + 90
    const minsDegrees = ((mins / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90;

    $secondHand.css({
        'transform-origin': '100% 50%',
        'transform': `rotate(${secondsDegrees}deg)`
    });
    
    $minsHand.css({
        'transform-origin': '100% 50%',
        'transform': `rotate(${minsDegrees}deg)`
    });
    
    $hourHand.css({
        'transform-origin': '100% 50%',
        'transform': `rotate(${hoursDegrees}deg)`
    });

}

setInterval(setDate, 1000);
setDate();