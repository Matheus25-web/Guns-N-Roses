let audio = document.getElementById("1")

function play(){

    video.play();

}
function pause(){

    video.pause();

}
function diminuir(){

    audio.playbackRate += 0.1;

}
function aumentar(){

    audio.playbackRate -= 0.1;

}