var jqueryhtml = '<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>';

document.getElementsByTagName('body').appendChild(jqueryhtml);

var outerhtml = $('#wiki').contents();

console.log(outerhtml);