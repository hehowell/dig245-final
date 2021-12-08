
var places = sessionStorage.getItem("places");
var length = 0;
var last;

places = places.split(',');
last = places.pop();
sessionStorage.setItem("last", last);
length = places.length;
sessionStorage.setItem("places", places);
sessionStorage.setItem("length", length);

var num_clue = sessionStorage.getItem("num_clue");
console.log(num_clue);
var clue_track = sessionStorage.getItem("clue_track");
clue_track++;
sessionStorage.setItem("clue_track", clue_track);
console.log(clue_track);

$(".heading").append(
  "CLUE " + clue_track
);
