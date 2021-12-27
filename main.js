Webcam.set({
    width: 350,
    height: 300,
    img_format: 'png',
    png_quality: 90
})

camera = document.getElementById("camera");
Webcam.attach(camera);

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML = '<img id="captured_image" src = "' + data_uri + '"/>';
    })
}

console.log("Ml5 version - " + ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/iNg0moMNr/model.json', modelLoaded);