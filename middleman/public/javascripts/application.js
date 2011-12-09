$(document).ready(function(){
  buildSongLinks(Songs);

  $("#jquery_jplayer_1").jPlayer({
    preload: "auto",
    swfPath: "/swfs",
    supplied: "mp3",

    ready: function() {
      $(this).jPlayer("setMedia", Songs[0]);
    }
  });
  
  $("li.song-name").click(function() {
    var songId = $(this).attr("id");
    console.log("clicked song #" + songId);
    
    var song = findSong(songId);
    console.log("song:", song)

    $("#jquery_jplayer_1").jPlayer("setMedia", song);
    $("#jquery_jplayer_1").jPlayer("play");
  });

  //assumes the songs are sorted correctly, bleh
  function buildSongLinks(songs) {
    var ul = $(".jp_playlist_1 ul");

    console.log("ul", ul);

    for(var i=0; i < songs.length; i++) {
      var song = songs[i];
      console.log("song", song)
      var li = $("<li id='" + song.id + "' class='song-name'>" + song.title + "</li>");
      console.log("li", li)
      li.appendTo(ul);
    }
  }

  function findSong(id) {
    for(var i=0; i < Songs.length; i++) {
      if(Songs[i].id.toString() === id.toString()) {
        return Songs[i];
      }
    }

    return null;
  }

});