tl = new TimelineLite({ onUpdate: updateSlider, paused: true });

tl.to(".red", 1, { x: 500 }).to(".blue", 11, { x: 500 });

var aud = document.getElementById("audio");
// var tween = tl.to(".red", 1, {x:500})
//                .to(".blue", 1, {x:500});

function Update() {
  tl.progress(aud.currentTime / aud.duration);
  // tween.progress( aud.currentTime/aud.duration );
}

aud.onplay = function () {
  TweenLite.ticker.addEventListener("tick", Update);
};
aud.onpause = function () {
  TweenLite.ticker.removeEventListener("tick", Update);
};

$("#slider").slider({
  range: false,
  min: 0,
  max: 100,
  step: 0.1,
  slide: function (event, ui) {
    tl.pause();
    //adjust the timeline’s progress() based on slider value
    tl.progress(ui.value / 100);

    //set the seeking postion based
    aud.progress = ui.value / 100;
  }
});

$("button").click(function () {
  audio.play();
});

// updateSlider function + add {onUpdate: updateSlider} to the tl
function updateSlider() {
  $("#slider").slider("value", tl.progress() * 100);
}

//audio.onseeked = function(){
// tl.progress(audio.currentTime/audio.duration);
//}

//audio.ontimeupdate = function(){
//  tl.progress(audio.currentTime/audio.duration);
//};
