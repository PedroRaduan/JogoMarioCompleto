let nariz_Y, nariz_X;


function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_die = loadSound("mariodie.wav");
	game_over = loadSound("gameover.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('canvas');
	video = createCapture(800,400);
	video.size(800,400);
	video.parent('gameConsole');
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function draw(){
	game();
}

function modelLoaded(){
	console.log('Carreguei');
}

function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		nariz_Y = results[0].pose.nose.y;
		nariz_X = results[0].pose.nose.x;
		console.log(`O nariz Y é ${nariz_Y} e o nariz X é ${nariz_X}`);
	}
}






