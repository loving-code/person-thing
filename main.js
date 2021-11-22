Webcam.set({
    width:350,
    height:300,
    image_format : 'png' ,
    png_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTml = '<img id="captured_image" src='+data_uri+'"/>'
    });
}

console.log('ml5 versions', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/81665RcJ7/', modelLoaded);