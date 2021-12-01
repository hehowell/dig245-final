
/* javascript */


var clues = ['0', '1', '2', '3'];

var answers = ['a', 'b', 'c', 'd'];

// var _args = ["vac", "chambers", "commons", "baker", "nummit", "wall"];
var _args = ["0", "1", "2", "3", "4"];
// var _args = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function randomize(_args) {
	let currentIndex = _args.length,  randomIndex;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[_args[currentIndex], _args[randomIndex]] = [
			_args[randomIndex], _args[currentIndex]];
	}
	final = _args;
	return _args;
}


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

// Used like so

window.onload = (event) => {
	var arr = randomize(_args);
	sessionStorage.setItem("places", arr);
	var clue_track = 0;
	sessionStorage.setItem("clue_track", clue_track);


	var length = arr.length;

	$("#clue").empty();

	var randclue = Math.floor(Math.random() * clues.length);
	if (clues[randclue]) {
		console.log(clues[randclue]);
		console.log(arr[length-1]);


		$(".clue").append(
			'<a class="clue" href= "assets/' +
						arr[length-1] +
						'_pages/' +
						arr[length-1] +
						'_' +
						clues[randclue] +
						'.html"><button><svg class="icon-arrow before"><use xlink:href="#arrow"></use>' +
			'</svg><span class="label">Start your Adventure</span><svg class="icon-arrow after">' +
			'<use xlink:href="#arrow"></use></svg></button><svg style="display: none;"><defs>' +
			'<symbol id="arrow" viewBox="0 0 35 15"><title>Arrow</title>' +
			'<path d="M27.172 5L25 2.828 27.828 0 34.9 7.071l-7.07 7.071L25 11.314 27.314 9H0V5h27.172z "/>' +
			'</symbol></defs></svg></a>'

		);
			}
};


$( "select" )
  .change(function () {

		var num_clue = $("#num-clues option:selected").text();
		console.log(num_clue);
		sessionStorage.setItem("num_clue", num_clue);

  })
.change();
