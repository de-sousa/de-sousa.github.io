const canvas = document.querySelector(".myCanvas");
const ctx = canvas.getContext("2d");

const squareSize=10;

let width,height;

function style(x,y,z){
    return "rgb("+x+","+y+","+z+")";
}

function mix(v1,v2,percent){
    sol=[0,0,0];
    for(let i=0;i<3;i++){
	sol[i]+=v1[i]+(v2[i]-v1[i])*percent;
    }
    return sol;
}

function styleT(t){
    return style(t[0],t[1],t[2]);
}

function hexToRGB(color){
    return [parseInt(color[1]+color[2],16)
	    ,parseInt(color[3]+color[4],16)
	    ,parseInt(color[5]+color[6],16)];
}

let color1,color2,color4,color3;

function paint(i,j,color){
    if(color==2){
	ctx.fillStyle=styleT(mix(color1,color2,(i*squareSize)/width));
    }
    else if(color==1){
	ctx.fillStyle=styleT(mix(color3,color4,(j*squareSize)/height));
    }
    else{
	// keep color as it is
    }
    ctx.fillRect(i*squareSize,j*squareSize,squareSize-1,squareSize-1);
}

function randint(i,j){
    return i+Math.floor(Math.random()*(j-i));
}

let draw;

draw=() => {    
    ctx.fillStyle=styleT(backgroundColor);
    ctx.fillRect(0,0,width,height);
    
    let corna=randint(1,100);
    let cornb=randint(1,100);
    let size=randint(25,50);

    for(let i=0;i<Math.floor((width+1)/squareSize);i++){
	ctx.fillStyle = styleT(color3);
	for(let j=0;j<Math.floor((height+1)/squareSize);j++){
	    let x=corna+i*size/100;
	    let y=cornb+j*size/100;
	    let c=Math.floor(x*x+y*y);
	    paint(i,j,c%5);
	}
    }
};


function shuffle(){

    backgroundColor=hexToRGB(document.getElementById("backgroundColor").value)
    color1=hexToRGB(document.getElementById("color1").value);
    color2=hexToRGB(document.getElementById("color2").value);
    color3=hexToRGB(document.getElementById("color3").value);
    color4=hexToRGB(document.getElementById("color4").value);
    
    width=canvas.width=parseInt(document.getElementById("width").value);
    height=canvas.height=parseInt(document.getElementById("height").value);

    draw();
}
