const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    console.log('hello')
    this.classList.toggle('open');

}

//when the transition of the flex ends the upper and lower content come to display
function toggleActive(e){
    if(e.propertyName.includes('flex')){
        console.log("active open")
        this.classList.toggle('open-active');

    }
    

}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));