const canvas = document.querySelector(".myCanvas");
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(0, 0, 0)";

const squareSize=5;
const padding=50;

function paint(i,j){
    ctx.fillRect(i*squareSize,j*squareSize,squareSize-1,squareSize-1);
}

function randint(i,j){
    return i+Math.floor(Math.random()*(j-i));
}

let corna=randint(1,100);
let cornb=randint(1,100);
let size=randint(25,50);

console.log(corna);
console.log(cornb);
console.log(size);

for(let i=padding;i<Math.floor(height/squareSize)-padding-1;i++){
    for(let j=padding;j<Math.floor(width/squareSize)-padding-1;j++){
	let x=corna+i*size/100;
	let y=cornb+j*size/100;
	let c=Math.floor(x*x+y*y);
	if(c % 2 == 0){
	    paint(j,i);
	}
    }
}
