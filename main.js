
let theInput = document.querySelector("#file-selector");
let fileSelector = document.getElementById("file-selector");
fileSelector.addEventListener('change', readFile);
function readFile() {
  console.log(theInput.value);
  let split = last_part(theInput.value);

  console.log(split);
  //FileReader
  var input = event.target;
  let reader = new FileReader();
  reader.onload = function () {
    let dataURL = reader.result;
    let output = document.getElementById('output');
    output.src = dataURL;
  };

  //find element in js


  var arrayImage = ['jpg', 'jpeg', 'png', 'bmp', 'gif'];

  var isInArray = inArray(split, arrayImage);
  console.log(isInArray);
  console.log(arrayImage);
  if (isInArray) {
    console.log('i am here');
    var x = document.createElement("img");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.body.appendChild(x);
    reader.readAsDataURL(input.files[0]);
  }
  else {
    if (split === 'mp4') {

      reader.readAsDataURL(input.files[0]);
      reader.onloadend = function (event) {

        var videos = document.createElement("video");
        videos.controls = true;
        videos.src = event.target.result;
        document.body.appendChild(videos);

      }

    }
    else {
      if (split === 'mp3') {
        reader.readAsDataURL(input.files[0]);

        let playButton = document.createElement("button");
        let stopButton = document.createElement("button");
        playButton.textContent = "play";
        stopButton.textContent = "stop";
        document.body.appendChild(playButton);
        document.body.appendChild(stopButton);
        //var audio = document.createElement("audio");
        let audio = new Audio( event.target.result);
        

        document.body.appendChild(audio);

        console.log(audio);
        playButton.addEventListener('click', function () {
          audio.play();
          console.log('hi');
        });
        stopButton.addEventListener('click', function () {
          audio.pause();
        });



      }
    }
  }

}

function last_part(str) {
  var split = str.split('.');
  return split[split.length - 1];
}

function inArray(target, arrayImage) {


  for (var i = 0; i < arrayImage.length; i++) {
    if (arrayImage[i] === target) {
      return true;
    }
  }

  return false;
}
























/*
$(document).ready(function()
{
  $("#file-selector").on("change",readFile)
});
function readImage(readFile) {
  // Check if the file is an image.
  if (file.type && !file.type.startsWith('')) {
    console.log('File is not an image.', file.type, file);
    return;
  }







  const reader = new FileReader();
  reader.addEventListener('load', (event) => {
    img.src = event.target.result;
  });
  reader.readAsDataURL(file);
}
*/












/*
$(document).ready(function()
{
  $("#fileInputControl").on("change",fileInputEventChangeEventHandler)
});
function fileInputEventChangeEventHandler(event)
{
  let fileInputControl = event.target;
  let files = fileInputControl.files;
  let firstFile = files[0];

let fileReader = new FileReader();




fileReader.onload = function(event)
{
  let dataUrl = event.target.result;
  $("#preview").attr("src" , `${dataUrl}`);
}
fileReader.readAsDataURL(firstFile);



let fileReader1 = new FileReader();




fileReader1.onload = function(event1)
{
  let dataUrl1 = event1.target.result;
  $("#preview1").attr("src" , `${dataUrl1}`);
}
fileReader1.readAsDataURL(firstFile);

let fileReader2 = new FileReader();



fileReader2.onload = function(event2)
{
  let dataUrl2 = event2.target.result;
  $("#preview2").attr("src" , `${dataUrl2}`);
}
fileReader2.readAsDataURL(firstFile);
} */


