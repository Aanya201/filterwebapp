function setup(){
    canvas= createCanvas(450,450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450,450);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
 }
 noseX=0;
 noseY=0;
 
 function preload() {
     clown_nose=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
 }
 
 function modelLoaded(){
     console.log('poseNet is Initializad');
 }
 
 function gotPoses(results){
     if (results.length>0) {
         console.log(results);
         noseX=floor(results[0].pose.nose.x);
         noseY=floor(results[0].pose.nose.y);
         console.log("nose x="+noseX);
         console.log("nose y="+noseY);
     }
 }
 
 function draw(){
  image(video,0,0,450,450);
  /*circle(noseX,noseY,20);
  fill("red");
  stroke("red");*/
  image(clown_nose,noseX-24,noseY,50,30);
 }
 
 function take_snapshot(){
     save('selfie.png');
 }
 
 
