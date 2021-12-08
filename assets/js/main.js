
/* javascript */
var places = sessionStorage.getItem("places");
var length = sessionStorage.getItem("length");
var last = sessionStorage.getItem("last");
console.log(places);
console.log(length);
console.log(last);


var answers = ["BUILDING COMMITTEE WM. J. MARTIN CHM. S.A. ROBINSON C.M. RICHARDS F.L. JACKSON J.M. McCONNELL ARCHITECT HENRY C. HIBBS BUILDERS BYTHE AND ISENHOUR",
"DAVIDSON COLLEGE Katherine and Tom Belk Visual Arts Center", "BEN CRAIG PLAZA Honoring BEN T. CRAIG ‘54 1933-1988 Scholar Athlete Business Leader Christian Gentleman Davidson Trustee 1973-1988 Chairman 1985-1988 First Union Corporation President 1985-1988 A Memorial Gift from THE FIRST UNION FOUNDATION", "SUMMIT COFFEE CO. EST 1998", "VAIL COMMONS", "PAT PERONI GREENHOUSE Given in memory of Patricia Peroni, Ph.D., botanist and long-time Biology and Environmental Studies professor, through support from family, friends, and colleagues. Located on the north-east roof of E. Crag Wall, Jr. Academic Center Dedicated October 2021", "THIS STRUCTURE STANDS BECAUSE OF THE GENEROSITY OF EDWARD HERMAN LITTLE LL. D. DAVIDSON 1953 SON OF MECKLENBURG PRESIDENT AND CHAIRMAN OF COLGATE-PALMOLIVE 1938-1960 BENEFACTOR OF EDUCATION AND CONSTANT FRIEND OF DAVIDSON COLLEGE DEDICATED SEPTEMBER 27, 1974", "ALVAREZ COLLEGE UNION", "W.H. BELK HALL", "Welcome to the Davidson College Labyrinth and Peace Garden The labyrinth is a path for walking meditation. It has no false turns or dead ends. There is no “right” or “wrong” way to walk a labyrinth."];
let correct = 0;
var clues = ['0', '1', '2', '3'];
var randclue = Math.floor(Math.random() * clues.length);
var min = Math.ceil(0);
var max = Math.floor(answers[last].length-3);
var randLength = Math.floor(Math.random()  * (max - min) + min);
var randL1 = randLength + 1;
var randL2 = randLength + 2;
var randL3 = randLength + 3;
counter = MYLIBRARY.counter();
var num_clue = sessionStorage.getItem("num_clue");
var clue_track = sessionStorage.getItem("clue_track");

console.log(counter);

var answer_key = answers[last][randL1-1] + answers[last][randL2-1] + answers[last][randL3-1]
console.log(last);
console.log(answer_key);

function add0() {
    document.getElementById("plaque").innerHTML +=
      "<p>Find the plaque on the North side of the North West wall (the one facing Belk) and type in the characters at the " + randL1 + ", " + randL2 + " and " + randL3 + " positions. (The first character is B)</p>";
}

function add1() {
    document.getElementById("plaque").innerHTML +=
      "<p>Find the sign/structure on the North Eastern corner of the building and on the side facing away from the road, find the characters in the " + randL1 + ", " + randL2 + " and " + randL3 + " positions. (The first character is D) </p>";
}

function add2() {
    document.getElementById("plaque").innerHTML +=
      "<p>At the Western Entrance, find the plaque for the Plaza that is closest to the road and type in the characters in the " + randL1 + ", " + randL2 + " and " + randL3 + " positions. (The first character is B)</p>";
}

function add3() {
    document.getElementById("plaque").innerHTML +=
      "<p>Find the sign at the top of the Eastern facing entrance and type in the characters in the " + randL1 + ", " + randL2 + " and " + randL3 + " positions. (The first character is S)</p>";
}

function add4() {
    document.getElementById("plaque").innerHTML +=
      "<p>At either of the Southern facing enterances, find the plaque that is adjacent to the door and type in the characters " + randL1 + ", " + randL2 + " and " + randL3 + " positions. (The first character is S)</p>";
}


if (last == 0){
  add0();
}
if (last == 1){
  add1();
}
if (last == 2){
  add2();
}
if (last == 3){
  add3();
}
if (last == 4){
  add4();
}





$("button").on("click", function (e) {

  if ($(".answer").val() === answer_key) {



    correct = 1;
    if(correct === 1){

      if (clue_track < num_clue) {
        $(".next_page").empty();
        if (clues[randclue]) {
          $(".next_page").append(
            '<form method="POST" action="../' +
            places.split(',')[length-1] +
            '_pages/' +
            places.split(',')[length-1] +
            '_' +
            clues[randclue] +
            '.html"> <input type="submit" class="Next_Clue" value="Next Clue!"/> </form>'
          );
        };
      }
      else{
        $(".next_page").empty();
        if (clues[randclue]) {
          $(".next_page").append(
            '<form method="POST" action="../' +
            'finish.html"> <input type="submit" class="Next_Clue" value="Finish!"/> </form>'
          );
        };
      }


  };
}});
