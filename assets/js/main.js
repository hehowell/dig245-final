
/* javascript */

// $("button").on("click", function (e) {
// 	e.preventDefault();
// 	var namespergroup = parseInt($(".pergroup").val()),
// 		allnames = $("textarea").val().split("\n"),
// 		allnameslen = allnames.length;
//
// 	var numgroups = Math.ceil(allnameslen / namespergroup);
//
// 	if ($(".numgroups").val()) {
// 		numgroups = parseInt($(".numgroups").val());
// 		namespergroup = allnameslen / numgroups;
// 	}
//
// 	$(".groups").empty();
//
// 	for (i = 0; i < numgroups; i++) {
// 		$(".groups").append(
// 			'<div class="group" id="group' +
// 				(i + 1) +
// 				'"><h2>Group ' +
// 				(i + 1) +
// 				"</h2></div>"
// 		);
// 	}
//
// 	$(".group").each(function () {
// 		for (j = 0; j < namespergroup; j++) {
// 			var randname = Math.floor(Math.random() * allnames.length);
// 			if (allnames[randname]) {
// 				$(this).append("<p>" + allnames[randname] + "</p>");
// 			}
// 			allnames.splice(randname, 1);
// 			console.log(allnames);
// 		}
// 	});
// });
//
//
// function shuffle(array) {
//   let currentIndex = array.length,  randomIndex;
//
//   // While there remain elements to shuffle...
//   while (currentIndex != 0) {
//
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;
//
//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex], array[currentIndex]];
//   }
// }
//
// // Used like so
// var arr = ['Chambers', 'Summit', 'Commons', 'Soccer Stadium'];
// shuffle(arr);
// console.log(arr);
