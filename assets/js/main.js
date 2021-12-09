
/* javascript */
var places = sessionStorage.getItem("places");
var length = sessionStorage.getItem("length");
var last = sessionStorage.getItem("last");
console.log(places);
console.log(length);
console.log(last);


var answers = ["BUILDING COMMITTEE WM. J. MARTIN CHM. S.A. ROBINSON C.M.", "DAVIDSON COLLEGE Katherine and Tom Belk Visual Arts Center", "BEN CRAIG PLAZA Honoring BEN T. CRAIG ‘54 1933-1988", "SUMMIT COFFEE CO. EST 1998", "VAIL COMMONS", "E. CRAIG WALL, JR. ACADEMIC CENTER", "THIS STRUCTURE STANDS BECAUSE OF THE GENEROSITY OF EDWARD HERMAN LITTLE", "ALVAREZ COLLEGE UNION", "W.H. BELK HALL", "Welcome to the Davidson College Labyrinth and Peace Garden"];
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
    document.getElementById("plaque").innerHTML += "<h2> Reminder: </h2><h5> Keys are CASE SENSITIVE and SPACE/PUNCTUATION inclusive as well. Additionally, a new line is treated as a space.</h5>"
}

function add1() {
    document.getElementById("plaque").innerHTML +=
      "<p>Find the sign/structure on the North Eastern corner of the building and on the side facing away from the road, find the characters in the " + randL1 + ", " + randL2 + " and " + randL3 + " positions. (The first character is D) </p>";
    document.getElementById("plaque").innerHTML += "<h2> Reminder: </h2><h5> Keys are CASE SENSITIVE and SPACE/PUNCTUATION inclusive as well. Additionally, a new line is treated as a space.</h5>"
}

function add2() {
    document.getElementById("plaque").innerHTML +=
      "<p>At the Western Entrance, find the plaque for the Plaza that is closest to the road and type in the characters in the " + randL1 + ", " + randL2 + " and " + randL3 + " positions. (The first character is B)</p>";
    document.getElementById("plaque").innerHTML += "<h2> Reminder: </h2><h5> Keys are CASE SENSITIVE and SPACE/PUNCTUATION inclusive as well. Additionally, a new line is treated as a space.</h5>"
}

function add3() {
    document.getElementById("plaque").innerHTML +=
      "<p>Find the sign at the top of the Eastern facing entrance and type in the characters in the " + randL1 + ", " + randL2 + " and " + randL3 + " positions. (The first character is S)</p>";
    document.getElementById("plaque").innerHTML += "<h2> Reminder: </h2><h5> Keys are CASE SENSITIVE and SPACE/PUNCTUATION inclusive as well. Additionally, a new line is treated as a space.</h5>"
}

function add4() {
    document.getElementById("plaque").innerHTML +=
      "<p>At either of the Southern facing enterances, find the plaque that is adjacent to the door and type in the characters in the " + randL1 + ", " + randL2 + " and " + randL3 + " positions. (The first character is S)</p>";
    document.getElementById("plaque").innerHTML += "<h2> Reminder: </h2><h5> Keys are CASE SENSITIVE and SPACE/PUNCTUATION inclusive as well. Additionally, a new line is treated as a space.</h5>"
}

function add5() {
    document.getElementById("plaque").innerHTML +=
      "<p>On the Northern facing wall, find the title of the building above the doorway and type in the characters in the " + randL1 + ", " + randL2 + " and " + randL3 + " positions. (The first character is E)</p>";
    document.getElementById("plaque").innerHTML += "<h2> Reminder: </h2><h5> Keys are CASE SENSITIVE and SPACE/PUNCTUATION inclusive as well. Additionally, a new line is treated as a space.</h5>"
}

function add6() {
    document.getElementById("plaque").innerHTML +=
      "<p>On the Eastern facing wall, find the stone engraved plaque adjacent to the entrance and type in the characters in the " + randL1 + ", " + randL2 + " and " + randL3 + " positions. (The first character is T)</p>";
    document.getElementById("plaque").innerHTML += "<h2> Reminder: </h2><h5> Keys are CASE SENSITIVE and SPACE/PUNCTUATION inclusive as well. Additionally, a new line is treated as a space.</h5>"
}

function add7() {
    document.getElementById("plaque").innerHTML +=
      "<p>On the Eastern facing wall, find the stone engraved building title above the entrance and type in the characters in the " + randL1 + ", " + randL2 + " and " + randL3 + " positions. (The first character is A)</p>";
    document.getElementById("plaque").innerHTML += "<h2> Reminder: </h2><h5> Keys are CASE SENSITIVE and SPACE/PUNCTUATION inclusive as well. Additionally, a new line is treated as a space.</h5>"
}

function add8() {
    document.getElementById("plaque").innerHTML +=
      "<p> Find the engraved title of the building above the entrance on the Southern facing side and type in the characters in the " + randL1 + ", " + randL2 + " and " + randL3 + " positions. (The first character is W)</p>";
    document.getElementById("plaque").innerHTML += "<h2> Reminder: </h2><h5> Keys are CASE SENSITIVE and SPACE/PUNCTUATION inclusive as well. Additionally, a new line is treated as a space.</h5>"
}

function add9() {
    document.getElementById("plaque").innerHTML +=
      "<p> Find the sign at the entrance to the labyrinth and type in the characters in the " + randL1 + ", " + randL2 + " and " + randL3 + " positions. (The first character is W)</p>";
    document.getElementById("plaque").innerHTML += "<h2> Reminder: </h2><h5> Keys are CASE SENSITIVE and SPACE/PUNCTUATION inclusive as well. Additionally, a new line is treated as a space.</h5>"
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
if (last == 5){
  add5();
}
if (last == 6){
  add6();
}
if (last == 7){
  add7();
}
if (last == 8){
  add8();
}
if (last == 9){
  add9();
}





$("button").on("click", function (e) {

  if ($(".answer").val() === answer_key) {

    $(".img_align").empty();


    correct = 1;
    if(correct === 1){
      
      if (num_clue == 10) {
        num_clue = 10;
      }

      if (clue_track < num_clue) {
        $(".next_page").empty();
        if (clues[randclue]) {
          $(".next_page").append(
            '<form action="../' +
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
            '<form action="../' +
            'finish.html"> <input type="submit" class="Next_Clue" value="Finish!"/> </form>'
          );
        };
      }


  };


}
else{
  alert("Oh no! That's not quite right! Make sure to be careful about your counting! You got this!!");
};
});
