// Add js here.

// Page load Initialize the video variable and turn off autoplay and turn off looping.
var vid = document.getElementById("videoplayer");
vid.autoplay = false;
vid.loop = false;
vid.load();

//Play Button  Play the video.
const playButton = document.getElementById("play");
playButton.addEventListener("click", funcPlay);

function funcPlay(){
    vid.play();
}


//Pause Button Pause Video
const pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", funcPause);

function funcPause(){
    vid.pause();
}


// slow down 	Slow down the video to the next lowest playback speed from the list: 0.5, 1, 2.
// If the video is already on the slowest speed, add an alert saying "Video is at slowest speed!"
const slowerButton = document.getElementById("slower");
slowerButton.addEventListener("click", funcSlower);

function funcSlower(){
    if(vid.playbackRate == 2){
        vid.playbackRate = 1;
    }
    else if(vid.playbackRate == 1){
        vid.playbackRate = 0.5;
    }
    else{
        alert("Video is at slowest speed!");
    }
}


//Speed up the video to the next highest playback speed from the list: 0.5, 1, 2.
// If the video is already on the highest speed, add an alert saying "Video is at fastest speed!"
const fasterButton = document.getElementById("faster");
fasterButton.addEventListener("click", funcFaster);

function funcFaster(){
    if(vid.playbackRate == 0.5){
        vid.playbackRate = 1;
    }
    else if(vid.playbackRate == 1){
        vid.playbackRate = 2;
    }
    else{
        alert("Video is at fastest speed!");
    }
}


//Skip Ahead Advance the current video by 15 seconds. If the video length has been exceeded go back to the start of the video.
const skipButton = document.getElementById("skip");
skipButton.addEventListener("click", funcSkip);

function funcSkip(){
    if((vid.currentTime + 15) < vid.duration){
        vid.currentTime += 15;
    }
    else{
        vid.currentTime = 0;
    }
}


//	Mute/unmute the video and update the text in the button.
const muteButton = document.getElementById("mute");
muteButton.addEventListener("click", funcMute);

function funcMute(){
    if(vid.muted == false){
        vid.muted = true;
        muteButton.innerText = 'unmute';
    }
    else{
        vid.muted = false;
        muteButton.innerText = 'mute';
    }
}


//	Volume slider  Change the volume based on the slider and update the volume information.
const slider = document.getElementById("slider");
const volume = document.getElementById("volume");
slider.addEventListener("change", funcSlider);

function funcSlider(){
    vid.volume = slider.value / 100;
    volume.innerText = slider.value;
}

