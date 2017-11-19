// https://babeljs.io/repl/
'use strict';

var x = new Promise(function (r, e) {
	setTimeout(function (x) {
		console.log('one');
		r('two');
	}, 500);
}).then(function (d) {
	return new Promise(function (r, e) {
		setTimeout(function (x) {
			console.log(d);
			r('three');
		}, 500);
	});
}).then(function (d) {
	return new Promise(function (r, e) {
		setTimeout(function (x) {
			console.log(d);
			r('four');
		}, 500);
	});
}).then(function (d) {
	console.log(d);
});
