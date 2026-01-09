
function handleInput(){
    console.log(this.name);
    if(this.name === 'spacing'){
        document.documentElement.style.setProperty('--spacing', this.value + 'px');
    } else if(this.name === 'blur'){
        document.documentElement.style.setProperty('--blur', this.value + 'px');
    } else if(this.name === 'base'){
        document.documentElement.style.setProperty('--base', this.value);
    }
}

let controls = document.querySelectorAll('.controls input');
controls.forEach(input => input.addEventListener('change', handleInput));
controls.forEach(input => input.addEventListener('input', handleInput));



