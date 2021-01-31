var player = videojs('my-video');

function playVideo() {

  //playing the aur comic video when modal opens
  player.play();

}

//pausing the video on modal close
$('#aura_comics_video').on('hidden.bs.modal', function () {
  player.pause();
});