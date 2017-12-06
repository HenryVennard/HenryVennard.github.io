console.log("HelloWorld")
// Snake Game 
var counter = 0;
var delay = 10;
var boxWidth = 500;
var boxHeight = 300;
function gameLoop() {
	counter = counter + 1;
	console.log("counter=", counter)
	d3.select(".snake")
		.attr("x", counter);
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

	gameLoop();
}
startGame();