const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

let myPoints = [];
let color = ['#f542a4' ,'#f0022a', '#33c444', '#301985', '#301985']

canvas.width = width;
canvas.height = height;

animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    if(Math.random()<0.01){
        let x = -50;
        let colour = color[Math.floor(Math.random() * (color.length - 0 + 1) + 0)];
        let y = Math.random()*height;
        let p = new Point(x,y,50, colour);
        myPoints.push(p);
    }

    for(let i = 0 ; i<myPoints.length; i++){
        myPoints[i].x += 1;
        myPoints[i].draw();

        if(myPoints[i].x > width){
            myPoints.splice(i,1)
        }
    }
}