function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
}

canvas = createCanvas(550, 550);
canvas.position(550, 150);

function draw() {
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    square(noseX,noseY, difference);
    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}

function modelLoded() {
    console.log('PoseNet Is Initialized');
}

 function gotPoses() {
    if(SpeechRecognitionResultList.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.X;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+ noseX +"+ noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;
    
        console.log("leftWristX = " + leftWristX + "rightWristX = "+ rightWristX + "difference = " + difference);
    }
 }

