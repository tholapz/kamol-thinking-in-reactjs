'use strict';
var quotes = [
'In the movie &quot;The Matrix&quot;, Chuck Norris is the Matrix. If you pay close attention in the green &quot;falling code&quot; scenes, you can make out the faint texture of his beard.',
'Chuck Norris causes the Windows Blue Screen of Death.',
'When Chuck Norris plays Oregon Trail, his family does not die from cholera or dysentery, but rather, roundhouse kicks to the face. He also requires no wagon, since he carries the oxen, axels, and buffalo meat on his back. He always makes it to Oregon before you.',
'Guantuanamo Bay, Cuba, is the military code-word for &quot;Chuck Norris' basement&quot;.',
'No statement can catch the ChuckNorrisException.',
'In the first Jurassic Park movie, the Tyrannosaurus Rex wasn't chasing the jeep. Chuck Norris was chasing the Tyrannosaurus AND the jeep.'
];
var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

function makeid () {
  var text = "";

  for( var i=0; i < 24; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function generateComment () {
	return quotes[Math.floor(Math.random() * quotes.length)];
}

module.exports = {
	fetchComments: function (howMany) {
		var _collection = [];
		for (var i = howMany - 1; i >= 0; i--) {
			_collection.push({
        "id": makeid(),
        "statuses": {
          "created": 1444680725923,
          "updated": 1444680725923
        },
        "message": generateComment(),
        "owner": {
          "username": "mikeh2042",
          "avatar": null,
          "id": "55651ba623192285717c428b"
        }
      })
		};
	}
}