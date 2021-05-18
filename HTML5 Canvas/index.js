const canvas = document.querySelector("#draw");

//creating context -- for this 2d, for video games 3d
const ctx = canvas.getContext('2d');

canvas.width= window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

//when we don't click anything and just moving mouse around -- doesn't draw
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e){
    if(!isDrawing) return; //stop the function from running when they are not moused down
    console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY); //start from
    ctx.lineTo(e.offsetX, e.offsetY); //go to
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]; //updating position -- one line(destructuring an array)
}


canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', ()=> isDrawing = false);
canvas.addEventListener('mouseout', ()=> isDrawing = false);





 