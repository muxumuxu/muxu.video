var iframe = document.getElementById('video');

var player = $f(iframe);

var playButton = document.getElementById("#play-overlay");
$('#play-overlay').click(function(){
  player.api("play");
});

$(document).ready(function() {
  $('#play-overlay').click(function(){
      $(this).addClass("hidden");
      $(".content" ).addClass("hidden");
  });
});
