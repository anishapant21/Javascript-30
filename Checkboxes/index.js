const checkboxes= document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);
//lastchecked is to represet previous to current checked
let lastChecked;

function handleCheck(e){
    let inBetween= false;
    //check if they had the shift key down
    if(e.shiftKey && this.checked){
        //loop over every single checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            // while looping, the first time it gets either current or last, starts setting true
            //the second time it gets current or last, starts seting false
            if (checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }
            if (inBetween){
                checkbox.checked = true;
            }
        })
    }
    lastChecked =  this;
}



checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));