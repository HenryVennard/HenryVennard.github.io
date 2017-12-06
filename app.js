
// Snake Game 
// Math.random""   random number 0-1
// Math.round()   round to whole
var counter = 0;
var delay = 10;
var boxWidth = 500;
var boxHeight = 300;
var foodCord = Math.round(Math.random()*boxWidth);

/*Fixing food spawning on the sides
if (foodCord <10 or >(boxWidth-10)) {
	foodCord = Math.round(Math.random()*boxWidth);
} 
*/

console.log(foodCord)
function gameLoop() {
	counter = counter + 1;
	d3.select(".snake")
		.attr("x", counter);

	d3.select(".food")
		.attr("x", foodCord);

	if (counter === foodCord) {
		d3.select(".food")
			foodCord = Math.round(Math.random()*boxWidth);
		console.log("nomnom")

		d3.select("#snakeBox")
		.append("rect")
		.attr("class", "body")
		.attr("width", 10)
		.attr("height", 10)
		.attr("fill", "green")
		.attr("x", counter - 1);
	}
		
//is snake outside box lose man
	if (counter > boxWidth) {
		console.log("Snakes outta the box!")
		return
	
	}

	setTimeout(function() {
		gameLoop()
	}, delay)
}
//gameLoop();
function startGame(){
	d3.select("#snakeGame")
		.append("svg")
		.attr("id", "snakeBox")
		.attr("width", boxWidth)
		.attr("height", boxHeight);

	d3.select("#snakeBox")
		.append("rect")
		.attr("class","snake")
		.attr("width", 10)
		.attr("height", 10)
		.attr("fill", "green")

	d3.select("#snakeBox")
		.append("rect")
		.attr("class", "food")
		.attr("width", 10)
		.attr("height", 10)
		.attr("fill", "rgb(250,200,200)")

	gameLoop();
}
startGame();