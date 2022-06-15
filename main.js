Webcam.set({
    width: 500,
    height: 350,
    image_format:"png",
    png_quality: 90
});

camera= document.getElementById("cam");
Webcam.attach("#cam");

function take(){
    Webcam.snap(function(data_uri){
        document.getElementById("pic").innerHTML='<img id="image" src="'+data_uri+'"/>';
    })
}

console.log("ml5 version is ", ml5.version); 
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2Y_2K1yB1/model.json", modelloaded);
function modelloaded(){
    console.log("model loaded");
}

