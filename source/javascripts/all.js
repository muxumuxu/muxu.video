var iframe = document.getElementById('video');

var player = $f(iframe);

$("#play-overlay").click(function(){
  player.api("play");
});

$(".close").click(function(){
  player.api("unload");
});

$(document).ready(function() {
  $("#play-overlay").click(function(){
      $(".video-overlay").addClass("play");
  });
  $(".close").click(function(){
      $(".video-overlay").removeClass("play");
  });
});
