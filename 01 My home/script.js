const canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawObject(coords, endLine, lineClr, fillClr){
//sets my arguments
let coordinates = [...coords];
context.lineJoin = endLine;
context.strokeStyle = lineClr;
context.fillStyle = fillClr;

let startCoord = coordinates.shift();

context.beginPath();
context.moveTo(startCoord.x, startCoord.y);

coordinates.forEach(cord => {
    context.lineTo(cord.x, cord.y);
});

context.closePath();
context.stroke();
context.fill();
}

drawObject([{x: 250, y: 25}, {x: 125, y: 75}, {x: 375, y: 75}], "round", "#e699ff", "#004080");

context.strokeRect(125,75,250,150);
context.strokeRect(225,150,50,75);