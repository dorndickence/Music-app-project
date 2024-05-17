let pause = "⏸";
let play = "▶️";

let progress = document.getElementById("progress");
let song = document.getElementById("song");
const ctlicon = document.getElementById("ctlicon");


song.onloadedmetadata = function (){
progress.max = song.duration;
progress.value = song.currentTime;


}

function playPause(){
    if(ctlicon.classList.contains("pause")){
      song.pause();
       ctlicon.classList.remove("pause");
       ctlicon.classList.add("play");
       

} else {

    song.play();
       ctlicon.classList.add("pause");
       ctlicon.classList.remove("play");
       
 }
}

  if(song.play()){
   setInterval(()=>{
    progress.value = song.currentTime;
    },500);


}
 progress.onchange = function (){
 song.play();
 song.currentTime = progress.value;
 ctlicon.classList.add("pause");
       ctlicon.classList.remove("play");
}
