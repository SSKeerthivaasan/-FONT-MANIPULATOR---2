function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(550,420);
    canvas.position(560,100);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}
function draw(){
    background("#3E95AC");
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function gotposes(results){
if (results.length>0){
    console.log(results);
}
}