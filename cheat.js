/**
 * @author Rukmal Weerawarana
 *
 * @description Script to cheat on the Wikipedia Game (http://thewikigame.com/)
 */

// Appending jQuery to the DOM
var jqueryhtml = '<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>';
document.body.innerHTML += jqueryhtml;

// Setting the interval to check if the game has started
var checkInterval = 500 // ms

setInterval(function () {
	// Making sure the game is on the wiki page
	if ($('#wiki').length) {
		// Getting the endpage url
		var endURL = $('#endpagelink0').children('a').attr('href');
		var rawWikiURL = endURL.split('.org')[1];
		var linkID = 'cheaterlink';
		var appendHTML = '<a href="' + rawWikiURL + '" id="'+ linkID +'">';
		console.log($('#' + linkID).length);
		if ($('#' + linkID).length === 0) {
			$('#wiki').find('body').append(appendHTML);
			console.log('here');
		}
		console.log($('#wiki').contents().find('#' + linkID));
	}
}, checkInterval);