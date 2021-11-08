const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

let points = [];
let numberOfPoints = 8;

canvas.width = width;
canvas.height = height;

let background = new GraphBackGround();
let color = ['#f542a4' ,'#f0022a', '#33c444', '#301985', '#301985']


for(let i=0; i<numberOfPoints; i++){
    let colour = color[Math.floor(Math.random() * (color.length - 0 + 1) + 0)];
    let point = new Point(Math.random()*width,Math.random()*height,15,colour,true);
    points.push(point);
}

animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    background.draw();
    for(let i=0; i<numberOfPoints; i++){
        points[i].draw();
    }

    context.beginPath();
    context.fillStyle = "rgba(125,15,200,0.4)";
    context.moveTo(points[0].x,points[0].y);
    for(let i=0; i<numberOfPoints;i++){
        context.lineTo(points[i].x,points[i].y);
    }
    context.closePath();
    context.stroke();
    context.fill();
}