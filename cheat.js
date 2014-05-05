/**
 * @author Rukmal Weerawarana
 *
 * @description Short JS script to cheat on the Wikipedia Game (http://thewikigame.com/)
 */

// Appending jQuery to the DOM
var jqueryhtml = '<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>';
document.body.innerHTML += jqueryhtml;

// Setting the interval to check if the game has started
var checkInterval = 500 // ms

setInterval(function () {
	var popup = $('#colorbox');

	console.log(popup);
}, checkInterval);