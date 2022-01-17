var SpeechRecognition = window.webkitSpeechRecognition
var recognition= new SpeechRecognition()
function start_button(){
    document.getElementById("textbox").innerHTML=""
    recognition.start()
}
recognition.onresult = function(event)
{
    console.log(event)
    speech=event.results[0][0].transcript
    document.getElementById("textbox").innerHTML=speech
    console.log(speech)
   
    if(speech=="take my selfie")
    {
console.log("taking selfie in 5 seconds");
speak_data="taking selfie in 5 seconds";
speak();
    }

}
function speak()
{
    var synth=window.speechSynthesis;
    //speak_data=document.getElementById("textbox").value;
    var utter_this=new SpeechSynthesisUtterance(speak_data);
synth.speak(utter_this);
Webcam.attach(camera)
setTimeout(function(){
take_snapshot();
save();
}, 5000)

}
Webcam.set
({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
})
camera=document.getElementById("camera")
function take_snapshot()
{
    Webcam.snap(
        function(data_uri){
         image='<img id="selfie_image" src="'+data_uri+'">';
document.getElementById("result").innerHTML=image
        }
    )
}
function save()
{
    link=document.getElementById("link")
    image_url=document.getElementById("selfie_image").src
link.href=image_url
link.click()
}
