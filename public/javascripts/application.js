$(document).ready(function(){
 $("#jquery_jplayer_1").jPlayer({
  ready: function () {
   $(this).jPlayer("setMedia", {
    mp3: "/media/rick.mp3",
   });
  },
  swfPath: "/swfs",
  supplied: "mp3"
 });
});