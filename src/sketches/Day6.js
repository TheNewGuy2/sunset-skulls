import React from "react";
import Sketch from "react-p5";

	let x = 50;
	let y = 50;


    const Day6 = (props) => {
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		const canvasWidth = 700;
		const canvasHeight = 900;
		p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
		p5.randomSeed(50)
		p5.frameRate(p5.random(0.2, 3))
	  

	};

	const draw = (p5) => {
//
//		p5.background(0);
//		p5.ellipse(x, y, 70, 70);
		// NOTE: Do not use setState in the draw function or in functions that are executed
		// in the draw function...
		// please use normal variables or class properties for these purposes
		x++;
		const m = 8;
		const n = 20;
		const o = 44;
		const canvasWidth = 700;
		const canvasHeight = 900;
		//top  
		const MtopR = 110 * p5.noise(p5.frameCount / m);
		const MtopG = 15 * p5.noise(1000 + p5.frameCount / o);
		const MtopB = 255 * p5.noise(2000 + p5.frameCount / n);
		const MbottomR = 255 * p5.noise(3000 + p5.frameCount / m);
		const MbottomG = 1 * p5.noise(4000  + p5.frameCount / n);
		const MbottomB = 100 * p5.noise(5000 + p5.frameCount / m);
	  
		const MtopColor = p5.color(MtopR, MtopG, MtopB);
		const MbottomColor = p5.color(MbottomR, MbottomG, MbottomB);
		
		for(let y = p5.noise(0); y < 255; y++) {
		  const MlineColor = p5.lerpColor(MtopColor, MbottomColor, y / canvasHeight);
	  
		  p5.stroke(MlineColor);
		  p5.line(0, y, canvasWidth, y);
		}
		//mid  
		const topR = 255 * p5.noise(p5.frameCount / o);
		const topG = 100 * p5.noise(6000 + p5.frameCount / o);
		const topB = 1 * p5.noise(7000 + p5.frameCount / n);
		const bottomR = 255 * p5.noise(8000 + p5.frameCount / o);
		const bottomG = 255 * p5.noise(9000  + p5.frameCount / o);
		const bottomB = 1 * p5.noise(10000 + p5.frameCount / m);
	  
		const topColor = p5.color(topR, topG, topB);
		const bottomColor = p5.color(bottomR, bottomG, bottomB);
		
		for(let z = p5.noise(200); z < 375; z++) {
		  const lineColor = p5.lerpColor(topColor, bottomColor, z / canvasHeight);
	  
		  p5.stroke(lineColor);
		  p5.line(0, z, canvasWidth, z);
		}
	  //bottom  
		const TtopR = 255 * p5.noise(p5.frameCount / m);
		const TtopG = 100 * p5.noise(10000 + p5.frameCount / n);
		const TtopB = 1 * p5.noise(11000 + p5.frameCount / o);
		const TbottomR = 255 * p5.noise(13000 + p5.frameCount / n);
		const TbottomG = 255 * p5.noise(14000  + p5.frameCount / o);
		const TbottomB = 1 * p5.noise(15000 + p5.frameCount / o);
	  
		const TtopColor = p5.color(TtopR, TtopG, TtopB);
		const TbottomColor = p5.color(TbottomR, TbottomG, TbottomB);
		
		for(let x = p5.noise(313); x < p5.height; x++) {
		  const TlineColor = p5.lerpColor(TtopColor, TbottomColor, x / canvasHeight);
	  
		  p5.stroke(TlineColor);
		  p5.line(0, x, canvasWidth, x);
		}
		var randomValue = p5.random();
		if(randomValue < 0.93){
			p5.text("BetterDays", 25, 55);
//			<Sketch drawSkull={drawSkull (p5.width/2, p5.height/2, p5.random(100, 250), p5.random(100, 250), MbottomColor)} />;

			drawSkull (p5, canvasWidth/2, canvasHeight/2, p5.random(100, 250), p5.random(100, 250), MbottomColor);
	  //    drawSkull(width/2, height/2, 250, 250, MbottomColor);
		}
		else{
			p5.text("BreakAways", p5.width/2, p5.height/2,);
		  drawSkull (p5, p5.random(p5.width), p5.random(p5.height), p5.random(10, 220), p5.random(10, 230), MbottomColor, canvasWidth, canvasHeight);
//		  drawSkull (p5.mouseX, p5.mouseY, p5.random(10, 220), p5.random(10, 230), MbottomColor);
		}  
		// Try passing in mouseX and mouseY!
	  //  drawSkull(width/2, height/2, random(10, 220), random(10, 250), MbottomColor);
		
	  //  drawSkull (random(width), random(height), random(10, 220), random(10, 230), MbottomColor);
	  //  drawSkull (mouseX, mouseY, random(10, 220), random(10, 230), MbottomColor);
	  
//		return <Sketch setup={setup} draw={draw} />;
//		return <Sketch setup={setup} draw={draw} drawSkull={drawSkull} />;
 	  
	};
	const drawSkull=(p5, skullX, skullY, skullWidth, skullHeight, MbottomColor, canvasWidth, canvasHeight) =>{

		// Change the fill color to a random color.
		var funColor = p5.random(255);
		var funColor2 = p5.random(255);
	  //  fill(random(255), random(255), random(255));
	  	p5.fill(funColor,funColor2, funColor);
	  	p5.noStroke();
	  
		// Draw the top circle part of the skull.
		p5.ellipse(skullX, skullY, skullWidth, skullHeight);
		var eyeSpacing = skullWidth / 5;
		var eyeWidth = skullWidth / 2.75;
		var eyeHeight = skullHeight / 2.75;
		var teethWidth = skullWidth / 35;
		var teethHeight = skullHeight / 12;
		var teethTop = skullY + skullHeight / 1.6;
		var teethSpacing = skullWidth /13.8;
		var teethSide = skullX - (teethSpacing*3.6)+(teethWidth);
	  //  var funColor = fill(random(255), random(255), random(255));
	  
		// Draw the bottom rectangle part of the skull.
		p5.rect(skullX - skullWidth / 3.6,
		  skullY + skullHeight / 4.4,
		  skullWidth / 1.8,
		  skullHeight / 2.1);
	  //  fill(255);
	    p5.rect(skullX-(teethWidth/2),
		  skullY+skullHeight/1.8,
		  teethWidth*1.2,
		  teethHeight/2);
	  
		// Change the fill color to black.
		p5.fill(MbottomColor);
	  
		// Below, we use the skullX, skullY, skullWidth, and skullHeight
		// variables to draw the eyes and teeth inside the skull.
		// If this is confusing, try drawing out a few examples
		// with a pencil on a piece of graph paper!
	  
		// Draw the eyes.
	  //  var eyeSpacing = skullWidth / 5;
	  //  var eyeWidth = skullWidth / 2.75;
	  //  var eyeHeight = skullHeight / 2.75;
	    p5.ellipse(skullX - eyeSpacing,
		  skullY,
		  eyeWidth,
		  eyeHeight);
	    p5.ellipse(skullX + eyeSpacing,
		  skullY,
		  eyeWidth,
		  eyeHeight);
		p5.ellipse(skullX,
		  skullY+skullHeight/2.4,
		  eyeWidth,
		  eyeHeight);
		p5.rect(skullX - skullWidth / 5.8,
		  skullY,
		  eyeWidth / 2.3,
		  eyeHeight*1.25);
		p5.rect(skullX + eyeSpacing / 11,
		  skullY,
		  eyeWidth / 2.3,
		  eyeHeight*1.25);
	  
		
		
		
		// Draw the teeth.
	  //  var teethWidth = skullWidth / 35;
	  //  var teethHeight = skullHeight / 10;
	  //  var teethTop = skullY + skullHeight / 1.6;
	  //  var teethSpacing = skullWidth /14;
	    p5.rect(teethSide,
		  teethTop,
		  teethWidth,
		  teethHeight);
		p5.rect(teethSide+teethSpacing,
		  teethTop,
		  teethWidth,
		  teethHeight);
		p5.rect(teethSide+teethSpacing*2,
		  teethTop,
		  teethWidth,
		  teethHeight);
		p5.rect(teethSide+teethSpacing*3,
		  teethTop,
		  teethWidth,
		  teethHeight);
		p5.rect(teethSide+teethSpacing*4,
		  teethTop,
		  teethWidth,
		  teethHeight);
		p5.rect(teethSide+teethSpacing*5,
		  teethTop,
		  teethWidth,
		  teethHeight);
		p5.rect(teethSide+teethSpacing*6,
		  teethTop,
		  teethWidth,
		  teethHeight);
	  
		p5.fill(funColor, funColor2, funColor);
		p5.rect(skullX-(teethWidth/2),
		  skullY+skullHeight/1.8,
		  teethWidth*1.2,
		  teethHeight/2);
	  
		p5.rect(skullX-teethWidth/2,
		  skullY+skullHeight/2.8,
		  teethWidth,
		  eyeHeight/3);
		p5.rect(skullX-(eyeWidth/5.8),
		  skullY+skullHeight/2.5,
		  eyeWidth/3,
		  eyeHeight/13);
	  
		p5.rect(skullX-eyeSpacing*1.0,
		  skullY-eyeHeight/2,
		  teethWidth,
		  eyeHeight);
		p5.rect(skullX+eyeSpacing*.9,
		  skullY-eyeHeight/2,
		  teethWidth,
		  eyeHeight);
	  
	}
	return <Sketch setup={setup} draw={draw} drawSkull={drawSkull} />;
//		  return <Sketch drawSkull={drawSkull} />;


	};

export default Day6;
