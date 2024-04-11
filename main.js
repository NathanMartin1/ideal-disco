function preload() {
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 300, 300);
}
function take_snapshot(){
    save('CensoredImage.png');
}
function modelLoaded(){
    console.log('PoseNet has been initialised');
}
function gotPoses(results) {
    if(results.length >0) {
        console.log(results);
        console.log("left eye x =" + results[0].pose.leftEye.x);
        console.log("left eye y =" + results[0].pose.leftEye.y);
        console.log("right eye x =" + results[0].pose.rightEye.x);
        console.log("right eye y =" + results[0].pose.rightEye.y);
    }
}