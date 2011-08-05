$(document).ready(function(){
  var RICK = { mp3: "/media/rick.mp3" };
  var BLUEGRASS = { mp3: "/media/Going Back To Mechanicsville.mp3" };
  
  $("#jquery_jplayer_1").jPlayer({
    preload: "auto",
    swfPath: "/swfs",
    supplied: "mp3",

    ready: function() {
      $(this).jPlayer("setMedia", RICK);
    }
  });
  
  $("li#rickroll").click(function() {
    console.log("clicked rickroll");
    
    $("#jquery_jplayer_1").jPlayer("setMedia", RICK);
    $("#jquery_jplayer_1").jPlayer("play");
  });

  $("li#bluegrass").click(function() {
    console.log("clicked bluegrass"); 

    $("#jquery_jplayer_1").jPlayer("setMedia", BLUEGRASS);
    $("#jquery_jplayer_1").jPlayer("play");
  });

});