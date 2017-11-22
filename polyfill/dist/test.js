'use strict';

var body = document.body;
var adiv = function adiv(str) {
	var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;

	console.log(str);
	var div = document.createElement('div');
	div.innerHTML = str;
	el.appendChild(div);
};

var x = new Promise(function (r, e) {
	setTimeout(function (x) {
		adiv('one');
		r('two');
	}, 500);
}).then(function (d) {
	return new Promise(function (r, e) {
		setTimeout(function (x) {
			adiv(d);
			r('three');
		}, 500);
	});
}).then(function (d) {
	return new Promise(function (r, e) {
		setTimeout(function (x) {
			adiv(d);
			r('four');
		}, 500);
	});
}).then(function (d) {
	adiv(d);
});